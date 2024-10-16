import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default function handler(req, res) {
  const { sourceGame, sourceRank, targetGame, lang = 'en' } = req.query;

  const dataDirectory = path.join(process.cwd(), 'data', lang);

  const readGameData = (game) => {
    return new Promise((resolve) => {
      const ranks = [];
      fs.createReadStream(path.join(dataDirectory, `${game}.csv`))
        .pipe(csv())
        .on('data', (row) => {
          ranks.push({ 
            name: row['Rank'], 
            topPercentage: parseFloat(row['Top%'])
          });
        })
        .on('end', () => {
          resolve(ranks);
        });
    });
  };

  readGameData(sourceGame)
    .then((sourceRanks) => {
      // Find the percentage for the source rank
      const sourceRankData = sourceRanks.find(r => r.name === sourceRank);
      const sourcePercentage = sourceRankData.topPercentage;

      if (!targetGame) {
        res.status(200).json({ 
          sourceTopPercentage: sourcePercentage
        });
        return;
      }

      return readGameData(targetGame).then((targetRanks) => {
        // Find the closest rank in the target game
        let closestRank = targetRanks[0];
        let smallestDifference = Math.abs(sourcePercentage - targetRanks[0].topPercentage);

        for (const rank of targetRanks) {
          const difference = Math.abs(sourcePercentage - rank.topPercentage);
          if (difference < smallestDifference) {
            smallestDifference = difference;
            closestRank = rank;
          }
        }

        res.status(200).json({ 
          targetRank: closestRank.name,
          sourceTopPercentage: sourcePercentage
        });
      });
    })
    .catch((error) => {
      console.error('Error processing CSV files:', error);
      res.status(500).json({ error: 'Error processing game data' });
    });
}

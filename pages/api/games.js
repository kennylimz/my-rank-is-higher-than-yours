import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default function handler(req, res) {
  const { lang = 'en' } = req.query; // Get language from query parameter, default to 'en'
  const dataDirectory = path.join(process.cwd(), 'data', lang);
  const gameFiles = fs.readdirSync(dataDirectory).filter(file => file.endsWith('.csv'));

  const games = [];

  const processFile = (file) => {
    return new Promise((resolve) => {
      const gameData = { name: path.basename(file, '.csv'), ranks: [] };
      fs.createReadStream(path.join(dataDirectory, file))
        .pipe(csv())
        .on('data', (row) => {
          gameData.ranks.push(row['Rank']);
        })
        .on('end', () => {
          games.push(gameData);
          resolve();
        });
    });
  };

  Promise.all(gameFiles.map(processFile))
    .then(() => {
      res.status(200).json(games);
    })
    .catch((error) => {
      console.error('Error processing CSV files:', error);
      res.status(500).json({ error: 'Error processing game data' });
    });
}

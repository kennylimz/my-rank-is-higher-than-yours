import { staticData } from '../public/staticData';

export function getGames(lang = 'en') {
  return Object.keys(staticData[lang]).map(gameName => ({
    name: gameName,
    ranks: staticData[lang][gameName].map(row => row['Rank'])
  }));
}

export function convertRank(sourceGame, sourceRank, targetGame, lang = 'en') {
  const sourceRanks = staticData[lang][sourceGame];
  const sourceRankData = sourceRanks.find(r => r['Rank'] === sourceRank);
  const sourcePercentage = parseFloat(sourceRankData['Top%']);

  let result = { sourceTopPercentage: sourcePercentage };

  if (targetGame) {
    const targetRanks = staticData[lang][targetGame];
    const closestRank = targetRanks.reduce((prev, curr) => 
      Math.abs(parseFloat(curr['Top%']) - sourcePercentage) < Math.abs(parseFloat(prev['Top%']) - sourcePercentage) ? curr : prev
    );
    result.targetRank = closestRank['Rank'];
  }

  return result;
}

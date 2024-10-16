import staticData from '../public/staticData.js';

export function getGames(lang) {
  if (!staticData || !staticData[lang]) {
    console.error(`No data available for language: ${lang}`);
    return [];
  }

  return Object.keys(staticData[lang]).map(gameName => ({
    name: gameName,
    ranks: staticData[lang][gameName].map(row => row['Rank'])
  }));
}

export function convertRank(sourceGame, sourceRank, targetGame, lang) {
  if (!staticData || !staticData[lang] || !staticData[lang][sourceGame]) {
    console.error(`No data available for language: ${lang} or game: ${sourceGame}`);
    return { error: 'Data not available' };
  }

  const sourceRanks = staticData[lang][sourceGame];
  const sourceRankData = sourceRanks.find(r => r['Rank'] === sourceRank);
  
  if (!sourceRankData) {
    console.error(`Rank not found: ${sourceRank} in game: ${sourceGame}`);
    return { error: 'Rank not found' };
  }

  const sourcePercentage = parseFloat(sourceRankData['Top%']);

  let result = { sourceTopPercentage: sourcePercentage };

  if (targetGame) {
    if (!staticData[lang][targetGame]) {
      console.error(`Target game not found: ${targetGame}`);
      return { error: 'Target game not found' };
    }

    const targetRanks = staticData[lang][targetGame];
    const closestRank = targetRanks.reduce((prev, curr) => 
      Math.abs(parseFloat(curr['Top%']) - sourcePercentage) < Math.abs(parseFloat(prev['Top%']) - sourcePercentage) ? curr : prev
    );
    result.targetRank = closestRank['Rank'];
  }

  return result;
}

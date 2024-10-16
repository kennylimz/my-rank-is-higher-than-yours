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
  const sourceRankIndex = sourceRanks.findIndex(r => r['Rank'] === sourceRank);
  
  if (sourceRankIndex === -1) {
    console.error(`Rank not found: ${sourceRank} in game: ${sourceGame}`);
    return { error: 'Rank not found' };
  }

  const sourceRankData = sourceRanks[sourceRankIndex];
  const sourcePercentage = parseFloat(sourceRankData['Top%']);
  const sourceRangeEnd = sourceRankIndex === sourceRanks.length - 1 ? 0 : parseFloat(sourceRanks[sourceRankIndex + 1]['Top%']);

  let result = { 
    sourceRank,
    sourceTopPercentage: sourcePercentage,
    sourceRangeStart: sourcePercentage,
    sourceRangeEnd: sourceRangeEnd
  };

  if (targetGame) {
    if (!staticData[lang][targetGame]) {
      console.error(`Target game not found: ${targetGame}`);
      return { error: 'Target game not found' };
    }

    const targetRanks = staticData[lang][targetGame];

    // Find closest rank for sourceRangeStart
    const closestStartRank = targetRanks.reduce((prev, curr) => 
      Math.abs(parseFloat(curr['Top%']) - sourcePercentage) < Math.abs(parseFloat(prev['Top%']) - sourcePercentage) ? curr : prev
    );

    // Find closest rank for sourceRangeEnd
    const closestEndRank = targetRanks.reduce((prev, curr) => 
      Math.abs(parseFloat(curr['Top%']) - sourceRangeEnd) < Math.abs(parseFloat(prev['Top%']) - sourceRangeEnd) ? curr : prev
    );

    result.targetRankLower = closestStartRank['Rank'];
    result.targetRankUpper = closestEndRank['Rank'];
    result.targetRangeStart = parseFloat(closestStartRank['Top%']);
    result.targetRangeEnd = parseFloat(closestEndRank['Top%']);
  }

  return result;
}

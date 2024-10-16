import { staticData } from '../public/staticData';

let staticData = null;

export async function loadStaticData() {
  if (!staticData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/staticData.json`);
    staticData = await response.json();
  }
  return staticData;
}

export async function getGames(lang) {
  const data = await loadStaticData();
  return Object.keys(data[lang]).map(gameName => ({
    name: gameName,
    ranks: data[lang][gameName].map(row => row['Rank'])
  }));
}

export async function convertRank(sourceGame, sourceRank, targetGame, lang) {
  const data = await loadStaticData();
  const sourceRanks = data[lang][sourceGame];
  const sourceRankData = sourceRanks.find(r => r['Rank'] === sourceRank);
  const sourcePercentage = parseFloat(sourceRankData['Top%']);

  let result = { sourceTopPercentage: sourcePercentage };

  if (targetGame) {
    const targetRanks = data[lang][targetGame];
    const closestRank = targetRanks.reduce((prev, curr) => 
      Math.abs(parseFloat(curr['Top%']) - sourcePercentage) < Math.abs(parseFloat(prev['Top%']) - sourcePercentage) ? curr : prev
    );
    result.targetRank = closestRank['Rank'];
  }

  return result;
}

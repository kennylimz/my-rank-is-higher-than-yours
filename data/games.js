// Your existing game data
const games = [
  { id: 1, name: 'Game 1', rank: 'Bronze' },
  { id: 2, name: 'Game 2', rank: 'Silver' },
  { id: 3, name: 'Game 3', rank: 'Gold' },
  // Add more games as needed
];

export function getAllGames() {
  return games;
}

export function convertRankToNumber(rank) {
  const rankOrder = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'];
  return rankOrder.indexOf(rank);
}

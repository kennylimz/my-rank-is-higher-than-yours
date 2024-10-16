import { useTranslation } from 'next-i18next';
import styles from '../styles/RankSelector.module.css';

export default function RankSelector({ games, selectedGame, selectedRank, onGameChange, onRankChange, label }) {
  const { t } = useTranslation('common');
  const handleGameChange = (e) => {
    onGameChange(e.target.value);
    if (onRankChange) onRankChange('');
  };

  return (
    <div className={styles.container}>
      <h2>{label}</h2>
      <select className={styles.select} value={selectedGame} onChange={handleGameChange}>
        <option value="">{t('selectGame')}</option>
        {games.map(game => (
          <option key={game.name} value={game.name}>{game.name}</option>
        ))}
      </select>
      {onRankChange && (
        <select className={styles.select} value={selectedRank} onChange={(e) => onRankChange(e.target.value)}>
          <option value="">{t('selectRank')}</option>
          {selectedGame && games.find(g => g.name === selectedGame)?.ranks.map(rank => (
            <option key={rank} value={rank}>{rank}</option>
          ))}
        </select>
      )}
    </div>
  );
}

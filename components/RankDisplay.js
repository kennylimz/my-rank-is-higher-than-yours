import styles from '../styles/RankDisplay.module.css';

export default function RankDisplay({ sourceGame, sourceRank, targetGame, targetRank, sourceTopPercentage, t }) {
  if (!sourceGame || !sourceRank) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2>{t('rankInfo')}</h2>
      <p>
        {t('beatsPlayers').replace('{{rank}}', sourceRank).replace('{{game}}', sourceGame).replace('{{percentage}}', (100-sourceTopPercentage)?.toFixed(2))}
      </p>
      {targetGame && targetRank && sourceGame !== targetGame && (
        <p>
          {t('equivalent').replace('{{rank}}', targetRank).replace('{{game}}', targetGame)}
        </p>
      )}
    </div>
  );
}

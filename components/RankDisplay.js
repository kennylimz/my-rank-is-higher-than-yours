import { useTranslation } from 'next-i18next';
import styles from '../styles/RankDisplay.module.css';

export default function RankDisplay({ sourceGame, sourceRank, targetGame, targetRank, sourceTopPercentage }) {
  const { t } = useTranslation('common');

  if (!sourceGame || !sourceRank) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2>{t('rankInfo')}</h2>
      <p>
        {t('beatsPlayers', { rank: sourceRank, game: sourceGame, percentage: (100-sourceTopPercentage)?.toFixed(2) })}
      </p>
      {targetGame && targetRank && sourceGame !== targetGame && (
        <p>
          {t('equivalent', { rank: targetRank, game: targetGame })}
        </p>
      )}
    </div>
  );
}

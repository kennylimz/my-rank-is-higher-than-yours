import styles from '../styles/RankDisplay.module.css';

export default function RankDisplay({ sourceGame, sourceRank, targetGame, rankData, t }) {
  if (!rankData) return null;

  const formatPercentage = (value) => (100 - value).toFixed(2);

  let targetRankText = '';
  if (rankData.targetRankLower === rankData.targetRankUpper) {
    targetRankText = rankData.targetRankLower;
  } else {
    targetRankText = `${rankData.targetRankLower} - ${rankData.targetRankUpper}`;
  }

  return (
    <div className={styles.container}>
      <h2>{t('rankInfo')}</h2>
      <p>
        {t('sourceRankInfo', {
          rank: sourceRank,
          game: sourceGame,
          start: formatPercentage(rankData.sourceRangeStart),
          end: formatPercentage(rankData.sourceRangeEnd)
        })}
      </p>
      {targetGame && rankData.targetRankLower && sourceGame !== targetGame && (
        <p>
          {t('targetRankInfo', {
            game: targetGame,
            rank: targetRankText,
            start: formatPercentage(rankData.targetRangeStart),
            end: formatPercentage(rankData.targetRangeEnd)
          })}
        </p>
      )}
    </div>
  );
}

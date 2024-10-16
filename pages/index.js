import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './_app';
import { translations, t } from '../translations';
import RankSelector from '../components/RankSelector';
import RankDisplay from '../components/RankDisplay';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import { getGames, convertRank } from '../lib/dataFunctions';

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [games, setGames] = useState([]);
  const [sourceGame, setSourceGame] = useState('');
  const [sourceRank, setSourceRank] = useState('');
  const [targetGame, setTargetGame] = useState('');
  const [rankData, setRankData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const gamesData = await getGames(language);
      setGames(gamesData);
      setIsLoading(false);
    }
    loadData();
  }, [language]);

  useEffect(() => {
    async function updateRankData() {
      if (sourceGame && sourceRank && targetGame) {
        const result = await convertRank(sourceGame, sourceRank, targetGame, language);
        console.log(result);
        setRankData(result);
      } else {
        setRankData(null);
      }
    }
    updateRankData();
  }, [sourceGame, sourceRank, targetGame, language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Reset fields when language changes
    setSourceGame('');
    setSourceRank('');
    setTargetGame('');
    setRankData(null);
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.languageSwitch}>
            <button 
              onClick={() => handleLanguageChange('zh')} 
              className={language === 'zh' ? styles.active : ''}
            >
              中文
            </button>
            <button 
              onClick={() => handleLanguageChange('en')} 
              className={language === 'en' ? styles.active : ''}
            >
              English
            </button>
          </div>
          <h1 className={styles.title}>{t('title', language)}</h1>
          <div className={styles.converterContainer}>
            <RankSelector
              games={games}
              selectedGame={sourceGame}
              selectedRank={sourceRank}
              onGameChange={setSourceGame}
              onRankChange={setSourceRank}
              label={t('sourceGame', language)}
              t={(key) => t(key, language)}
            />
            <RankSelector
              games={games}
              selectedGame={targetGame}
              onGameChange={setTargetGame}
              label={t('targetGame', language)}
              t={(key) => t(key, language)}
            />
          </div>
          <RankDisplay 
            sourceGame={sourceGame} 
            sourceRank={sourceRank} 
            targetGame={targetGame} 
            rankData={rankData}
            t={(key, params) => t(key, language, params)}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

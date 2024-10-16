import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './_app';
import { translations } from '../translations';
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
  const [targetRank, setTargetRank] = useState('');
  const [sourceTopPercentage, setSourceTopPercentage] = useState(null);
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
    async function updateSourcePercentage() {
      if (sourceGame && sourceRank) {
        const result = await convertRank(sourceGame, sourceRank, null, language);
        setSourceTopPercentage(result.sourceTopPercentage);
      } else {
        setSourceTopPercentage(null);
      }
    }
    updateSourcePercentage();
  }, [sourceGame, sourceRank, language]);

  useEffect(() => {
    async function updateTargetRank() {
      if (sourceGame && sourceRank && targetGame) {
        const result = await convertRank(sourceGame, sourceRank, targetGame, language);
        setTargetRank(result.targetRank);
      } else {
        setTargetRank('');
      }
    }
    updateTargetRank();
  }, [sourceGame, sourceRank, targetGame, language]);

  const t = (key) => translations[language][key];

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Reset fields when language changes
    setSourceGame('');
    setSourceRank('');
    setTargetGame('');
    setTargetRank('');
    setSourceTopPercentage(null);
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.converterContainer}>
          <RankSelector
            games={games}
            selectedGame={sourceGame}
            selectedRank={sourceRank}
            onGameChange={setSourceGame}
            onRankChange={setSourceRank}
            label={t('sourceGame')}
            t={t}
          />
          <RankSelector
            games={games}
            selectedGame={targetGame}
            onGameChange={setTargetGame}
            label={t('targetGame')}
            t={t}
          />
        </div>
        <RankDisplay 
          sourceGame={sourceGame} 
          sourceRank={sourceRank} 
          targetGame={targetGame} 
          targetRank={targetRank}
          sourceTopPercentage={sourceTopPercentage}
          t={t}
        />
        <Footer />
      )}
    </div>
  );
}

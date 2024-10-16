import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './_app';
import { translations } from '../translations';
import RankSelector from '../components/RankSelector';
import RankDisplay from '../components/RankDisplay';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [games, setGames] = useState([]);
  const [sourceGame, setSourceGame] = useState('');
  const [sourceRank, setSourceRank] = useState('');
  const [targetGame, setTargetGame] = useState('');
  const [targetRank, setTargetRank] = useState('');
  const [sourceTopPercentage, setSourceTopPercentage] = useState(null);

  useEffect(() => {
    fetch(`/api/games?lang=${language}`)
      .then(response => response.json())
      .then(data => setGames(data));

    // Reset fields when language changes
    setSourceGame('');
    setSourceRank('');
    setTargetGame('');
    setTargetRank('');
    setSourceTopPercentage(null);
  }, [language]);

  useEffect(() => {
    const fetchSourcePercentage = async () => {
      if (sourceGame && sourceRank) {
        const response = await fetch(`/api/convert?sourceGame=${sourceGame}&sourceRank=${sourceRank}&lang=${language}`);
        const data = await response.json();
        setSourceTopPercentage(data.sourceTopPercentage);
      } else {
        setSourceTopPercentage(null);
      }
    };

    fetchSourcePercentage();
  }, [sourceGame, sourceRank, language]);

  useEffect(() => {
    const convertRank = async () => {
      if (sourceGame && sourceRank && targetGame) {
        const response = await fetch(`/api/convert?sourceGame=${sourceGame}&sourceRank=${sourceRank}&targetGame=${targetGame}&lang=${language}`);
        const data = await response.json();
        setTargetRank(data.targetRank);
      } else {
        setTargetRank('');
      }
    };

    convertRank();
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
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import RankSelector from '../components/RankSelector';
import RankDisplay from '../components/RankDisplay';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [games, setGames] = useState([]);
  const [sourceGame, setSourceGame] = useState('');
  const [sourceRank, setSourceRank] = useState('');
  const [targetGame, setTargetGame] = useState('');
  const [targetRank, setTargetRank] = useState('');
  const [sourceTopPercentage, setSourceTopPercentage] = useState(null);

  useEffect(() => {
    fetch(`/api/games?lang=${i18n.language}`)
      .then(response => response.json())
      .then(data => setGames(data));
  }, [i18n.language]);

  useEffect(() => {
    const fetchSourcePercentage = async () => {
      if (sourceGame && sourceRank) {
        const response = await fetch(`/api/convert?sourceGame=${sourceGame}&sourceRank=${sourceRank}&lang=${i18n.language}`);
        const data = await response.json();
        setSourceTopPercentage(data.sourceTopPercentage);
      } else {
        setSourceTopPercentage(null);
      }
    };

    fetchSourcePercentage();
  }, [sourceGame, sourceRank, i18n.language]);

  useEffect(() => {
    const convertRank = async () => {
      if (sourceGame && sourceRank && targetGame) {
        const response = await fetch(`/api/convert?sourceGame=${sourceGame}&sourceRank=${sourceRank}&targetGame=${targetGame}&lang=${i18n.language}`);
        const data = await response.json();
        setTargetRank(data.targetRank);
      } else {
        setTargetRank('');
      }
    };

    convertRank();
  }, [sourceGame, sourceRank, targetGame, i18n.language]);

  const changeLanguage = (lng) => {
    router.push('/', '/', { locale: lng });
  };

  return (
    <div className={styles.container}>
      <div className={styles.languageSwitch}>
        <button 
          onClick={() => changeLanguage('zh')} 
          className={router.locale === 'zh' ? styles.active : ''}
        >
          中文
        </button>
        <button 
          onClick={() => changeLanguage('en')} 
          className={router.locale === 'en' ? styles.active : ''}
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
        />
        <RankSelector
          games={games}
          selectedGame={targetGame}
          onGameChange={setTargetGame}
          label={t('targetGame')}
        />
      </div>
      <RankDisplay 
        sourceGame={sourceGame} 
        sourceRank={sourceRank} 
        targetGame={targetGame} 
        targetRank={targetRank}
        sourceTopPercentage={sourceTopPercentage}
      />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

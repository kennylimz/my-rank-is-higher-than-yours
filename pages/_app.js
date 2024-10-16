import { useState, createContext } from 'react';
import '../styles/globals.css';
import '../styles/Home.module.css';
import '../styles/RankSelector.module.css';
import '../styles/RankDisplay.module.css';

export const LanguageContext = createContext();

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState('zh');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Component {...pageProps} />
    </LanguageContext.Provider>
  );
}

export default MyApp;

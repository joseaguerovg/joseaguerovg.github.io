import { useState } from 'react';
import Header from './components/header/Header';
import LanguageContext from './context/LanguageContext';

function App() {

  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Header />
    </LanguageContext.Provider>
  );
}

export default App;

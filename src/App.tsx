import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route

 } from "react-router-dom";
import Home from './components/content/pages/Home';
import LanguageContext from './context/LanguageContext';

function App() {

  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Home />
    </LanguageContext.Provider>
  );
}

export default App;

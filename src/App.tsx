import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route

 } from "react-router-dom";
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import Header from './components/header/Header';
import LanguageContext from './context/LanguageContext';

function App() {

  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;

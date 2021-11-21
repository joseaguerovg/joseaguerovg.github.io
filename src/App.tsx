import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route

 } from "react-router-dom";
import Movies from './components/pages/Movies';
import LanguageContext from './context/LanguageContext';
import MoviesDetails from './components/pages/MoviesDetails';
import Header from './components/header/Header';

function App() {

  const [language, setLanguage] = useState('en-US')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;

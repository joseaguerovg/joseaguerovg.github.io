import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route

 } from "react-router-dom";
import Movies from './components/pages/Movies';
import LanguageContext from './context/LanguageContext';
import MoviesDetails from './components/pages/MoviesDetails';

function App() {

  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Router>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;

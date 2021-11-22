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
import SearchPage from './components/pages/SearchPage';
import { en } from "./utils/language/en"

function App() {

  const [language, setLanguage] = useState<string>('en-US')
  const [text, setText] = useState(en)

  return (
    <LanguageContext.Provider value={{language, setLanguage, text, setText}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;

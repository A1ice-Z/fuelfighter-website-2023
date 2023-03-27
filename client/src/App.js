import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route /*, Redirect*/ } from 'react-router-dom'

import { DarkModeContext, useDarkMode } from './components/DarkModeContext';

import Home from './pages/Home'
import Team from './pages/Team'
import Blog from './pages/Blog'
import About from './pages/About'
import Sponsors from './pages/Sponsors'
import PageNotFound from './pages/404'
import Contact from './pages/Contact'
// import Admin    from './pages/Admin'
import ArticlePage from './pages/Blog/articlePage'
// import Dev from './pages/DevView'
import History from './pages/History'
import { Join } from './pages/Join';

import Header from './components/header'
import Footer from './components/footer'

import './styles/fonts.css'
import './styles/shared.css'
import './styles/animation.css'


function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [headerTransparent, setHeaderTransparent] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '/blog' || window.location.pathname === '/history') {
      setHeaderTransparent(true);
    } else {
      setHeaderTransparent(false);
    }
  }, []);
  
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Router>
        <div className='pageContainer'>
          <Header headerTransparent={headerTransparent} />
          <div className={headerTransparent ? 'transparentHeader' : ''}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route exact path='/blog/:id' element={<ArticlePage />} />
              <Route path='/about' element={<About />} />
              <Route path='/team' element={<Team />} />
              <Route path='/sponsors' element={<Sponsors />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/join' element={<Join />} />
              <Route path='/history' element={<History />} />
              {/* <Route path='/admin'    element={ <Admin /> } /> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
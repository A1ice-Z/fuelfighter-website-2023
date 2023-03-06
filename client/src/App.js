import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route /*, Redirect*/, useLocation } from 'react-router-dom'

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
import Dev from './pages/DevView'

import Header from './components/header'
import Footer from './components/footer'

import './styles/fonts.css'
import './styles/shared.css'
import './styles/animation.css'

const HandMadeRoute = ({ Param }) => {
  const location = useLocation()

  return (
    <div className='pageContainer'>
      <Header path={location.pathname} />
      <div className='aPage'>
        <Param />
      </div>
      <Footer />
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Router>
        <Routes>
          <Route path='/' element={<HandMadeRoute Param={Home} />} />
          <Route path='/dev' element={<HandMadeRoute Param={Dev} />} />
          <Route path='/blog' element={<HandMadeRoute Param={Blog} />} />
          <Route exact path='/blog/:id' element={<HandMadeRoute Param={ArticlePage} />} />
          <Route path='/about' element={<HandMadeRoute Param={About} />} />
          <Route path='/team' element={<HandMadeRoute Param={Team} />} />
          <Route path='/sponsors' element={<HandMadeRoute Param={Sponsors} />} />
          <Route path='/contact' element={<HandMadeRoute Param={Contact} />} />
          {/* <Route path='/admin'    element={ <Admin /> } /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
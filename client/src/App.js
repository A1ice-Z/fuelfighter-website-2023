import { BrowserRouter as Router, Routes, Route /*, Redirect*/} from 'react-router-dom'

import Home     from './pages/Home'
import Team     from './pages/Team'
import Blog     from './pages/Blog'
import About    from './pages/About'
import Sponsors from './pages/Sponsors'
import PageNotFound from './pages/404'
import Contact from './pages/Contact'
// import Admin    from './pages/Admin'

import Dev from './pages/DevView'

import Header from './components/header'


import './styles/fonts.css'
import './styles/shared.css'
import Footer from './components/footer'

function App() {
  return (
    <div className='pageContainer'>
      <Header />
      
      <div className='aPage'>
        <Router>
          <Routes>
            <Route path='/'         element={ <Home/> }/>
            <Route path='/dev'      element={ <Dev/> }/>
            <Route path='/blog'     element={ <Blog/> }/>
            <Route path='/about'    element={ <About/> }/>
            <Route path='/team'     element={ <Team/> }/>
            <Route path='/sponsors' element={ <Sponsors/> }/>
            <Route path="/contact" element={ <Contact/> } />
            {/* <Route path='/admin'    element={ <Admin /> } /> */}
            
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App
import { BrowserRouter as Router, Routes, Route /*, Redirect*/} from 'react-router-dom'

import Home     from './pages/Home'
import Team     from './pages/Team'
import Blog     from './pages/Blog'
import About    from './pages/About'
import Sponsors from './pages/Sponsors'
// import Admin    from './pages/Admin'

import Dev from './pages/DevView'

import Header from './components/header'


import './styles/fonts.css'
import './styles/shared.css'

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
            {/* <Route path='/admin'    element={ <Admin /> } /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App
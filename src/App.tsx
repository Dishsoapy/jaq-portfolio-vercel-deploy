import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './Pages/About/About';
import { Home } from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import { Personal } from './Pages/Extras/Personal';
import { Layout } from './Components/Layout';


function App() {

  return (
    <>
      <div className='Routes'>
        <Router>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Personal' element={<Personal/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

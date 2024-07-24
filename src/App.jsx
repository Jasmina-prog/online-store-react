import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/homepage/Home'
import About from './pages/aboutpage/About'

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element ={<About />} />
      <Route path='*' element ={<h1>Page Not Found 404</h1>} />
    </Routes>
    </>
  )
}

export default App

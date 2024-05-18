import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './components/Header'
import FooterCom from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/sign-in' element={<Signin />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/sign-up' element={<Signup />}></Route>
      
     </Routes>
     <FooterCom />
     </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/sign-in' element={<Signin />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/sign-out' element={<Signout />}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

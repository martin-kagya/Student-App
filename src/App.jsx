import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Dictionary from './Components/Dictionary'
import Conversion from './Components/Conversion'
import Home from './Components/Home'
import Login from './Components/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<Login />} />
      <Route path='/home' element= {<Home />} />
      <Route path='/home/dictionary' element= {<Dictionary />} />
      <Route path='/home/conversion' element= {<Conversion />} />
    </Routes>
    </>
  )
}

export default App

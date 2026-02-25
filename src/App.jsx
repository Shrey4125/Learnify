import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Pdf_uploader from './Components/Pdf_uploader';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Pdf_uploader' element={<Pdf_uploader/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Appointment from './Pages/Appointment'
import Legal from './Pages/Legal'

function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path="/legal" element={<Legal />} />
     <Route path='/appointment' element={<Appointment/>}/>
    </Routes>
   

    </>
  )
}

export default App

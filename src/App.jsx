import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectPlayerPage from './page/SelectPlayerPage'
import { Route, Routes } from 'react-router-dom'
import Game from './page/game'

function App() {


  return (
    <main className='w-full h-screen bg-[#282c34] flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<SelectPlayerPage/>} />
        <Route path='game' element={<Game/>} />
      </Routes>
    </main>
  )
}

export default App

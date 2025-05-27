import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectPlayerPage from './page/SelectPlayerPage'

function App() {


  return (
    <main className='w-full h-screen bg-[#282c34] flex items-center justify-center'>
      <SelectPlayerPage />
    </main>
  )

}

export default App

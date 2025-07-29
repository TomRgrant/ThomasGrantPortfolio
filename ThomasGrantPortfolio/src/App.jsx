import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Containers/LandingPage'
import Projects from './Containers/Projects'

function App() {

  return (
    <>
      <LandingPage />
      <Projects />
    </>
  )
}

export default App

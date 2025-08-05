import { useState } from 'react'
import './App.css'
import LandingPage from './Containers/LandingPage'
import Projects from './Containers/ProjectPage'
import AboutMe from './Containers/AboutMe'

function App() {

  return (
    <>
    
      <LandingPage />
      <Projects/>
      <AboutMe />
    </>
  )
}

export default App

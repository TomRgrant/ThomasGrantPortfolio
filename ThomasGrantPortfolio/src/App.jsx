import { useState } from 'react'
import './App.css'
import LandingPage from './Containers/LandingPage'
import Projects from './Containers/ProjectPage'
import AboutMe from './Containers/AboutMe'
import ContactMe from './Containers/ContactMe'

function App() {

  return (
    <>
    
      <LandingPage />
      <Projects/>
      <AboutMe />
      <ContactMe />
    </>
  )
}

export default App

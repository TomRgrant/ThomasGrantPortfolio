import { useState } from 'react'
import './App.css'
import LandingPage from './Containers/LandingPage'
import Projects from './Containers/Projects'
import ProjectCarousel from './Components/ProjectCarousel'

function App() {

  return (
    <>
    
      <LandingPage className="overflowx-hidden" />
      <Projects className="overflowx-hidden"/>
    </>
  )
}

export default App

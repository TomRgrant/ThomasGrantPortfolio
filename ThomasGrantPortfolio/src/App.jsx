import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css'
import LandingPage from './Containers/LandingPage'
import Projects from './Containers/ProjectPage'
import AboutMe from './Containers/AboutMe'
import ContactMe from './Containers/ContactMe'
import Footer from './Components/Footer'
import Navbar from './Components/NavBar'
import SocialSidebar from './Components/SocialSidebar'

function App() {

  return (
    <>
      <Navbar />
      <LandingPage />
      <Projects/>
      <AboutMe />
      <ContactMe />
      <Footer />
      <SocialSidebar />
    </>
  )
}

export default App

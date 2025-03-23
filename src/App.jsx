import React from 'react'
import Navbar from './sections/navbar.jsx'
import Hero from './sections/hero.jsx'
import About from './sections/About.jsx'
import Clients from './sections/Clients.jsx'
import Project from './sections/Project.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      {/* <Clients /> */}
      <Contact />
    </main>
  );
}

export default App

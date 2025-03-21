import React from 'react'
import Navbar from './sections/navbar.jsx'
import Hero from './sections/hero.jsx'
import About from './sections/About.jsx'

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App

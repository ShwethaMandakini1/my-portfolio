import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhatIDo from "./components/WhatIDo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
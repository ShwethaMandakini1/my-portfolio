import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhatIDo from "./components/WhatIDo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CursorNetwork from "./components/CursorNetwork"
import AnimatedBackground from "./components/AnimatedBackground"

function App() {
  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <CursorNetwork />
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
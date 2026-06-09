import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhatIDo from "./components/WhatIDo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
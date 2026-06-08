import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhatIDo from "./components/WhatIDo"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Skills />
    </div>
  )
}

export default App
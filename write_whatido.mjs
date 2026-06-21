import { writeFileSync } from 'fs'
const code = `export default function WhatIDo() {
  const services = [
    { icon: "🌐", title: "Web Development", desc: "Building responsive and interactive web apps using React, HTML, CSS and Node.js." },
    { icon: "📱", title: "Mobile Development", desc: "Creating cross-platform mobile applications using Flutter and Dart." },
    { icon: "🛠️", title: "Backend Development", desc: "Designing RESTful APIs and working with databases like MySQL, MongoDB and Firebase." }
  ]
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet text-sm font-medium tracking-widest uppercase mb-2">What I Do</p>
          <h2 className="text-4xl font-bold text-white">My Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:border-violet/60 transition-colors duration-300">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`
writeFileSync("src/components/WhatIDo.jsx", code)
console.log("WhatIDo done!")

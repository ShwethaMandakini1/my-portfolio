export default function Experience() {
  const stats = [
    { num: "7+", label: "Projects Completed", color: "text-violet" },
    { num: "5+", label: "Technologies", color: "text-cyan" },
    { num: "2+", label: "Years Learning", color: "text-blue" },
    { num: "1", label: "Internship", color: "text-violet" },
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet text-sm font-medium tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl font-bold text-white">Experience & Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Work Experience</h3>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-violet/50 transition-colors duration-300">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h4 className="text-white font-semibold">Software Engineering Intern</h4>
                  <p className="text-violet text-sm mt-1">Bileeta</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs px-3 py-1 rounded-full bg-violet/20 text-violet">Internship</span>
                  <span className="text-gray-500 text-xs">2025</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3 mb-4">
                <li className="text-gray-400 text-sm leading-relaxed">Built and launched the company website using modern web technologies, improving online presence and user engagement.</li>
                <li className="text-gray-400 text-sm leading-relaxed">Researched and evaluated AI tools for marketing automation, recommending solutions that enhanced team productivity.</li>
                <li className="text-gray-400 text-sm leading-relaxed">Implemented web improvements and technology solutions to support business and marketing operations.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "AI Tools", "Marketing Tech"].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-navy border border-border text-gray-400">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Education</h3>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-cyan/50 transition-colors duration-300 mb-6">
              <h4 className="text-white font-semibold mb-1">BSc (Hons) Software Engineering</h4>
              <p className="text-cyan text-sm mb-1">NSBM Green University</p>
              <p className="text-gray-500 text-xs mb-4">In partnership with Plymouth University, UK</p>
              <span className="text-xs px-3 py-1 rounded-full bg-cyan/20 text-cyan">2023 — Present</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                  <p className={"text-3xl font-bold " + s.color}>{s.num}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
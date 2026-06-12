export default function Experience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Bileeta",
      period: "2024",
      type: "Internship",
      typeColor: "bg-violet/20 text-violet",
      points: [
        "Built and launched the company website using modern web technologies, improving online presence and user engagement.",
        "Researched and evaluated AI tools for marketing automation, recommending solutions that enhanced team productivity.",
        "Implemented web improvements and technology solutions to support business and marketing operations."
      ],
      tags: ["Web Development", "AI Tools", "Marketing Tech"]
    }
  ]

  const education = [
    {
      degree: "BSc (Hons) Software Engineering",
      institution: "NSBM Green University",
      partner: "Plymouth University, UK",
      period: "2022 — Present",
      color: "border-violet/50"
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{background: "radial-gradient(circle, #3B82F6, transparent)"}}></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet text-sm font-medium tracking-widest uppercase mb-2">Background</p>
          <h2 className="text-4xl font-bold text-white">Experience & Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Experience */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-violet inline-block"></span>
              Work Experience
            </h3>
            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <div key={exp.role} className="bg-card border border-border rounded-xl p-6 hover:border-violet/50 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h4 className="text-white font-semibold">{exp.role}</h4>
                      <p className="text-violet text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${exp.typeColor}`}>{exp.type}</span>
                      <span className="text-gray-500 text-xs">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-violet mt-1">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-navy border border-border text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-cyan inline-block"></span>
              Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <div key={edu.degree} className={`bg-card border rounded-xl p-6 hover:border-cyan/50 transition-colors duration-300 ${edu.color}`}>
                  <h4 className="text-white font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-cyan text-sm mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-xs mb-3">In partnership with {edu.partner}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan/20 text-cyan">{edu.period}</span>
                </div>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-violet">7+</p>
                  <p className="text-gray-400 text-xs mt-1">Projects Completed</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-cyan">5+</p>
                  <p className="text-gray-400 text-xs mt-1">Technologies</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-blue">2+</p>
                  <p className="text-gray-400 text-xs mt-1">Years Learning</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-violet">1</p>
                  <p className="text-gray-400 text-xs mt-1">Internship</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
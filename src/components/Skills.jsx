export default function Skills() {
  const skills = [
    { name: "HTML", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
    { name: "CSS", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    { name: "React", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
    { name: "Dart", color: "bg-blue-400/20 text-blue-300 border-blue-400/30" },
    { name: "Flutter", color: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30" },
    { name: "Java", color: "bg-red-500/20 text-red-400 border-red-500/30" },
    { name: "Python", color: "bg-green-500/20 text-green-400 border-green-500/30" },
    { name: "C++", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { name: "Node.js", color: "bg-green-400/20 text-green-300 border-green-400/30" },
    { name: "MySQL", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
    { name: "MongoDB", color: "bg-green-600/20 text-green-400 border-green-600/30" },
    { name: "Firebase", color: "bg-yellow-600/20 text-yellow-400 border-yellow-600/30" },
    { name: "Git", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
    { name: "Figma", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    { name: "VS Code", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { name: "Android Studio", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  ]

  return (
    <section id="techstack" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet text-sm font-medium tracking-widest uppercase mb-2">Tech Stack</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${skill.color} hover:scale-105 transition-transform duration-200 cursor-default`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
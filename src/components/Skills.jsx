export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Dart",
    "Flutter", "Android Studio", "Java", "Python", "C++",
    "Node.js", "Express.js", "MySQL", "MongoDB", "Firebase",
    "Git", "Figma", "VS Code"
  ]

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet text-sm font-medium tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto">Technologies I work with to build modern, scalable applications</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full border border-border text-gray-300 text-sm font-medium bg-card hover:border-violet hover:text-violet transition-colors duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
import { writeFileSync } from 'fs'
const code = `export default function Skills() {
  const categories = [
    { label: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Dart"] },
    { label: "Mobile", skills: ["Flutter", "Android Studio"] },
    { label: "Languages", skills: ["Java", "Python", "C++"] },
    { label: "Backend", skills: ["Node.js", "Express.js"] },
    { label: "Databases", skills: ["MySQL", "MongoDB", "Firebase"] },
    { label: "Tools", skills: ["Git", "Figma", "VS Code"] },
  ]
  return (
    <section id="techstack" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet text-sm font-medium tracking-widest uppercase mb-2">Tech Stack</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>
        <div className="flex flex-col gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-wrap items-center gap-3">
              <span className="text-gray-500 text-xs w-20 shrink-0">{cat.label}</span>
              {cat.skills.map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-lg border border-border text-gray-300 text-sm hover:border-violet hover:text-violet transition-colors duration-200 cursor-default bg-card">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`
writeFileSync("src/components/Skills.jsx", code)
console.log("Skills done!")

export default function Projects() {
  const projects = [
    {
      title: "Mentora — AI Grading System",
      desc: "Full-stack web platform for automated assignment grading using explainable AI. Lecturers define rubrics and Groq LLaMA scores student submissions with human-readable justifications.",
      tags: ["React", "Node.js", "MongoDB", "Groq AI", "Express.js", "Tesseract.js"],
      color: "border-violet/50 hover:border-violet",
      badge: "Solo · Final Year Project",
      badgeColor: "bg-violet/20 text-violet",
      github: "https://github.com/ShwethaMandakini1/Mentora_Final-year-project"
    },
    {
      title: "NSBM Green Events",
      desc: "Centralized digital platform replacing WhatsApp groups and printed forms for managing campus events, club proposals, approvals, and student participation at NSBM.",
      tags: ["JavaScript", "HTML", "CSS"],
      color: "border-green-500/50 hover:border-green-500",
      badge: "Group Work",
      badgeColor: "bg-green-500/20 text-green-400",
      github: "https://github.com/Green-Events/green-events"
    },
    {
      title: "SmartPOS",
      desc: "Modern Point of Sale system for supermarket operations with customer management, inventory tracking, sales operations, and advanced data analytics for actionable business insights.",
      tags: ["Java", "CSS"],
      color: "border-orange-500/50 hover:border-orange-500",
      badge: "Group Work",
      badgeColor: "bg-orange-500/20 text-orange-400",
      github: "https://github.com/sadeesacs/SmartPOS"
    },
    {
      title: "Lumi Smart",
      desc: "IoT platform transforming urban lighting into an intelligent network with real-time sensor integration, energy optimization algorithms, and sustainability monitoring. Reduces energy consumption by up to 70%.",
      tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
      color: "border-yellow-500/50 hover:border-yellow-500",
      badge: "Group Work",
      badgeColor: "bg-yellow-500/20 text-yellow-400",
      github: "https://github.com/dpaperera05/Lumi-Smart"
    },
    {
      title: "SafeServe — PHI Manager",
      desc: "Mobile and web platform revolutionizing food safety inspections for Public Health Inspectors in Sri Lanka. Replaces paper-based processes with digital inspections, follow-ups, and compliance tracking. Responsible for the web application.",
      tags: ["JavaScript", "Dart", "HTML", "C++", "CMake"],
      color: "border-red-500/50 hover:border-red-500",
      badge: "Group Work · Web Lead",
      badgeColor: "bg-red-500/20 text-red-400",
      github: "https://github.com/SeneshFitzroy/SafeServe-PHI-Manager"
    },
    {
      title: "Cinema Ticket Booking",
      desc: "Dynamic cinema website with online ticket booking, payment handling, feedback visualization, and SMS/email notifications. Built for scalability with a clean MVC architecture using Servlets and DAOs.",
      tags: ["Java", "JavaScript", "MySQL", "JSP", "Bootstrap", "Chart.js"],
      color: "border-pink-500/50 hover:border-pink-500",
      badge: "Group Work",
      badgeColor: "bg-pink-500/20 text-pink-400",
      github: "https://github.com/Mandira-16/JavaProject"
    },
    {
      title: "My Portfolio",
      desc: "Personal portfolio website built from scratch with a modern gradient design, dark navy theme with purple accents, and fully responsive layout.",
      tags: ["React", "Tailwind CSS", "Vite"],
      color: "border-blue/50 hover:border-blue",
      badge: "Solo Project",
      badgeColor: "bg-blue/20 text-blue",
      github: "https://github.com/ShwethaMandakini1/my-portfolio"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{background: "radial-gradient(circle, #22D3EE, transparent)"}}></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet text-sm font-medium tracking-widest uppercase mb-2">My Work</p>
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className={`bg-card border rounded-xl p-6 flex flex-col transition-colors duration-300 ${project.color}`}>
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <h3 className="text-white font-semibold text-lg mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-navy border border-border text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
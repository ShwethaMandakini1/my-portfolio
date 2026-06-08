export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{background: "radial-gradient(circle, #7C3AED, transparent)"}}></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{background: "radial-gradient(circle, #3B82F6, transparent)"}}></div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-gray-400 text-lg mb-2">Hi there 👋</p>
          <h1 className="text-5xl font-bold mb-2">
            I'm <span className="text-violet">Shwetha Mandakini</span>
          </h1>
          <h2 className="text-xl text-gray-300 font-medium mb-4">
            Software Engineering Student
          </h2>
          <p className="text-gray-400 leading-relaxed mb-2 max-w-md">
            Undergraduate at <span className="text-cyan">NSBM Green University</span>, reading for a Plymouth University degree in Software Engineering.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
            I enjoy turning ideas into solutions through code and creativity. Passionate about building efficient and user-friendly applications.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="bg-violet hover:bg-violet-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              View My Work
            </a>
            <a href="#contact" className="border border-violet text-violet hover:bg-violet hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full opacity-30 blur-2xl" style={{background: "radial-gradient(circle, #8B5CF6, #3B82F6)"}}></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="bg-card border border-border rounded-2xl p-8 w-72">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-violet/40 rounded w-3/4"></div>
                  <div className="h-3 bg-blue/40 rounded w-1/2"></div>
                  <div className="h-3 bg-cyan/40 rounded w-5/6"></div>
                  <div className="h-3 bg-violet/20 rounded w-2/3"></div>
                  <div className="h-3 bg-blue/30 rounded w-3/4"></div>
                  <div className="h-3 bg-cyan/40 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 text-gray-500 text-sm">
          <span>Scroll down</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-violet to-transparent"></div>
        </div>
      </div>

    </section>
  )
}
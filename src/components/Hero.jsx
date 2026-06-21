import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import shwethaImg from "../assets/Shwetha_nobg.png"

const roles = ["Software Engineer", "Web Developer", "Mobile Developer", "Problem Solver"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  const particles = Array.from({ length: 15 }, (_, i) => ({

    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 3,
  }))

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-violet/20"
          style={{ left: p.x + "%", top: p.y + "%", width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{background: "radial-gradient(circle, #7C3AED, transparent)"}}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-0 w-64 h-64 rounded-full blur-3xl"
        style={{background: "radial-gradient(circle, #3B82F6, transparent)"}}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left side */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-violet/10 border border-violet/30 rounded-full px-4 py-2 mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400 inline-block"
            />
            <span className="text-violet text-xs font-medium">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl font-bold mb-4"
          >
            I'm <span className="text-violet">Shwetha<br />Mandakini</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 font-medium mb-6 h-8 flex items-center gap-1"
          >
            <span>{displayed}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-5 bg-violet"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-gray-400 leading-relaxed mb-2 max-w-md"
          >
            Undergraduate at <span className="text-cyan">NSBM Green University</span>, reading for a Plymouth University degree in Software Engineering.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-400 leading-relaxed mb-8 max-w-md"
          >
            I enjoy turning ideas into solutions through code and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-violet hover:bg-violet-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-violet text-violet hover:bg-violet hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>

        {/* Right side - photo with floating console */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
          className="relative flex justify-center items-end h-[32rem]"
        >
          {/* Glow behind photo */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-30"
            style={{background: "radial-gradient(circle, #8B5CF6, #3B82F6)"}}
          />

          {/* Photo - transparent cutout, no frame */}
          <img
            src={shwethaImg}
            alt="Shwetha Mandakini"
            className="relative h-[30rem] w-auto object-contain object-bottom z-10 drop-shadow-2xl"
          />

          {/* Floating console card - bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 w-52 shadow-2xl z-20"
          >
            <div className="flex gap-1.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-1 font-mono text-xs">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-violet">const <span className="text-white">me</span> = {"{"}</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-gray-400 pl-3">name: <span className="text-cyan">"Shwetha"</span>,</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="text-gray-400 pl-3">open: <span className="text-green-400">true</span></motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="text-violet">{"}"}</motion.p>
            </div>
          </motion.div>

          {/* Floating badge - top left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-2 -left-4 bg-card border border-violet/40 rounded-xl px-4 py-2 z-20"
          >
            <p className="text-violet text-xs font-semibold">7+ Projects</p>
            <p className="text-gray-400 text-xs">Completed</p>
          </motion.div>

          {/* Floating badge - right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            animate2={{ y: [0, -6, 0] }}
            className="absolute top-1/2 -right-8 bg-card border border-cyan/40 rounded-xl px-4 py-2 z-20"
          >
            <p className="text-cyan text-xs font-semibold">NSBM</p>
            <p className="text-gray-400 text-xs">Plymouth UK</p>
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1 text-gray-500 text-sm">
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-8 bg-gradient-to-b from-violet to-transparent"
          />
        </div>
      </motion.div>

    </section>
  )
}
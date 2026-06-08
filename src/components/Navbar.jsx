import { useState } from "react"

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-violet font-semibold text-lg tracking-wide">
          YourName<span className="text-white">():</span>
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={"#" + link.toLowerCase()} className="text-gray-400 hover:text-violet text-sm transition-colors duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-navy-secondary border-t border-border px-6 py-4">
          {navLinks.map((link) => (
            <a key={link} href={"#" + link.toLowerCase()} className="block text-gray-400 hover:text-violet py-2 text-sm" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
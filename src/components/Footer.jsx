export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-violet font-bold">
          Shwetha Mandakini<span className="text-white">():</span>
        </span>
        <p className="text-gray-500 text-sm">© 2025 Shwetha Mandakini. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/ShwethaMandakini1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-sm transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/shwetha-premakumara-274b7b299" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-sm transition-colors">LinkedIn</a>
          <a href="mailto:shwethamandakini2003@gmail.com" className="text-gray-500 hover:text-white text-sm transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
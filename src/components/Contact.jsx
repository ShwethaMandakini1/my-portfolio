export default function Contact() {
  const contacts = [
    { icon: '✉️', label: 'Email', value: 'shwethamandakini2003@gmail.com', href: 'mailto:shwethamandakini2003@gmail.com', color: 'hover:border-violet' },
    { icon: '💼', label: 'LinkedIn', value: 'shwetha-premakumara', href: 'https://www.linkedin.com/in/shwetha-premakumara-274b7b299', color: 'hover:border-blue' },
    { icon: '🐙', label: 'GitHub', value: 'ShwethaMandakini1', href: 'https://github.com/ShwethaMandakini1', color: 'hover:border-gray-400' },
    { icon: '💬', label: 'WhatsApp', value: '+94 77 804 1668', href: 'https://wa.me/94778041668', color: 'hover:border-green-500' }
  ]
  return (
    <section id='contact' className='py-20 relative'>
      <div className='absolute bottom-0 left-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl -translate-x-1/2' style={{background: 'radial-gradient(circle, #8B5CF6, transparent)'}}></div>
      <div className='max-w-4xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <p className='text-violet text-sm font-medium tracking-widest uppercase mb-2'>Get In Touch</p>
          <h2 className='text-4xl font-bold text-white mb-4'>Contact Me</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-4'>
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target='_blank' rel='noopener noreferrer' className={'bg-card border border-border rounded-xl p-4 flex items-center gap-4 transition-colors duration-300 ' + c.color}>
                <span className='text-2xl'>{c.icon}</span>
                <div>
                  <p className='text-gray-400 text-xs'>{c.label}</p>
                  <p className='text-white text-sm font-medium'>{c.value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className='bg-card border border-border rounded-xl p-6'>
            <h3 className='text-white font-semibold mb-6'>Send a Message</h3>
            <div className='flex flex-col gap-4'>
              <div>
                <label className='text-gray-400 text-xs mb-1 block'>Your Name</label>
                <input type='text' placeholder='John Doe' className='w-full bg-navy border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet transition-colors' />
              </div>
              <div>
                <label className='text-gray-400 text-xs mb-1 block'>Your Email</label>
                <input type='email' placeholder='john@example.com' className='w-full bg-navy border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet transition-colors' />
              </div>
              <div>
                <label className='text-gray-400 text-xs mb-1 block'>Message</label>
                <textarea rows={4} placeholder='Hey Shwetha, I would love to connect...' className='w-full bg-navy border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet transition-colors resize-none' />
              </div>
              <a href='mailto:shwethamandakini2003@gmail.com' className='bg-violet hover:bg-violet-dark text-white text-center py-3 rounded-lg font-medium transition-colors duration-200'>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
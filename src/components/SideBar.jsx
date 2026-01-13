export default function Sidebar({ isOpen, onClose }) {
  const links = [
    ['/', 'Home', 'fa-home'],
    ['/about', 'About', 'fa-user'],
    ['/music', 'Music', 'fa-music'],
    ['/gallery', 'Gallery', 'fa-images'],
  ]

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-80 z-50 transform transition-transform duration-300 bg-amber-50/50 backdrop-blur-md border-r
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-6">
            <h2 className="text-2xl font-bold text-slate-900">Quick Links</h2>
            <button onClick={onClose} className="text-3xl text-slate-900">
              <i className="fas fa-times" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-4">
              {links.map(([href, label, icon]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={onClose}
                    className="flex items-center text-lg py-3 px-4 rounded-lg text-slate-900"
                  >
                    <i className={`fas ${icon} mr-3 w-5`} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-amber-200 transition-opacity
        ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
    </>
  )
}

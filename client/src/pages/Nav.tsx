import { Link, useLocation } from 'wouter'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' 

const Nav = () => {
  const [location] = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClasses = (path : any) =>
    location === path
      ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1'
      : 'text-gray-700 hover:text-blue-600 font-medium transition-colors'

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/">
          <a className="text-2xl font-bold text-gray-700 hover:text-gray-800 transition-colors tracking-wide">
            JOSEPH PETERS
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className={linkClasses('/')}>HOME</a></Link>
          <Link href="/about"><a className={linkClasses('/about')}>ABOUT</a></Link>
          <Link href="/innovation"><a className={linkClasses('/innovation')}>INNOVATION</a></Link>
          <Link href="/research"><a className={linkClasses('/research')}>RESEARCH</a></Link>
          <Link href="/community"><a className={linkClasses('/community')}>COMMUNITY</a></Link>
          <a
            href="/Joseph Peters Resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col items-start gap-4 p-6">
            <Link href="/"><a className={linkClasses('/')} onClick={toggleMenu}>HOME</a></Link>
            <Link href="/about"><a className={linkClasses('/about')} onClick={toggleMenu}>ABOUT</a></Link>
            <Link href="/innovation"><a className={linkClasses('/innovation')} onClick={toggleMenu}>INNOVATION</a></Link>
            <Link href="/research"><a className={linkClasses('/research')} onClick={toggleMenu}>RESEARCH</a></Link>
            <Link href="/community"><a className={linkClasses('/community')} onClick={toggleMenu}>COMMUNITY</a></Link>
            <a
              href="/Joseph Peters Resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav

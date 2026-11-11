import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar bg-base-100 shadow-md px-6">

      {/* Logo */}
      <div className="flex-1">
        <a className="text-xl font-bold">
          XYZ Könyvtár
        </a>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-6">
        <a href="/" className="btn btn-ghost">Főoldal</a>
        <a href="/about" className="btn btn-ghost">A könyvtárról</a>
        <a href="/services" className="btn btn-ghost">Szolgáltatások</a>
        <a href="/contact" className="btn btn-ghost">Kapcsolatfelvétel</a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md p-4 flex flex-col gap-3 md:hidden z-50">
          <a href="/" onClick={() => setMenuOpen(false)}>Főoldal</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>A könyvtárról</a>
          <a href="/services" onClick={() => setMenuOpen(false)}>Szolgáltatások</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Kapcsolatfelvétel</a>
        </div>
      )}

    </div>
  )
}

export default Navbar
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Hem' },
  { to: '/traningstider', label: 'Träningstider' },
  { to: '/tavlingar', label: 'Tävlingar' },
  { to: '/medlem', label: 'Mina sidor' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav style={{ backgroundColor: '#06111e', borderBottom: '2px solid #ffe81a' }}
      className="sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo + name */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="SAK" className="h-10 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(67%) saturate(600%) hue-rotate(355deg) brightness(103%)' }} />
          <div>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', color: '#ffe81a', fontSize: '1.25rem', lineHeight: 1 }}>
              Sandvikens AK
            </div>
            <div className="text-xs text-gray-400 tracking-widest uppercase">Atletklubb</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="text-sm font-medium transition-colors"
              style={{ color: pathname === l.to ? '#ffe81a' : '#cbd5e1' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/medlem" className="px-4 py-2 rounded text-sm font-semibold transition-all"
            style={{ backgroundColor: '#ffe81a', color: '#06111e' }}>
            Logga in
          </Link>
        </div>

        {/* Mobile menu btn */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: '#153243' }} className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium border-b border-white/10"
              style={{ color: pathname === l.to ? '#ffe81a' : 'white' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ChevronRight, Trophy, Users, Dumbbell } from 'lucide-react'
import { tavlingar } from '../data/mockData'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })
}

function daysUntil(dateStr) {
  const diff = new Date(dateStr) - new Date()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export default function Hem() {
  const nästaTävling = tavlingar[0]
  const days = daysUntil(nästaTävling.datum)

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #06111e 0%, #153243 100%)' }}
        className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffe81a 0, #ffe81a 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <img src="/logo.png" alt="SAK" className="mx-auto mb-6 h-32 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(67%) saturate(600%) hue-rotate(355deg) brightness(103%)' }} />
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#ffe81a', lineHeight: 1 }}>
            Sandvikens<br />Atletklubb
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Grundad 1943 · Sandviken · Styrkelyft & Tyngdlyftning
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/tavlingar"
              className="px-6 py-3 rounded font-semibold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: '#ffe81a', color: '#06111e' }}>
              Se tävlingar
            </Link>
            <Link to="/traningstider"
              className="px-6 py-3 rounded font-semibold text-sm border transition-all hover:bg-white/10"
              style={{ borderColor: '#ffe81a', color: '#ffe81a' }}>
              Träningstider
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#ffe81a' }} className="py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[
            { icon: <Trophy size={20} />, val: '80+', label: 'År av historia' },
            { icon: <Users size={20} />, val: '120+', label: 'Aktiva medlemmar' },
            { icon: <Dumbbell size={20} />, val: '3', label: 'Tävlingar 2025' },
          ].map((s, i) => (
            <div key={i} style={{ color: '#06111e' }}>
              <div className="flex justify-center mb-1">{s.icon}</div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '2rem' }}>{s.val}</div>
              <div className="text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Nästa tävling */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '2rem', color: '#ffe81a' }}
          className="mb-6">Nästa tävling</h2>
        <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,232,26,0.3)', borderLeft: '4px solid #ffe81a' }}
          className="rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: '#ffe81a' }}>Om {days} dagar</div>
              <h3 className="text-xl font-bold mb-1">{nästaTävling.namn}</h3>
              <p className="text-gray-400 text-sm">{formatDate(nästaTävling.datum)} · {nästaTävling.plats}</p>
              <p className="text-gray-300 text-sm mt-2">{nästaTävling.beskrivning}</p>
            </div>
            <Link to="/tavlingar"
              className="flex items-center gap-2 px-5 py-3 rounded font-semibold text-sm whitespace-nowrap transition-all hover:scale-105"
              style={{ backgroundColor: '#ffe81a', color: '#06111e' }}>
              Anmäl dig <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Snabblänkar */}
      <section className="max-w-5xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-4">
        {[
          { to: '/traningstider', icon: <Clock size={28} />, title: 'Träningstider', desc: 'Se när vi tränar och vem som håller i passen.' },
          { to: '/tavlingar', icon: <Calendar size={28} />, title: 'Tävlingar', desc: 'Kalender, anmälan och avgifter för 2025.' },
          { to: '/medlem', icon: <User size={28} />, title: 'Mina sidor', desc: 'Hantera ditt medlemskap och se dina anmälningar.' },
        ].map(card => (
          <Link key={card.to} to={card.to}
            className="rounded-xl p-6 transition-all hover:scale-105 hover:border-yellow-400 border border-transparent"
            style={{ backgroundColor: '#153243' }}>
            <div style={{ color: '#ffe81a' }} className="mb-3">{card.icon}</div>
            <h3 className="font-bold text-lg mb-1">{card.title}</h3>
            <p className="text-sm text-gray-400">{card.desc}</p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: '#ffe81a' }}>
              Gå dit <ChevronRight size={14} />
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

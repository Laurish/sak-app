import { useState } from 'react'
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, X, CheckCircle } from 'lucide-react'
import { tavlingar } from '../data/mockData'

function formatDate(d) {
  return new Date(d).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })
}

function daysUntil(d) {
  return Math.ceil((new Date(d) - new Date()) / 86400000)
}

function AnmälModal({ tävling, onClose }) {
  const [viktklass, setViktklass] = useState('')
  const [namn, setNamn] = useState('')
  const [epost, setEpost] = useState('')
  const [telefon, setTelefon] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!viktklass || !namn || !epost) return
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(6,17,30,0.95)' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,232,26,0.3)', maxWidth: 480, width: '100%' }}
        className="rounded-2xl overflow-hidden">
        <div style={{ backgroundColor: '#ffe81a' }} className="px-6 py-4 flex items-center justify-between">
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.5rem', color: '#06111e' }}>
            Anmäl dig
          </h2>
          <button onClick={onClose} style={{ color: '#06111e' }}><X size={20} /></button>
        </div>

        <div className="p-6">
          {sent ? (
            <div className="text-center py-6">
              <CheckCircle size={48} style={{ color: '#ffe81a' }} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Anmälan mottagen!</h3>
              <p className="text-gray-400 text-sm mb-2">
                Vi har tagit emot din anmälan till <strong>{tävling.namn}</strong> i klassen <strong>{viktklass}</strong>.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Betalning sker via Swish till <span style={{ color: '#ffe81a' }}>123 456 78 90</span> (SAK Sandviken). Ange ditt namn och tävlingen i meddelandet. Avgift: <strong>{tävling.avgift} kr</strong>.
              </p>
              <button onClick={onClose}
                className="px-5 py-2 rounded font-semibold text-sm"
                style={{ backgroundColor: '#ffe81a', color: '#06111e' }}>
                Stäng
              </button>
            </div>
          ) : (
            <>
              <div className="mb-5 text-sm text-gray-300">
                <p className="font-semibold text-white">{tävling.namn}</p>
                <p>{formatDate(tävling.datum)} · {tävling.plats}</p>
                <p className="mt-1">Anmälningsavgift: <span style={{ color: '#ffe81a' }}>{tävling.avgift} kr</span></p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1">Namn *</label>
                  <input value={namn} onChange={e => setNamn(e.target.value)}
                    placeholder="För- och efternamn"
                    className="w-full rounded px-3 py-2 text-sm outline-none"
                    style={{ backgroundColor: '#0a1a2e', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1">E-post *</label>
                  <input value={epost} onChange={e => setEpost(e.target.value)}
                    type="email" placeholder="din@epost.se"
                    className="w-full rounded px-3 py-2 text-sm outline-none"
                    style={{ backgroundColor: '#0a1a2e', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1">Telefon</label>
                  <input value={telefon} onChange={e => setTelefon(e.target.value)}
                    placeholder="070-000 00 00"
                    className="w-full rounded px-3 py-2 text-sm outline-none"
                    style={{ backgroundColor: '#0a1a2e', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1">Viktklass *</label>
                  <select value={viktklass} onChange={e => setViktklass(e.target.value)}
                    className="w-full rounded px-3 py-2 text-sm outline-none"
                    style={{ backgroundColor: '#0a1a2e', border: '1px solid rgba(255,255,255,0.15)', color: viktklass ? 'white' : '#9ca3af' }}>
                    <option value="">Välj viktklass</option>
                    {tävling.viktklasser.map(vk => <option key={vk} value={vk}>{vk}</option>)}
                  </select>
                </div>
                <button type="submit"
                  className="w-full py-3 rounded font-semibold text-sm mt-2 transition-all hover:opacity-90"
                  style={{ backgroundColor: '#ffe81a', color: '#06111e' }}>
                  Skicka anmälan
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Betalning sker separat via Swish. Anmälan bekräftas när betalning är mottagen.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function TävlingCard({ t }) {
  const [expanded, setExpanded] = useState(false)
  const [modal, setModal] = useState(false)
  const days = daysUntil(t.datum)
  const stänger = daysUntil(t.anmälningsstänger)
  const öppen = stänger > 0

  return (
    <>
      {modal && <AnmälModal tävling={t} onClose={() => setModal(false)} />}
      <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,255,255,0.08)' }}
        className="rounded-xl overflow-hidden">
        <div className="px-6 py-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ backgroundColor: öppen ? 'rgba(255,232,26,0.15)' : 'rgba(255,255,255,0.08)', color: öppen ? '#ffe81a' : '#9ca3af' }}>
                  {öppen ? `Anmälan öppen · stänger om ${stänger} dagar` : 'Anmälan stängd'}
                </span>
              </div>
              <h3 className="text-lg font-bold">{t.namn}</h3>
              <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar size={14} style={{ color: '#ffe81a' }} />
                  {formatDate(t.datum)} · om {days} dagar
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} style={{ color: '#ffe81a' }} />
                  {t.plats}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users size={14} style={{ color: '#ffe81a' }} />
                  {t.anmälda} anmälda
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <div className="text-right">
                <div className="text-xs text-gray-400">Avgift</div>
                <div className="text-xl font-bold" style={{ color: '#ffe81a' }}>{t.avgift} kr</div>
              </div>
              {öppen && (
                <button onClick={() => setModal(true)}
                  className="px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: '#ffe81a', color: '#06111e' }}>
                  Anmäl dig
                </button>
              )}
            </div>
          </div>

          <button onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {expanded ? 'Dölj detaljer' : 'Visa detaljer'}
          </button>
        </div>

        {expanded && (
          <div style={{ backgroundColor: '#0a1a2e', borderTop: '1px solid rgba(255,255,255,0.08)' }}
            className="px-6 py-4">
            <p className="text-sm text-gray-300 mb-4">{t.beskrivning}</p>
            <div>
              <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Viktklasser</div>
              <div className="flex flex-wrap gap-2">
                {t.viktklasser.map(vk => (
                  <span key={vk} className="text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: '#153243', border: '1px solid rgba(255,232,26,0.3)', color: '#ffe81a' }}>
                    {vk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default function Tavlingar() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '3rem', color: '#ffe81a' }}>
          Tävlingar 2025
        </h1>
        <p className="text-gray-400 mt-2">
          Anmäl dig till årets tävlingar nedan. Betalning sker via Swish – instruktioner ges efter anmälan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {tavlingar.map(t => <TävlingCard key={t.id} t={t} />)}
      </div>
    </div>
  )
}

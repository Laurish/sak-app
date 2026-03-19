import { useState } from 'react'
import { User, CreditCard, Calendar, Shield, CheckCircle, LogOut, FileText } from 'lucide-react'
import { mockUser } from '../data/mockData'

function daysUntil(d) {
  return Math.ceil((new Date(d) - new Date()) / 86400000)
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })
}

function LoginForm({ onLogin }) {
  const [epost, setEpost] = useState('')
  const [lösenord, setLösenord] = useState('')

  function handle(e) {
    e.preventDefault()
    if (epost && lösenord) onLogin()
  }

  return (
    <div className="max-w-sm mx-auto mt-12">
      <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,232,26,0.2)' }}
        className="rounded-2xl overflow-hidden">
        <div style={{ backgroundColor: '#ffe81a' }} className="px-6 py-4">
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.75rem', color: '#06111e' }}>
            Logga in
          </h2>
          <p className="text-sm" style={{ color: '#1a3040' }}>Mina sidor · Sandvikens AK</p>
        </div>
        <form onSubmit={handle} className="p-6 flex flex-col gap-4">
          <div>
            <label className="text-xs font-medium text-gray-400 block mb-1">E-postadress</label>
            <input value={epost} onChange={e => setEpost(e.target.value)}
              type="email" placeholder="din@epost.se" required
              className="w-full rounded px-3 py-2 text-sm outline-none"
              style={{ backgroundColor: '#0a1a2e', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-400 block mb-1">Lösenord</label>
            <input value={lösenord} onChange={e => setLösenord(e.target.value)}
              type="password" placeholder="••••••••" required
              className="w-full rounded px-3 py-2 text-sm outline-none"
              style={{ backgroundColor: '#0a1a2e', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
          </div>
          <button type="submit"
            className="w-full py-3 rounded font-semibold text-sm mt-2 transition-all hover:opacity-90"
            style={{ backgroundColor: '#ffe81a', color: '#06111e' }}>
            Logga in
          </button>
          <p className="text-xs text-center text-gray-500">
            Inte medlem?{' '}
            <a href="mailto:info@sandvikensak.se" style={{ color: '#ffe81a' }}>Kontakta oss</a>
          </p>
        </form>
      </div>
    </div>
  )
}

function StatusBadge({ ok, text }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
      style={{ backgroundColor: ok ? 'rgba(255,232,26,0.15)' : 'rgba(255,80,80,0.15)', color: ok ? '#ffe81a' : '#ff8080' }}>
      {ok && <CheckCircle size={10} />}
      {text}
    </span>
  )
}

function MemberPage({ onLogout }) {
  const u = mockUser
  const dagar = daysUntil(u.medlemskap.giltigtTill)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '3rem', color: '#ffe81a' }}>
            Mina sidor
          </h1>
          <p className="text-gray-400">Välkommen, {u.namn.split(' ')[0]}!</p>
        </div>
        <button onClick={onLogout}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <LogOut size={16} /> Logga ut
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Profil */}
        <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,255,255,0.08)' }}
          className="rounded-xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#ffe81a' }}>
              <User size={18} style={{ color: '#06111e' }} />
            </div>
            <div>
              <div className="font-bold">{u.namn}</div>
              <div className="text-xs text-gray-400">{u.epost}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Medlemsnummer</span>
              <span className="font-medium">{u.medlemsnummer}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400">Personnummer</span>
              <span className="font-medium">{u.personnummer}</span>
            </div>
          </div>
        </div>

        {/* Medlemskap */}
        <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,232,26,0.3)' }}
          className="rounded-xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#ffe81a' }}>
              <CreditCard size={18} style={{ color: '#06111e' }} />
            </div>
            <div>
              <div className="font-bold">Medlemskap</div>
              <StatusBadge ok={dagar > 0} text={dagar > 0 ? 'Aktivt' : 'Utgånget'} />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Typ</span>
              <span className="font-medium">{u.medlemskap.typ}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Giltigt till</span>
              <span className="font-medium">{formatDate(u.medlemskap.giltigtTill)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Betalt datum</span>
              <span className="font-medium">{formatDate(u.medlemskap.betaltDatum)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400">Årsavgift</span>
              <span className="font-medium" style={{ color: '#ffe81a' }}>{u.medlemskap.avgift} kr</span>
            </div>
          </div>
          <div className="mt-4 p-3 rounded text-xs text-gray-400"
            style={{ backgroundColor: '#0a1a2e' }}>
            Förnyelse sker via Swish till <span style={{ color: '#ffe81a' }}>123 456 78 90</span>. Ange namn + "Förnyelse".
          </div>
        </div>

        {/* Licens */}
        <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,255,255,0.08)' }}
          className="rounded-xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#ffe81a' }}>
              <Shield size={18} style={{ color: '#06111e' }} />
            </div>
            <div>
              <div className="font-bold">Tävlingslicens</div>
              <StatusBadge ok text="Aktiv" />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Typ</span>
              <span className="font-medium">{u.licens.typ}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Giltigt till</span>
              <span className="font-medium">{formatDate(u.licens.giltigtTill)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400">Förbund</span>
              <span className="font-medium text-right text-xs">{u.licens.förbund}</span>
            </div>
          </div>
        </div>

        {/* Mina anmälningar */}
        <div style={{ backgroundColor: '#153243', border: '1px solid rgba(255,255,255,0.08)' }}
          className="rounded-xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#ffe81a' }}>
              <Calendar size={18} style={{ color: '#06111e' }} />
            </div>
            <div>
              <div className="font-bold">Mina anmälningar</div>
              <div className="text-xs text-gray-400">{u.anmälningar.length} aktiva</div>
            </div>
          </div>
          {u.anmälningar.map((a, i) => (
            <div key={i} style={{ backgroundColor: '#0a1a2e' }} className="rounded-lg p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-medium text-sm">{a.tävling}</div>
                  <div className="text-xs text-gray-400 mt-1">Viktklass: {a.viktklass}</div>
                </div>
                <StatusBadge ok={a.betald} text={a.betald ? 'Betald' : 'Inväntar betalning'} />
              </div>
              <div className="mt-2">
                <StatusBadge ok={a.status === 'Bekräftad'} text={a.status} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default function Medlem() {
  const [inloggad, setInloggad] = useState(false)

  return (
    <div>
      {inloggad
        ? <MemberPage onLogout={() => setInloggad(false)} />
        : (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '3rem', color: '#ffe81a' }}>
              Mina sidor
            </h1>
            <LoginForm onLogin={() => setInloggad(true)} />
          </div>
        )
      }
    </div>
  )
}

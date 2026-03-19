import { Clock, User } from 'lucide-react'
import { traningstider } from '../data/mockData'

export default function Traningstider() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '3rem', color: '#ffe81a' }}>
          Träningstider
        </h1>
        <p className="text-gray-400 mt-2">
          Vi tränar i Gjutarhallen, Industrigatan 12, Sandviken. Välkommen att provträna – ta med träningsskor och bekväma kläder.
        </p>
      </div>

      <div className="grid gap-6">
        {traningstider.map((dag) => (
          <div key={dag.dag} style={{ backgroundColor: '#153243' }} className="rounded-xl overflow-hidden">
            <div style={{ backgroundColor: '#ffe81a' }} className="px-6 py-3">
              <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.5rem', color: '#06111e' }}>
                {dag.dag}
              </h2>
            </div>
            <div className="divide-y divide-white/10">
              {dag.pass.map((pass, i) => (
                <div key={i} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Clock size={16} style={{ color: '#ffe81a' }} />
                    <span className="font-semibold text-sm">{pass.tid}</span>
                  </div>
                  <div className="flex-1 sm:text-center">
                    <span className="text-sm font-medium">{pass.grupp}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User size={14} />
                    {pass.tränare}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info-box */}
      <div style={{ backgroundColor: '#0a1a2e', border: '1px solid rgba(255,232,26,0.3)' }}
        className="mt-10 rounded-xl p-6">
        <h3 className="font-bold mb-3" style={{ color: '#ffe81a' }}>Kom och provträna!</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Är du nyfiken på styrkelyft eller tyngdlyftning? Du är välkommen att provträna tre gånger utan kostnad innan du bestämmer dig för att bli medlem. Kontakta oss på{' '}
          <a href="mailto:info@sandvikensak.se" style={{ color: '#ffe81a' }}>info@sandvikensak.se</a>{' '}
          eller dyk upp på ett pass.
        </p>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#06111e', borderTop: '1px solid rgba(255,232,26,0.15)' }}
      className="mt-16 py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="SAK" className="h-10 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(67%) saturate(600%) hue-rotate(355deg) brightness(103%)' }} />
          <div>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', color: '#ffe81a' }}>Sandvikens AK</div>
            <div className="text-xs text-gray-500">Grundad 1943</div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500">
          <p>Gjutarhallen · Industrigatan 12 · Sandviken</p>
          <p className="mt-1">
            <a href="mailto:info@sandvikensak.se" style={{ color: '#ffe81a' }}>info@sandvikensak.se</a>
          </p>
        </div>
        <div className="text-xs text-gray-600">© 2025 Sandvikens Atletklubb</div>
      </div>
    </footer>
  )
}

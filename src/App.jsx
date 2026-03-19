import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hem from './pages/Hem'
import Traningstider from './pages/Traningstider'
import Tavlingar from './pages/Tavlingar'
import Medlem from './pages/Medlem'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hem />} />
            <Route path="/traningstider" element={<Traningstider />} />
            <Route path="/tavlingar" element={<Tavlingar />} />
            <Route path="/medlem" element={<Medlem />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

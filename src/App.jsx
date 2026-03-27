import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Holdings from './components/Holdings'
import Signal from './components/Signal'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import JarvisOverlay from './components/JarvisOverlay'

export default function App() {
  const [jarvisOpen, setJarvisOpen] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 })

  // Keyboard shortcut: J = toggle Jarvis, ESC = close
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      if (e.key === 'j' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setJarvisOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setJarvisOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Cursor glow tracking
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="bg-[#080808] text-[#f0ede8] min-h-screen font-body overflow-x-hidden">
      {/* Subtle cursor glow — desktop only */}
      <div
        className="pointer-events-none fixed inset-0 z-40 hidden lg:block"
        style={{
          background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(178, 34, 34, 0.03), transparent 80%)`,
        }}
      />

      <Nav />
      <Hero onJarvis={() => setJarvisOpen(true)} />
      <About />
      <Newsletter />
      <Holdings />
      <Signal />
      <Footer />

      <JarvisOverlay isOpen={jarvisOpen} onClose={() => setJarvisOpen(false)} />
    </div>
  )
}

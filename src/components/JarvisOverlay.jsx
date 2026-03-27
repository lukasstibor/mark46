import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TERMINAL_LINES = [
  { text: '> MARK 46 SYSTEM DIAGNOSTICS', delay: 0, color: 'text-[#B22222]' },
  { text: '> Initializing portfolio scan...', delay: 220, color: 'text-[#555]' },
  { text: '> Holdings loaded: Cleevio Group, ForTraders, Spendee, Atomika, Synhawk', delay: 600, color: 'text-[#555]' },
  { text: '> Closed chapters: GAMEE [ACQUIRED · Animoca] · TradingAnalyzer.ai [EXITED]', delay: 1000, color: 'text-[#444]' },
  { text: '', delay: 1300, color: '' },
  { text: '> Risk appetite .............. ELEVATED', delay: 1500, color: 'text-[#B22222]' },
  { text: '> Committee required ......... null', delay: 1750, color: 'text-[#555]' },
  { text: '> Decision latency ........... <48h (usually <4h)', delay: 2000, color: 'text-[#555]' },
  { text: '> Contrarian bias ............ confirmed', delay: 2250, color: 'text-[#555]' },
  { text: '> Consensus following ........ 0.00%', delay: 2500, color: 'text-[#555]' },
  { text: '> Buzzword tolerance ......... CRITICAL FAILURE', delay: 2750, color: 'text-[#555]' },
  { text: '> Org chart depth ............ 1', delay: 3000, color: 'text-[#555]' },
  { text: '', delay: 3250, color: '' },
  { text: '> All repulsors nominal. Arc reactor output: stable.', delay: 3450, color: 'text-[#B22222]' },
  { text: '> Dubai operational. Portfolio scan complete.', delay: 3700, color: 'text-[#444]' },
  { text: '', delay: 3950, color: '' },
  { text: '> JARVIS: Ready when you are, Mr. Stibor. No committees were harmed.', delay: 4200, color: 'text-[#B22222]' },
  { text: '', delay: 4550, color: '' },
  { text: '// [ESC] or click outside to return to mission', delay: 4800, color: 'text-[#252525]' },
]

export default function JarvisOverlay({ isOpen, onClose }) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!isOpen) {
      setVisibleCount(0)
      return
    }

    const timers = TERMINAL_LINES.map(({ delay }, i) =>
      setTimeout(() => setVisibleCount((prev) => Math.max(prev, i + 1)), delay)
    )

    return () => timers.forEach(clearTimeout)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ background: 'rgba(5, 5, 5, 0.92)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg border border-[#B22222]/15 bg-[#080808]"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 0 60px rgba(178,34,34,0.06), 0 0 0 1px rgba(178,34,34,0.06)' }}
          >
            {/* Terminal header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#141414]">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: '#B22222',
                    boxShadow: '0 0 8px 2px rgba(178,34,34,0.5)',
                  }}
                />
                <span className="font-mono text-[11px] text-[#B22222] tracking-[0.25em]">
                  JARVIS · MARK 46
                </span>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-[11px] text-[#333] hover:text-[#666] transition-colors duration-200 focus:outline-none"
              >
                [ESC]
              </button>
            </div>

            {/* Terminal body */}
            <div className="px-6 py-6 min-h-[300px] space-y-1.5">
              {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`font-mono text-[11px] leading-relaxed tracking-wide ${line.color}`}
                >
                  {line.text || '\u00A0'}
                </motion.div>
              ))}

              {/* Blinking cursor while loading */}
              {visibleCount < TERMINAL_LINES.length && (
                <div className="flex items-center gap-1 pt-0.5">
                  <span className="font-mono text-[11px] text-[#B22222]">{'> '}</span>
                  <span className="term-cursor" />
                </div>
              )}
            </div>

            {/* Corner accent lines */}
            <div className="absolute top-0 left-0 w-4 h-px bg-[#B22222]/30" />
            <div className="absolute top-0 left-0 w-px h-4 bg-[#B22222]/30" />
            <div className="absolute bottom-0 right-0 w-4 h-px bg-[#B22222]/30" />
            <div className="absolute bottom-0 right-0 w-px h-4 bg-[#B22222]/30" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

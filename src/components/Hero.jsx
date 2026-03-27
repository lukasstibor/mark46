import { motion } from 'framer-motion'

const RINGS = [
  { size: 720, speed: '35s', dir: 'spinSlow',    dash: '10 28', opacity: 0.06, width: 1 },
  { size: 580, speed: '28s', dir: 'spinReverse', dash: '6 20',  opacity: 0.07, width: 0.8 },
  { size: 520, speed: '22s', dir: 'spinReverse', dash: '5 18',  opacity: 0.09, width: 0.8 },
  { size: 400, speed: '18s', dir: 'spinSlow',    dash: '8 14',  opacity: 0.11, width: 1 },
  { size: 320, speed: '14s', dir: 'spinSlow',    dash: '14 8',  opacity: 0.14, width: 1 },
  { size: 200, speed: '10s', dir: 'spinReverse', dash: '4 10',  opacity: 0.18, width: 0.8 },
  { size: 100, speed: '7s',  dir: 'spinSlow',    dash: '6 4',   opacity: 0.22, width: 1 },
]

function ArcReactorBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100" />

      {/* Suit panel division lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.045 }}
      >
        <line x1="720" y1="0" x2="720" y2="900" stroke="#B22222" strokeWidth="0.8" strokeDasharray="4 12"/>
        <line x1="720" y1="320" x2="200" y2="0"   stroke="#B22222" strokeWidth="0.6"/>
        <line x1="720" y1="320" x2="400" y2="0"   stroke="#B22222" strokeWidth="0.6"/>
        <line x1="720" y1="320" x2="1040" y2="0"  stroke="#B22222" strokeWidth="0.6"/>
        <line x1="720" y1="320" x2="1240" y2="0"  stroke="#B22222" strokeWidth="0.6"/>
        <line x1="720" y1="580" x2="200" y2="900"  stroke="#B22222" strokeWidth="0.6"/>
        <line x1="720" y1="580" x2="400" y2="900"  stroke="#B22222" strokeWidth="0.6"/>
        <line x1="720" y1="580" x2="1040" y2="900" stroke="#B22222" strokeWidth="0.6"/>
        <line x1="720" y1="580" x2="1240" y2="900" stroke="#B22222" strokeWidth="0.6"/>
        <line x1="0" y1="320" x2="1440" y2="320" stroke="#B22222" strokeWidth="0.6" strokeDasharray="20 60"/>
        <line x1="0" y1="580" x2="1440" y2="580" stroke="#B22222" strokeWidth="0.6" strokeDasharray="20 60"/>
      </svg>

      {/* Central radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(178, 34, 34, 0.07) 0%, rgba(178, 34, 34, 0.02) 40%, transparent 70%)' }}
      />

      {/* Rings */}
      {RINGS.map((r, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: r.size, height: r.size, animation: `${r.dir} ${r.speed} linear infinite` }}
        >
          <svg viewBox={`0 0 ${r.size} ${r.size}`} className="w-full h-full" style={{ opacity: r.opacity }}>
            <circle
              cx={r.size / 2} cy={r.size / 2} r={r.size / 2 - 4}
              fill="none" stroke="#B22222" strokeWidth={r.width} strokeDasharray={r.dash}
            />
          </svg>
        </div>
      ))}

      {/* Targeting reticle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px]"
        style={{ animation: 'spinSlow 60s linear infinite', opacity: 0.07 }}
      >
        <svg viewBox="0 0 460 460" className="w-full h-full">
          <circle cx="230" cy="230" r="220" fill="none" stroke="#B22222" strokeWidth="0.8" strokeDasharray="6 20"/>
          <line x1="230" y1="10"  x2="230" y2="80"  stroke="#B22222" strokeWidth="1"/>
          <line x1="230" y1="380" x2="230" y2="450" stroke="#B22222" strokeWidth="1"/>
          <line x1="10"  y1="230" x2="80"  y2="230" stroke="#B22222" strokeWidth="1"/>
          <line x1="380" y1="230" x2="450" y2="230" stroke="#B22222" strokeWidth="1"/>
          <path d="M 165 65 L 145 45 L 125 65" fill="none" stroke="#B22222" strokeWidth="0.8"/>
          <path d="M 295 65 L 315 45 L 335 65" fill="none" stroke="#B22222" strokeWidth="0.8"/>
          <path d="M 165 395 L 145 415 L 125 395" fill="none" stroke="#B22222" strokeWidth="0.8"/>
          <path d="M 295 395 L 315 415 L 335 395" fill="none" stroke="#B22222" strokeWidth="0.8"/>
          <circle cx="230" cy="230" r="40" fill="none" stroke="#B22222" strokeWidth="0.6" strokeDasharray="4 8"/>
        </svg>
      </div>

      {/* Arc reactor core — multi-layer */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
        style={{
          width: '280px', height: '280px',
          marginLeft: '-140px', marginTop: '-140px',
          background: 'radial-gradient(circle, rgba(178,34,34,0.09) 0%, transparent 70%)',
          animation: 'reactorPulse 3s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
        style={{
          width: '120px', height: '120px',
          marginLeft: '-60px', marginTop: '-60px',
          background: 'radial-gradient(circle, rgba(178,34,34,0.15) 0%, transparent 70%)',
          animation: 'reactorPulse 2s ease-in-out infinite 0.4s',
        }}
      />
      {/* Core dot */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full"
        style={{
          width: '10px', height: '10px',
          marginLeft: '-5px', marginTop: '-5px',
          background: '#B22222',
          boxShadow: '0 0 24px 8px rgba(178, 34, 34, 0.5)',
          animation: 'reactorPulse 2s ease-in-out infinite',
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(178, 34, 34, 0.22) 30%, rgba(178, 34, 34, 0.35) 50%, rgba(178, 34, 34, 0.22) 70%, transparent 100%)',
          animation: 'scanLine 14s ease-in-out infinite',
          top: 0,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(8,8,8,0.55) 65%, #080808 100%)' }}
      />
    </div>
  )
}

function HudCorner({ position }) {
  const styles = {
    'top-left':     'top-0 left-0 border-t-2 border-l-2',
    'top-right':    'top-0 right-0 border-t-2 border-r-2',
    'bottom-left':  'bottom-0 left-0 border-b-2 border-l-2',
    'bottom-right': 'bottom-0 right-0 border-b-2 border-r-2',
  }
  return <div className={`absolute w-6 h-6 border-[#B22222]/25 ${styles[position]}`} />
}

function HudRow({ label, value, active }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-1 h-1 rounded-full flex-shrink-0"
        style={{
          background: active ? '#B22222' : '#1e1e1e',
          boxShadow: active ? '0 0 4px rgba(178,34,34,0.7)' : 'none',
        }}
      />
      <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: active ? 'rgba(178,34,34,0.75)' : '#1a1a1a' }}>
        {label}
      </span>
      {value && (
        <span className="font-mono text-[9px] tracking-[0.15em] ml-1" style={{ color: active ? 'rgba(240,237,232,0.7)' : '#141414' }}>
          {value}
        </span>
      )}
    </div>
  )
}

export default function Hero({ onJarvis }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ArcReactorBg />

      {/* Left HUD panel */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="border border-[#141414] px-3 py-2.5"
          style={{ background: 'rgba(8,8,8,0.6)' }}
        >
          <div className="font-mono text-[7px] text-[#1e1e1e] tracking-[0.3em] mb-2 border-b border-[#111] pb-1.5">
            SYSTEM // SUIT
          </div>
          <div className="flex flex-col gap-1.5">
            <HudRow label="SYS"          value="ONLINE"    active={true} />
            <HudRow label="ARC REACTOR"  value="100%"      active={true} />
            <HudRow label="JARVIS"       value="ONLINE"    active={true} />
            <HudRow label="ALTITUDE"     value="14,823 FT" active={false} />
            <HudRow label="THREAT LEVEL" value="0"         active={false} />
            <HudRow label="SECTOR"       value="TECH"      active={false} />
            <HudRow label="STATUS"       value="ACTIVE"    active={false} />
          </div>
        </motion.div>
      </div>

      {/* Right HUD panel */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col z-10 items-end">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="border border-[#141414] px-3 py-2.5"
          style={{ background: 'rgba(8,8,8,0.6)' }}
        >
          <div className="font-mono text-[7px] text-[#1e1e1e] tracking-[0.3em] mb-2 border-b border-[#111] pb-1.5 text-right">
            ID // UNIT
          </div>
          <div className="flex flex-col gap-1.5 items-end">
            <HudRow label="UNIT"    value="MARK_046" active={true} />
            <HudRow label="CLASS"   value="INVEST"   active={true} />
            <HudRow label="EST"     value="2023"     active={true} />
            <HudRow label="POWER"   value="MAX"      active={false} />
            <HudRow label="UPTIME"  value="99.9%"    active={false} />
            <HudRow label="SHIELDS" value="UP"       active={false} />
            <HudRow label="COMMS"   value="OPEN"     active={false} />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24 pb-32">
        <div className="relative">
          <div className="hidden md:block">
            <HudCorner position="top-left" />
            <HudCorner position="top-right" />
            <HudCorner position="bottom-left" />
            <HudCorner position="bottom-right" />
          </div>

          <div className="py-12 md:py-16 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-5"
            >
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#B22222]/30" />
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.5em] text-[#B22222]/60 uppercase">
                  Mark XLVI
                </span>
                <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#B22222]/30" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3"
            >
              <h1 className="font-display font-bold text-[clamp(3.5rem,11vw,7.5rem)] leading-[0.9] tracking-tight text-[#f0ede8]">
                MARK{' '}
                <span
                  className="text-[#B22222] inline-block"
                  style={{ textShadow: '0 0 40px rgba(178,34,34,0.3)' }}
                >
                  46
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="w-16 h-px bg-gradient-to-r from-[#B22222]/60 to-[#B22222]/10 mx-auto mb-5 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] text-[#444] uppercase mb-8"
            >
              Private Investment Company
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#555] text-[clamp(0.85rem,1.8vw,1rem)] max-w-md mx-auto mb-10 leading-[1.85]"
            >
              Focusing on technology and real estate. Not a traditional VC or family office.
              Not afraid of risk or unconventional deals — as long as they make sense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <button
                onClick={() => scrollTo('holdings')}
                className="group px-8 py-3.5 bg-[#B22222] text-[#f0ede8] font-display font-semibold text-sm tracking-wide hover:bg-[#9a1a1a] active:bg-[#8a1414] transition-all duration-200 min-w-[160px]"
              >
                View Portfolio
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="px-8 py-3.5 border border-[#1e1e1e] text-[#555] font-display font-semibold text-sm tracking-wide hover:border-[#333] hover:text-[#f0ede8] transition-all duration-200 min-w-[160px]"
              >
                About
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Jarvis hint — bottom left */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        onClick={onJarvis}
        className="absolute bottom-8 left-8 hidden md:flex items-center gap-2 group focus:outline-none"
        aria-label="Open JARVIS"
      >
        <div className="border border-[#1e1e1e] group-hover:border-[#B22222]/40 px-2 py-1 transition-colors duration-300">
          <span className="font-mono text-[9px] text-[#2a2a2a] group-hover:text-[#B22222]/60 tracking-[0.25em] transition-colors duration-300">J</span>
        </div>
        <span className="font-mono text-[9px] text-[#1e1e1e] group-hover:text-[#2a2a2a] tracking-[0.2em] transition-colors duration-300 uppercase">
          JARVIS
        </span>
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-[#2a2a2a] tracking-[0.2em] rotate-90 origin-center mb-4">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#2a2a2a]" />
      </motion.div>
    </section>
  )
}

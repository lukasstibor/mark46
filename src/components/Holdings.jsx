import { motion } from 'framer-motion'

const HOLDINGS = [
  {
    name: 'Cleevio Group',
    type: 'Digital Studio · Venture Builder',
    role: 'CEO & Co-Founder',
    logo: '/logos/cleevio.svg',
    url: 'https://cleevio.group',
  },
  {
    name: 'ForTraders',
    type: 'Fintech · Trading',
    role: 'Shareholder',
    logo: '/logos/fortraders.webp',
    logoFilter: 'invert(1)',
    url: 'https://fortraders.com',
  },
  {
    name: 'Spendee',
    type: 'Fintech · Consumer',
    role: 'Shareholder',
    logo: '/logos/spendee.png',
    logoFilter: 'brightness(0) invert(1)',
    url: 'https://spendee.com',
  },
  {
    name: 'Atomika',
    type: 'Technology',
    role: 'Shareholder',
    logo: '/logos/atomika.svg',
    url: 'https://atomika.gold',
  },
  {
    name: 'Synhawk',
    type: 'Technology · Intelligence',
    role: 'Advisor',
    logo: '/logos/synhawk.svg',
    url: 'https://synhawk.com',
  },
  {
    name: 'KAYA.vc',
    type: 'Venture Capital',
    role: 'Investor',
    logo: '/logos/kaya.png',
    logoFilter: 'brightness(0) invert(1)',
    url: 'https://kaya.vc',
  },
]

const CHAPTERS = [
  {
    name: 'GAMEE',
    type: 'Gaming · Consumer',
    outcome: 'Acq. Animoca Brands',
    logo: '/logos/gamee.png',
    logoFilter: 'invert(1)',
    url: 'https://gamee.com',
  },
  {
    name: 'CoinBrain',
    type: 'Crypto · Analytics',
    outcome: 'Exited',
    logo: '/logos/coinbrain.webp',
    logoFilter: 'invert(1)',
    url: 'https://coinbrain.com',
  },
  {
    name: 'TradingAnalyzer.ai',
    type: 'AI · Trading',
    outcome: 'Exited',
    logo: '/logos/tradinganalyzer.svg',
    url: 'https://tradinganalyzer.ai',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function SectorLock() {
  return (
    <div className="flex items-center gap-1">
      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" className="text-[#B22222]">
        <rect x="0.5" y="4" width="7" height="5.5" rx="0.5" stroke="currentColor" strokeWidth="0.8"/>
        <path d="M2 4V2.5C2 1.4 2.9 0.5 4 0.5C5.1 0.5 6 1.4 6 2.5V4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
      </svg>
      <span className="font-mono text-[7px] sm:text-[8px] text-[#B22222] tracking-[0.15em]">SECTOR LOCK</span>
    </div>
  )
}

function HoldingTile({ h }) {
  return (
    <motion.a
      href={h.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="group relative border-r border-b border-[#181818] bg-transparent hover:bg-[#0d0d0d] transition-colors duration-300 overflow-hidden"
      style={{ minHeight: '120px' }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(178,34,34,0.03), transparent 70%)' }}
      />

      {/* Armor stripes — appear on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(135deg, transparent, transparent 6px, rgba(178,34,34,0.025) 6px, rgba(178,34,34,0.025) 7px)',
        }}
      />

      {/* Role badge */}
      <div className="absolute top-2.5 sm:top-3.5 right-2.5 sm:right-3.5 flex items-center gap-1 sm:gap-1.5 z-10">
        <div className="w-1 h-1 rounded-full"
          style={{ background: '#B22222', boxShadow: '0 0 4px rgba(178,34,34,0.7)' }}
        />
        <span className="font-mono text-[8px] sm:text-[9px] text-[#383838] tracking-[0.15em] sm:tracking-[0.18em] uppercase">{h.role}</span>
      </div>

      {/* Logo or name */}
      <div className="flex items-center justify-center h-full w-full px-4 sm:px-8 py-8 sm:py-10">
        {h.logo ? (
          <img
            src={h.logo}
            alt={h.name}
            className="object-contain opacity-[0.45] group-hover:opacity-[0.80] transition-opacity duration-400"
            style={{
              maxHeight: '28px',
              maxWidth: '110px',
              width: 'auto',
              height: 'auto',
              filter: h.logoFilter || 'none',
            }}
          />
        ) : (
          <span className="font-display font-semibold text-base sm:text-lg text-[#3a3a3a] group-hover:text-[#666] transition-colors duration-300 text-center leading-tight">
            {h.name}
          </span>
        )}
      </div>

      {/* Type label — bottom left */}
      <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4">
        <span className="font-mono text-[7px] sm:text-[9px] text-[#252525] tracking-[0.15em] sm:tracking-[0.18em] uppercase group-hover:text-[#333] transition-colors duration-300 hidden sm:block">
          {h.type}
        </span>
      </div>

      {/* Sector lock indicator — replaces arrow on hover */}
      <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <SectorLock />
      </div>
    </motion.a>
  )
}

function ChapterTile({ c }) {
  return (
    <motion.a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="group relative bg-transparent hover:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden"
      style={{ minHeight: '100px' }}
    >
      {/* Subtle armor stripes (always slightly visible for past items) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(135deg, transparent, transparent 6px, rgba(178,34,34,0.015) 6px, rgba(178,34,34,0.015) 7px)',
        }}
      />

      {/* Outcome label */}
      <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3.5 z-10">
        <span className="font-mono text-[8px] sm:text-[9px] text-[#333] tracking-[0.15em] sm:tracking-[0.18em] whitespace-nowrap">
          {c.outcome}
        </span>
      </div>

      {/* Logo or name */}
      <div className="flex items-center justify-center h-full w-full px-4 sm:px-8 py-6 sm:py-8">
        {c.logo ? (
          <img
            src={c.logo}
            alt={c.name}
            className="object-contain opacity-[0.35] group-hover:opacity-[0.65] transition-opacity duration-400"
            style={{
              maxHeight: '40px',
              maxWidth: '140px',
              width: 'auto',
              height: 'auto',
              filter: c.logoFilter || 'none',
            }}
          />
        ) : (
          <span className="font-display font-medium text-sm sm:text-base text-[#2a2a2a] group-hover:text-[#444] transition-colors duration-300 text-center">
            {c.name}
          </span>
        )}
      </div>

      {/* Type label */}
      <div className="absolute bottom-2 sm:bottom-2.5 left-3 sm:left-4 hidden sm:block">
        <span className="font-mono text-[9px] text-[#1e1e1e] tracking-[0.18em] uppercase">
          {c.type}
        </span>
      </div>
    </motion.a>
  )
}

export default function Holdings() {
  return (
    <section id="holdings" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[11px] text-[#B22222] tracking-[0.3em] uppercase">
            Current Portfolio
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#f0ede8] mt-3 tracking-tight">
            Where the conviction is.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="border-l border-t border-[#181818] grid grid-cols-2 md:grid-cols-3 mb-20"
        >
          {HOLDINGS.map((h) => (
            <HoldingTile key={h.name} h={h} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-mono text-[11px] text-[#333] tracking-[0.3em] uppercase">
            Past
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-0 bg-[#0a0a0a]"
        >
          {CHAPTERS.map((c) => (
            <ChapterTile key={c.name} c={c} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

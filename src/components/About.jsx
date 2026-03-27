import { motion } from 'framer-motion'

const TAGS = [
  'CEO & Co-Founder, Cleevio',
  'Forbes 30 Under 30',
  'Product Builder',
  'Investor',
]

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

function HudPhoto() {
  return (
    <div className="relative mb-5 lg:mb-8">
      {/* Circuit traces extending beyond photo */}
      <svg
        className="absolute pointer-events-none"
        style={{
          width: 'calc(100% + 48px)',
          height: 'calc(100% + 48px)',
          top: '-24px',
          left: '-24px',
          opacity: 0.3,
        }}
        viewBox="0 0 328 328"
        fill="none"
      >
        <line x1="24" y1="24" x2="0" y2="24" stroke="#B22222" strokeWidth="0.8"/>
        <line x1="24" y1="24" x2="24" y2="0" stroke="#B22222" strokeWidth="0.8"/>
        <circle cx="0" cy="24" r="1.5" fill="#B22222"/>
        <circle cx="24" cy="0" r="1.5" fill="#B22222"/>
        <line x1="304" y1="24" x2="328" y2="24" stroke="#B22222" strokeWidth="0.8"/>
        <line x1="304" y1="24" x2="304" y2="0" stroke="#B22222" strokeWidth="0.8"/>
        <circle cx="328" cy="24" r="1.5" fill="#B22222"/>
        <circle cx="304" cy="0" r="1.5" fill="#B22222"/>
        <line x1="24" y1="304" x2="0" y2="304" stroke="#B22222" strokeWidth="0.8"/>
        <line x1="24" y1="304" x2="24" y2="328" stroke="#B22222" strokeWidth="0.8"/>
        <circle cx="0" cy="304" r="1.5" fill="#B22222"/>
        <circle cx="24" cy="328" r="1.5" fill="#B22222"/>
        <line x1="304" y1="304" x2="328" y2="304" stroke="#B22222" strokeWidth="0.8"/>
        <line x1="304" y1="304" x2="304" y2="328" stroke="#B22222" strokeWidth="0.8"/>
        <circle cx="328" cy="304" r="1.5" fill="#B22222"/>
        <circle cx="304" cy="328" r="1.5" fill="#B22222"/>
      </svg>

      {/* Photo container — clips scan line */}
      <div
        className="relative overflow-hidden border border-[#1e1e1e] w-full"
        style={{ maxWidth: '280px', aspectRatio: '1 / 1' }}
      >
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#B22222]/50 z-20" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#B22222]/50 z-20" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#B22222]/50 z-20" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#B22222]/50 z-20" />

        <div
          className="absolute inset-0 -z-10 blur-2xl scale-90 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(178,34,34,0.06), transparent 70%)' }}
        />

        <img
          src="/lukas-photo.jpeg"
          alt="Lukas Stibor"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top', filter: 'grayscale(100%) contrast(1.05)' }}
        />

        {/* Scan line */}
        <div
          className="absolute left-0 right-0 z-10 pointer-events-none"
          style={{
            height: '40px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(178,34,34,0.08) 40%, rgba(178,34,34,0.14) 50%, rgba(178,34,34,0.08) 60%, transparent 100%)',
            animation: 'photoScan 5s ease-in-out infinite',
            top: 0,
          }}
        />
      </div>

      {/* BIOMETRIC label */}
      <div className="flex items-center justify-between mt-2.5" style={{ maxWidth: '280px' }}>
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: '#B22222',
              boxShadow: '0 0 6px 2px rgba(178,34,34,0.5)',
              animation: 'reactorPulse 2.5s ease-in-out infinite',
            }}
          />
          <span className="font-mono text-[9px] text-[#B22222]/70 tracking-[0.25em]">BIOMETRIC: CONFIRMED</span>
        </div>
        <span className="font-mono text-[9px] text-[#1e1e1e] tracking-[0.2em]">ID_OK</span>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="font-mono text-[11px] text-[#B22222] tracking-[0.3em] uppercase">
            The person behind it
          </span>
        </motion.div>

        {/* Mobile: flex row (photo left, identity right). Desktop: 5-col grid */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start">

          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            {/* Mobile layout: photo small on left, identity on right */}
            <div className="flex gap-5 items-start lg:hidden mb-8">
              {/* Compact photo */}
              <div className="flex-shrink-0">
                <div
                  className="relative overflow-hidden border border-[#1e1e1e]"
                  style={{ width: '96px', height: '96px' }}
                >
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#B22222]/50 z-10" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#B22222]/50 z-10" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#B22222]/50 z-10" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#B22222]/50 z-10" />
                  <img
                    src="/lukas-photo.jpeg"
                    alt="Lukas Stibor"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top', filter: 'grayscale(100%) contrast(1.05)' }}
                  />
                  <div
                    className="absolute left-0 right-0 z-10 pointer-events-none"
                    style={{
                      height: '28px',
                      background: 'linear-gradient(180deg, transparent 0%, rgba(178,34,34,0.12) 50%, transparent 100%)',
                      animation: 'photoScan 5s ease-in-out infinite',
                      top: 0,
                    }}
                  />
                </div>
              </div>

              {/* Identity right of photo */}
              <div className="flex-1 min-w-0">
                <h2 className="font-display font-bold text-[1.35rem] text-[#f0ede8] mb-1 tracking-tight">
                  Lukas Stibor
                </h2>
                <p className="font-mono text-[10px] text-[#555] tracking-[0.18em] mb-3">
                  CEO · CLEEVIO GROUP
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-[#555] border border-[#1e1e1e] px-2 py-1 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://twitter.com/lukastibor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border border-[#1e1e1e] px-2.5 py-2 text-[#555] hover:text-[#f0ede8] hover:border-[#333] transition-all duration-200"
                  >
                    <TwitterIcon />
                    <span className="font-mono text-[9px] tracking-widest">@lukastibor</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/stibor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border border-[#1e1e1e] px-2.5 py-2 text-[#555] hover:text-[#f0ede8] hover:border-[#333] transition-all duration-200"
                  >
                    <LinkedInIcon />
                    <span className="font-mono text-[9px] tracking-widest">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop layout: full photo + identity stacked below */}
            <div className="hidden lg:block">
              <HudPhoto />

              <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#f0ede8] mb-2 tracking-tight">
                Lukas Stibor
              </h2>
              <p className="font-mono text-[11px] text-[#555] tracking-[0.2em] mb-6">
                CEO · CLEEVIO GROUP
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[#555] border border-[#1e1e1e] px-3 py-1.5 tracking-wide hover:border-[#2e2e2e] hover:text-[#888] transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://twitter.com/lukastibor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border border-[#1e1e1e] px-3.5 py-2.5 text-[#555] hover:text-[#f0ede8] hover:border-[#333] transition-all duration-200"
                >
                  <TwitterIcon />
                  <span className="font-mono text-[10px] tracking-widest">@lukastibor</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/stibor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border border-[#1e1e1e] px-3.5 py-2.5 text-[#555] hover:text-[#f0ede8] hover:border-[#333] transition-all duration-200"
                >
                  <LinkedInIcon />
                  <span className="font-mono text-[10px] tracking-widest">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right col — bio */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-6 pt-0 lg:pt-2"
          >
            <p className="text-[#777] text-[1rem] leading-[1.85]">
              I've been a tech entrepreneur since I built my first website at 14. Co-founded
              Cleevio in 2008 — started as a software studio, grew into a group working with
              brands like McDonald's, Coca-Cola, and Oreo. Forbes 30 Under 30. Deloitte Fast 50 &amp; 500.
            </p>

            <p className="text-[#777] text-[1rem] leading-[1.85]">
              Along the way I co-founded several B2C products with millions of users — GAMEE
              (8M+ MAU, acquired by Animoca Brands), Spendee, CoinBrain, TradingAnalyzer.ai.
              Some I still hold, some I've exited.
            </p>

            <p className="text-[#777] text-[1rem] leading-[1.85]">
              Stepped away from Cleevio for 8 years. Came back in 2025 as CEO. Now turning
              Cleevio Group into an AI-first organization and investing through Mark 46
              on the side.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:hello@mark46.com"
                className="group/card border border-[#1e1e1e] hover:border-[#B22222]/40 hover:bg-[#B22222]/[0.03] px-5 py-4 transition-all duration-300 block"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover/card:bg-[#B22222] transition-colors duration-300" />
                  <span className="font-mono text-[10px] text-[#444] group-hover/card:text-[#B22222] tracking-widest uppercase transition-colors duration-300">Open to invest</span>
                </div>
                <p className="text-[#555] text-[0.8rem] leading-relaxed">
                  Always looking for new opportunities in tech and real estate.
                </p>
              </a>
              <a
                href="https://calendly.com/lukasstibor"
                target="_blank"
                rel="noopener noreferrer"
                className="group/card border border-[#1e1e1e] hover:border-[#B22222]/40 hover:bg-[#B22222]/[0.03] px-5 py-4 transition-all duration-300 block"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover/card:bg-[#B22222] transition-colors duration-300" />
                  <span className="font-mono text-[10px] text-[#444] group-hover/card:text-[#B22222] tracking-widest uppercase transition-colors duration-300">Consulting</span>
                </div>
                <p className="text-[#555] text-[0.8rem] leading-relaxed">
                  Available for a limited number of strategic engagements.
                </p>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

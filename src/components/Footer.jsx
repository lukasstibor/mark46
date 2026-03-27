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

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#111]">

      {/* Quote section */}
      <div className="relative px-6 py-16 overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(178,34,34,0.04), transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-display font-bold text-[clamp(1.6rem,4vw,2.8rem)] text-[#f0ede8] tracking-tight leading-[1.15]">
            "Sometimes you gotta run{' '}
            <span className="text-[#B22222]">before you walk.</span>"
          </p>
          <p className="font-mono text-[10px] text-[#333] tracking-[0.3em] uppercase mt-4">
            — Tony Stark · Mark XLVI
          </p>
        </div>
      </div>

      {/* Contact + links section */}
      <div className="border-t border-[#111] px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Col 1 — brand */}
          <div>
            <span className="font-display font-bold text-lg text-[#f0ede8] tracking-tight">
              Mark 46
            </span>
            <p className="font-mono text-[10px] text-[#333] tracking-[0.2em] mt-2">
              Private Investment Company
            </p>
          </div>

          {/* Col 2 — contact */}
          <div>
            <span className="font-mono text-[10px] text-[#444] tracking-[0.2em] uppercase block mb-3">
              Contact
            </span>
            <a
              href="mailto:hello@mark46.com"
              className="text-[#777] hover:text-[#B22222] transition-colors duration-200 text-sm font-body block mb-2"
            >
              hello@mark46.com
            </a>
            <a
              href="https://calendly.com/lukasstibor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#B22222] transition-colors duration-200 text-sm font-body block"
            >
              Book a call →
            </a>
          </div>

          {/* Col 3 — social */}
          <div>
            <span className="font-mono text-[10px] text-[#444] tracking-[0.2em] uppercase block mb-3">
              Follow
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/stibor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#555] hover:text-[#f0ede8] transition-colors duration-200"
              >
                <LinkedInIcon />
                <span className="font-mono text-[11px] tracking-wide">LinkedIn</span>
              </a>
              <span className="text-[#1e1e1e]">·</span>
              <a
                href="https://twitter.com/lukastibor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#555] hover:text-[#f0ede8] transition-colors duration-200"
              >
                <TwitterIcon />
                <span className="font-mono text-[11px] tracking-wide">@lukastibor</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0f0f0f] px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-mono text-[9px] text-[#222] tracking-widest">
            © 2023–{year} MARK 46
          </span>
          <span className="font-mono text-[9px] text-[#1a1a1a] tracking-widest">
            Built with conviction.
          </span>
        </div>
      </div>
    </footer>
  )
}

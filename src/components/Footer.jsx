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
    <footer className="border-t border-[#111] relative overflow-hidden">

      {/* Iron Man artwork — subtle background element */}
      <div className="absolute right-0 top-0 bottom-0 w-[300px] lg:w-[400px] pointer-events-none select-none">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-right-bottom"
          style={{
            backgroundImage: 'url(/ironman-1.jpg)',
            opacity: 0.12,
          }}
        />
        {/* Fade left edge into background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.6) 40%, rgba(8,8,8,0) 100%)',
          }}
        />
      </div>

      {/* Footer content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#111]">

            {/* Left: Company info */}
            <div>
              <span className="font-display font-bold text-lg text-[#f0ede8] tracking-tight">
                Mark 46
              </span>
              <p className="font-mono text-[10px] text-[#444] tracking-[0.2em] mt-2">
                Private Investment
              </p>
            </div>

            {/* Right: Copyright + Social */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

              {/* Copyright */}
              <span className="font-mono text-[9px] text-[#333] tracking-widest">
                &copy; 2023&ndash;{year} Mark 46
              </span>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/stibor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#555] hover:text-[#f0ede8] transition-colors duration-200"
                >
                  <LinkedInIcon />
                  <span className="font-mono text-[10px] tracking-widest hidden sm:inline">LinkedIn</span>
                </a>
                <span className="text-[#1e1e1e]">&middot;</span>
                <a
                  href="https://twitter.com/lukastibor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#555] hover:text-[#f0ede8] transition-colors duration-200"
                >
                  <TwitterIcon />
                  <span className="font-mono text-[10px] tracking-widest hidden sm:inline">Twitter</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

    </footer>
  )
}

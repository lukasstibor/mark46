import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setStatus('loading')
    try {
      // Wire to your email provider (Mailchimp, ConvertKit, Buttondown, etc.)
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative border border-[#1e1e1e] bg-[#0a0a0a] overflow-hidden">
          {/* Red accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B22222] to-transparent" />
          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B22222]/30 to-transparent" />

          {/* Background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center top, rgba(178,34,34,0.06), transparent 70%)' }}
          />

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#B22222]/20" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#B22222]/20" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#B22222]/20" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#B22222]/20" />

          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-12 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">

              {/* Left — 3 cols */}
              <div className="md:col-span-3">
                <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#f0ede8] mb-2 tracking-tight leading-tight">
                  Get the deals I'm watching.
                </h2>
                <p className="text-[#555] text-sm leading-relaxed">
                  What I'm investing in, building, and paying attention to.
                  Sent only when there's something real to share.
                </p>
                <p className="font-mono text-[10px] text-[#333] tracking-[0.2em] mt-3">
                  2,000+ founders & operators already in
                </p>
              </div>

              {/* Right — 2 cols, form */}
              <div className="md:col-span-2">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#B22222]"
                        style={{ boxShadow: '0 0 8px rgba(178,34,34,0.6)' }} />
                      <span className="text-[#f0ede8] text-sm">You're in.</span>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full bg-[#080808] border border-[#1e1e1e] px-5 py-3.5 text-[#f0ede8] font-body text-sm placeholder-[#333] focus:outline-none focus:border-[#B22222]/40 transition-colors duration-200"
                        />
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full bg-[#B22222] hover:bg-[#9a1a1a] disabled:opacity-50 px-8 py-3.5 text-[#f0ede8] font-display font-semibold text-sm tracking-wide transition-colors duration-200 whitespace-nowrap"
                        >
                          {status === 'loading' ? '...' : 'Get access →'}
                        </button>
                      </div>
                      {status === 'error' && (
                        <p className="font-mono text-[10px] text-[#B22222]/60 mt-2 tracking-wide">
                          Something went wrong. Try again.
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

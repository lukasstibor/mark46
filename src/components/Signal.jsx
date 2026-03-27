import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Signal() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/posts.json')
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => {})
  }, [])

  return (
    <section id="news" className="py-32 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="font-mono text-xs text-[#B22222] tracking-[0.3em] uppercase">
              From the Field
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#f0ede8] mt-3">
              Current thinking.
            </h2>
            <p className="text-[#555] text-sm mt-2 max-w-md leading-relaxed">
              What's on my mind — deals, operators, the market. Published on LinkedIn when something's worth saying.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/stibor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-[#222] px-4 py-2.5 text-[#666] hover:text-[#f0ede8] hover:border-[#333] transition-all duration-200 self-start md:self-auto"
          >
            <LinkedInIcon />
            <span className="font-mono text-xs tracking-widest">linkedin.com/in/stibor</span>
            <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* Posts */}
        {posts.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-px"
          >
            {posts.map((post, i) => (
              <motion.a
                key={i}
                variants={itemVariants}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-transparent hover:border-[#1e1e1e] bg-transparent hover:bg-[#0d0d0d] px-0 sm:px-6 py-5 transition-all duration-200 -mx-0 sm:-mx-6"
              >
                {/* Left: index + title */}
                <div className="flex items-start sm:items-center gap-5 flex-1 min-w-0">
                  <span className="font-mono text-xs text-[#2a2a2a] group-hover:text-[#333] transition-colors duration-200 mt-0.5 sm:mt-0 shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-medium text-[#888] group-hover:text-[#f0ede8] transition-colors duration-200 text-base leading-snug truncate">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      {post.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10px] text-[#333] group-hover:text-[#444] tracking-widest transition-colors duration-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: date + arrow */}
                <div className="flex items-center gap-6 shrink-0 pl-10 sm:pl-0">
                  <span className="font-mono text-[11px] text-[#333] group-hover:text-[#555] transition-colors duration-200 w-16 text-right">
                    {post.date}
                  </span>
                  <svg className="w-4 h-4 text-[#2a2a2a] group-hover:text-[#B22222] translate-x-0 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-[#111] flex items-center justify-between"
        >
          <a
            href="https://www.linkedin.com/in/stibor/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#444] hover:text-[#B22222] transition-colors duration-200 flex items-center gap-1.5"
          >
            Follow on LinkedIn →
          </a>
        </motion.div>

      </div>
    </section>
  )
}

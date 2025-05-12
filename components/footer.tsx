"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="w-full border-t border-white/10 pt-4 pb-6 px-4 mt-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
        <div>Mustafa Aljishi</div>
        <div className="flex space-x-4 my-2 md:my-0">
          <a
            href="https://datah4wk.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="https://linkedin.com/in/datah4wk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div>© All copyrights reserved 2025</div>
      </div>
    </motion.footer>
  )
}

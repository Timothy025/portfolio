"use client"

import Link from "next/link"
// import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { downloadResume } from "@/lib/utils"

const projects = [
  { num: "01", title: "Feedzaa", href: "/projects/feedzaa" },
  { num: "02", title: "Iris Sense", href: "/projects/iris-sense" },
  { num: "03", title: "Iris Network", href: "/projects/iris-network" },
  { num: "04", title: "Iris R-one", href: "/projects/r-one-ams" },
]

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Resume", action: "resume" },
  { name: "LinkedIn", href: "https://linkedin.com/in/timothy-jerald/", external: true },
]

export function Navbar() {
  // const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 sm:px-10 py-3 sm:py-4 flex items-center justify-between gap-8 sm:gap-24 w-[90%] sm:w-auto max-w-5xl ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border border-border/40 shadow-2xl"
            : "bg-background/40 backdrop-blur-xl border border-white/10 shadow-lg"
        }`}
      >
        {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-lg font-droga text-foreground">TJX</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) =>
                item.action === "resume" ? (
                  <button
                    key={item.name}
                    onClick={downloadResume}
                    className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href!}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground relative z-[60]"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-background flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((item, idx) =>
                item.action === "resume" ? (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={() => { downloadResume(); setMobileOpen(false) }}
                    className="text-2xl font-medium text-foreground"
                  >
                    {item.name}
                  </motion.button>
                ) : (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={item.href!}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-medium text-foreground"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              )}

              {/* Project list in mobile menu */}
              <div className="mt-8 pt-8 border-t border-border/20 flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-2">Projects</span>
                {projects.map((p, idx) => (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.06 }}
                  >
                    <Link
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="text-muted-foreground/40 mr-2">{p.num}.</span>
                      {p.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
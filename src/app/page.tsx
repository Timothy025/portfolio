"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, Linkedin, Globe } from "lucide-react"

/* ──────────────────────── DATA ──────────────────────── */

interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  image: string
  link: string
  achievement?: string
  color: string
}

const projects: Project[] = [
  {
    id: "r-one-ams",
    title: "Iris R one",
    subtitle: "Building an asset management tool for charge-point operators to monitor hardware in real-time.",
    tags: ["Asset Management", "IoT Ops"],
    image: "/thumnail/r-one-thumnail.png",
    link: "/projects/r-one-ams",
    color: "#F76258",
  },
  {
    id: "iris-network",
    title: "Iris Network",
    subtitle: "Redesigning smart EV charging operations for greater driver access and commercial scalability.",
    tags: ["EV Smart Charging", "Platform Redesign"],
    image: "/thumnail/Network-thumnail.png",
    link: "/projects/iris-network",
    color: "#32B34F",
  },
  {
    id: "fleet",
    title: "Iris Fleet",
    subtitle: "Optimizing commercial EV fleet dispatch, charging schedules, and state-of-charge tracking.",
    tags: ["Fleet Management", "Scheduling"],
    image: "/Fleet/depots.png",
    link: "/projects/fleet",
    color: "#429AE7",
  },
  {
    id: "iris-sense",
    title: "Iris Sense",
    subtitle: "Helping CXO executives query strategic roadmaps, financial yields, and carbon-emission impacts using conversational AI.",
    tags: ["Conversational AI", "Enterprise UX"],
    image: "/thumnail/Sense-thumnail.png",
    link: "/projects/iris-sense",
    color: "#F7CF58",
  },
  {
    id: "energy",
    title: "Aatral",
    subtitle: "Smart grid load balancing, peak-load shifting, and transformer bottleneck mitigation for utility operators.",
    tags: ["Energy Management", "Smart Grid"],
    image: "/Aatral_app.svg",
    link: "/projects/energy",
    color: "#00E673",
  },
  {
    id: "rms",
    title: "Planet 3 RMS",
    subtitle: "A real-time monitoring center providing actionable alerts and fault diagnosis for large-scale EV charger deployments.",
    tags: ["Remote Monitoring", "IoT Operations"],
    image: "/thumnail/RMS-thumnail.png",
    link: "/projects/rms",
    color: "#EC008C",
  },
  {
    id: "oms-order-management",
    title: "OMS — Sodexo",
    subtitle: "Streamlining multi-branch food retail order tracking, revenue monitoring, and performance analysis for Sodexo managers.",
    tags: ["B2B SaaS", "Enterprise UX"],
    image: "/thumnail/OMS-thumnail.png",
    link: "/projects/oms-order-management",
    color: "#00229E",
  },
  {
    id: "witnesschain",
    title: "WitnessChain",
    subtitle: "A Web3 mobile wallet rewarding users with tokens for participating in decentralized network validation.",
    tags: ["Web3", "Crypto Mining", "Mobile App"],
    image: "/witnesschain.png",
    link: "/projects/witnesschain",
    color: "#7CFF92",
  },
  {
    id: "feedzaa",
    title: "Feedzaa",
    subtitle: "Empowering culinary creators to build digital kitchens and manage food commerce end-to-end.",
    tags: ["Food Commerce", "Mobile App"],
    image: "/chef_app.png",
    link: "/projects/feedzaa",
    color: "#DB3D1A",
  },
  {
    id: "payez",
    title: "PayEZ",
    subtitle: "A unified payment gateway that seamlessly integrates UPI and cryptocurrency payments in one checkout flow.",
    tags: ["Payment Gateway", "Crypto", "Mobile App"],
    image: "/payez.png",
    link: "/projects/payez",
    color: "#4A69D8",
  },
]

function getReadableTextColor(hex: string) {
  const clean = hex.replace("#", "")
  const channels = [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ].map((channel) => {
    const value = channel / 255
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  const luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
  const blackContrast = (luminance + 0.05) / 0.05
  const whiteContrast = 1.05 / (luminance + 0.05)

  return blackContrast > whiteContrast ? "#000000" : "#ffffff"
}

const testimonials = [
  {
    name: "Surya",
    role: "Planet 3 energy",
    quote: "From my experience working with you, you are very supportive and easy to collaborate with. You communicate clearly and make sure things move forward without delays. I really appreciate your responsiveness and willingness to help whenever needed. Your contributions have helped keep the work organized and on track.",
  },
  {
    name: "Vishwanath",
    role: "CEO, Steam-A",
    quote: "Timothy played an important role in elevating the product experience at Steam-A through his strong UI/UX skills and attention to detail. His ability to rethink user journeys and transform complex ideas into intuitive experiences brought real value to the team and product. He approaches design with ownership, curiosity, and a clear understanding of user needs.",
  },
  {
    name: "Pratheep",
    role: "Head of Design, Steam-A",
    quote: "Timothy has a strong eye for product thinking and visual execution. During his time at Steam-A, he consistently improved user flows with thoughtful UX decisions and brought a fresh level of polish to the product experience. His ability to balance creativity with usability made him a valuable part of the design team.",
  },
  {
    name: "Ramya",
    role: "Product Manager – Steam-A",
    quote: "Timothy contributed significantly to the user experience of both the Network and Sense products at Steam-A. He has a sharp understanding of product requirements and consistently translated complex workflows into clean, user-friendly experiences. His collaboration with the product and development teams helped improve both usability and visual consistency across the platform.",
  },
]

/* ──────────────────────── COMPONENTS ──────────────────────── */

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const hoverTextColor = getReadableTextColor(project.color)
  const hoverSupportingTextColor =
    hoverTextColor === "#000000" ? "rgba(0, 0, 0, 0.72)" : "rgba(255, 255, 255, 0.85)"
  const hoverControlBg =
    hoverTextColor === "#000000" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.15)"
  const hoverControlBorder =
    hoverTextColor === "#000000" ? "rgba(0, 0, 0, 0.18)" : "rgba(255, 255, 255, 0.3)"

  return (
    <FadeIn delay={index * 0.08}>
      <Link href={project.link}>
        <motion.article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border/30 bg-card/50 transition-all duration-500"
          style={{
            backgroundColor: hovered ? project.color : undefined,
            borderColor: hovered ? project.color : undefined,
            boxShadow: hovered ? `0 20px 45px ${project.color}40` : undefined,
          }}
        >
          {/* Subtle inner highlight on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)"
            }}
          />

          <div className="flex flex-col md:flex-row relative z-10 items-stretch">
            {/* Left - Text area */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/5 backdrop-blur-md text-foreground/80 border border-black/10 dark:border-white/10 transition-all duration-500"
                    style={{ 
                      borderColor: hovered ? hoverControlBorder : undefined,
                      color: hovered ? hoverTextColor : undefined,
                      backgroundColor: hovered ? hoverControlBg : undefined,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <div className="space-y-3 mb-6">
                <h3 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold font-space-grotesk tracking-tight text-foreground transition-colors duration-500"
                  style={{ color: hovered ? hoverTextColor : undefined }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-sm sm:text-[15px] lg:text-base text-muted-foreground/80 leading-relaxed max-w-md transition-colors duration-500"
                  style={{ color: hovered ? hoverSupportingTextColor : undefined }}
                >
                  {project.subtitle}
                </p>
                {project.achievement && (
                  <p 
                    className="text-xs text-blue-400 font-medium mt-1 transition-colors duration-500"
                    style={{ color: hovered ? hoverSupportingTextColor : undefined }}
                  >
                    {project.achievement}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <motion.div
                animate={{
                  x: hovered ? 3 : 0,
                  y: hovered ? -3 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex-shrink-0 w-10 h-10 rounded-full border border-border/40 flex items-center justify-center transition-all duration-500"
                style={{
                  borderColor: hovered ? hoverControlBorder : undefined,
                  backgroundColor: hovered ? hoverControlBg : undefined,
                }}
              >
                <ArrowUpRight 
                  className="w-4 h-4 text-muted-foreground transition-colors duration-500"
                  style={{ color: hovered ? hoverTextColor : undefined }}
                />
              </motion.div>
            </div>

            {/* Right - Image area */}
            <div 
              className="w-full md:w-[48%] lg:w-[50%] relative overflow-hidden bg-muted/[0.02] dark:bg-white/[0.01] transition-colors duration-500 flex-shrink-0 min-h-[260px] md:min-h-auto"
              style={{ backgroundColor: hovered ? "transparent" : undefined }}
            >
              <div className="absolute inset-0 top-8 md:top-10 left-6 md:left-10 right-0 bottom-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[125%] h-full object-cover object-left-top rounded-tl-xl border-t border-l border-white/10 dark:border-white/5 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    </FadeIn>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] p-6 rounded-2xl border border-border/30 bg-card/50 flex flex-col justify-between gap-5 select-none">
      <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed italic">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-muted/40 flex items-center justify-center text-[11px] font-bold text-foreground/60">
          {t.name[0]}
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">{t.name}</p>
          <p className="text-[10px] text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

function TestimonialMarquee() {
  // Duplicate the array so the strip is long enough for a seamless loop
  const doubled = [...testimonials, ...testimonials]

  return (
    <div className="group relative overflow-hidden">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling track */}
      <div className="flex gap-4 sm:gap-5 animate-marquee group-hover:[animation-play-state:paused] w-max">
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────── PAGE ──────────────────────── */

export default function Home() {
  // Smooth scroll for hash links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }
    }
    window.addEventListener("hashchange", handleHash)
    setTimeout(handleHash, 100)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/20 selection:text-foreground">
      {/* ATS Screeners & SEO Hidden Text */}
      <h1 className="sr-only">
        Timothy Jerald Xavier - Senior Product Designer & UI/UX Expert. 
        Core Skills: Product Design, User Experience (UX) Design, User Interface (UI) Design, Interaction Design, User Research, Wireframing, Rapid Prototyping, High-Fidelity Mockups, Figma, Design Systems, Information Architecture (IA), Usability Testing, User-Centered Design (UCD), Design Thinking, SaaS Application Design, Enterprise UX, B2B, B2C, Web3 Design, Mobile App Design, iOS/Android Guidelines, Agile Development, Scrum, Cross-functional Collaboration, Stakeholder Management, Problem Solving, Visual Design, Accessibility (WCAG), Responsive Web Design, Front-end Collaboration.
      </h1>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        {/* Static background orbs to prevent repaint performance bottlenecks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute -top-20 left-[20%] w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px]" 
          />
          <div 
            className="absolute top-10 right-[15%] w-[300px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[100px]" 
          />
          <div 
            className="absolute top-40 left-[60%] w-[200px] h-[200px] bg-emerald-500/[0.03] rounded-full blur-[80px]" 
          />
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
          </motion.div>

          {/* Main headline */}
          <div className="mb-6">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] font-medium leading-[1.15] tracking-tight"
            >
              <span className="block">
                {"I'm ".split("").map((char, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.03 }}
                    className="inline-block text-muted-foreground/80"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                {"Timothy".split("").map((char, i) => (
                  <motion.span
                    key={`name-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
                    className="inline-block text-foreground"
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-muted-foreground/80"
                >,{" "}</motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-muted-foreground/80"
                >
                  I craft scalable{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="relative inline-block group cursor-default"
                >
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-600 dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500">
                    product experiences
                  </span>
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="text-muted-foreground/80"
                >.</motion.span>
              </span>
            </motion.h2>
          </div>

          {/* ATS-rich supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed text-muted-foreground/80 mb-12"
          >
            Senior Product Designer specializing in{" "}
            <span className="text-foreground/90 hover:text-blue-300 transition-colors duration-300 cursor-default">UX strategy</span>,{" "}
            <span className="text-foreground/90 hover:text-blue-300 transition-colors duration-300 cursor-default">interaction design</span>,{" "}
            <span className="text-foreground/90 hover:text-blue-300 transition-colors duration-300 cursor-default">design systems</span>, and{" "}
            <span className="text-foreground/90 hover:text-blue-300 transition-colors duration-300 cursor-default">rapid prototyping</span>.{" "}
            I transform complex enterprise workflows into intuitive, scalable experiences across{" "}
            <span className="text-foreground/90 hover:text-emerald-300 transition-colors duration-300 cursor-default">EV charging networks</span>,{" "}
            <span className="text-foreground/90 hover:text-amber-300 transition-colors duration-300 cursor-default">fleet management platforms</span>, and{" "}
            <span className="text-foreground/90 hover:text-purple-300 transition-colors duration-300 cursor-default">data-driven SaaS products</span>{" "}
            improving usability, consistency, and delivery speed.
          </motion.p>

          {/* Full-width stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="grid grid-cols-4 gap-3"
          >
            {[
              { value: "10+", label: "Products Shipped", color: "blue", desc: "Web, Mobile & Enterprise" },
              { value: "3+", label: "Years Experience", color: "emerald", desc: "Product Design & UX" },
              { value: "B2B", label: "SaaS Focus", color: "amber", desc: "Enterprise & Data Platforms" },
              { value: "E2E", label: "Design Ownership", color: "purple", desc: "Research → Delivery" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className={`group relative cursor-default rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.02] backdrop-blur-sm px-5 py-4 overflow-hidden transition-all duration-500 hover:border-${stat.color}-500/30 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]`}
              >
                {/* Accent top border glow */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                  stat.color === 'blue' ? 'from-blue-500/0 via-blue-500/60 to-blue-500/0' :
                  stat.color === 'emerald' ? 'from-emerald-500/0 via-emerald-500/60 to-emerald-500/0' :
                  stat.color === 'amber' ? 'from-amber-500/0 via-amber-500/60 to-amber-500/0' :
                  'from-purple-500/0 via-purple-500/60 to-purple-500/0'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Corner glow */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 ${
                  stat.color === 'blue' ? 'bg-blue-500/10' :
                  stat.color === 'emerald' ? 'bg-emerald-500/10' :
                  stat.color === 'amber' ? 'bg-amber-500/10' :
                  'bg-purple-500/10'
                } rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`text-[22px] sm:text-[26px] lg:text-[30px] font-bold leading-none mb-1.5 transition-colors duration-300 ${
                  stat.color === 'blue' ? 'text-foreground group-hover:text-blue-400' :
                  stat.color === 'emerald' ? 'text-foreground group-hover:text-emerald-400' :
                  stat.color === 'amber' ? 'text-foreground group-hover:text-amber-400' :
                  'text-foreground group-hover:text-purple-400'
                }`}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/90 group-hover:text-foreground transition-colors duration-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ WORK ═══════════════ */}
      <section id="work" className="pb-10 sm:pb-14">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section label */}
          <FadeIn className="mb-12 sm:mb-16">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/50">
              My Works
            </p>
          </FadeIn>

          {/* Project cards — single column, full width */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section id="testimonials" className="pt-12 sm:pt-16 pb-12 sm:pb-16 border-t border-border/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn className="mb-10 sm:mb-14">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/50">
              What others say about me
            </p>
          </FadeIn>
        </div>

        {/* Full-width marquee (breaks out of container) */}
        <TestimonialMarquee />
      </section>

      {/* ═══════════════ CONTACT STRIP ═══════════════ */}
      <section id="contact" className="py-10 sm:py-14 border-t border-border/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-[640px]">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/50 mb-6">
                Get in touch
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-snug mb-8">
                Interested in working together? Let&apos;s connect and build something great.
              </h2>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:jeraldtimothy@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground px-5 py-2.5 rounded-full border border-border/40 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  jeraldtimothy@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/timothy-jerald/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground px-5 py-2.5 rounded-full border border-border/40 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://behance.net/timothyjerald"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground px-5 py-2.5 rounded-full border border-border/40 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  Behance
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}

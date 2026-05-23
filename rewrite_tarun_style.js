const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'src/app/projects');

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      const projectName = path.basename(dir);
      if (projectName === 'feedzaa' || projectName === 'r-one-ams') continue; 
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const safeName = toTitleCase(projectName.replace(/[-_]/g, ' ')).replace(/\s+/g, '');
      const displayTitle = toTitleCase(projectName.replace(/[-_]/g, ' '));
      
      const newTemplate = `"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, AlertTriangle, Lightbulb, Target, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ${safeName}CaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#3b82f6]/20 selection:text-foreground pb-24">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-white/10 hover:bg-white/10 shadow-lg w-12 h-12">
          <Link href="/#work">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
      </div>

      {/* Hero & Overview */}
      <div className="container mx-auto px-4 pt-32 max-w-5xl">
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-8">
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="text-[#3b82f6] border-[#3b82f6]/30 bg-[#3b82f6]/10 mb-6">
              Case Study · 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 uppercase">
              ${displayTitle}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              End-to-end user experience redesign to improve activation and return visits.
            </h2>
          </motion.div>

          {/* Overview Glass Card */}
          <motion.div variants={fadeInUp} className="mt-12 p-8 sm:p-10 rounded-[2rem] bg-card/40 border border-border/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-12">
              <div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  The primary challenge was that users experienced high friction when navigating the platform, leading to drop-offs. The goal was to unify the workflow and create a more trustworthy and intuitive environment.
                </p>
                <p className="text-xl leading-relaxed text-foreground mt-6 font-medium">
                  This project was designed as a unified system connecting the core user tasks with real-time feedback and clear pathways.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Timeline</h4>
                  <p className="font-medium text-sm">3-4 months</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Role</h4>
                  <p className="font-medium text-sm">Product Designer</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Platform</h4>
                  <p className="font-medium text-sm">Web & Mobile App</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Scope</h4>
                  <p className="font-medium text-sm">UX Research, UI Design, Prototyping</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Impact Section */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-24 space-y-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">What changed</h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
              These outcomes reflect day-to-day operational changes after adoption. The redesign improved how users interact with the system, driving significant directional impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "2x", label: "Increase in platform adoption and retention." },
                { metric: "42%", label: "Reduced friction and cognitive load for users." },
                { metric: "Faster", label: "Task completion and data processing." },
                { metric: "Quality", label: "Standardized UI elements improved consistency." }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-[1.5rem] bg-background border border-white/5 shadow-lg flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="text-3xl font-bold font-space-grotesk text-foreground">{stat.metric}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* The Operational Breakdown */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 space-y-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">The Breakdown</h3>
            <h4 className="text-3xl md:text-4xl font-light mb-6">Success was limited by workflow design, not effort.</h4>
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              Users were frustrated when trying to execute their primary tasks because their workflow was fragmented across different systems. The recurring failure mode wasn't a lack of tools. It was the lack of a single operating model.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-red-950/10 border border-red-500/20 text-red-200 mt-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="leading-relaxed opacity-90">No shared truth: Signals, history, and status lived in different places.</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="leading-relaxed opacity-90">Reactive processes dominated: Problems were handled after failure.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* The Solutions (1 to 2) */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 space-y-16">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">Key Solutions</h3>
          </motion.div>

          {[
            {
              num: "1",
              title: "Unified Dashboard",
              subtitle: "Reducing cognitive load before commitment",
              problem: "Users struggled to understand the state of their daily operations at a glance.",
              move: "Data is organized into a single, scannable dashboard with clear statuses and metrics.",
              why: "At-a-glance awareness helps operators quickly understand progress without digging into logs."
            },
            {
              num: "2",
              title: "Guided Workflows",
              subtitle: "From implied credibility to visible signals",
              problem: "Tools dictated the workflow, forcing users to think in terms of app switching.",
              move: "Modules are organized by core business actions, not disjointed tools.",
              why: "Designing around intent makes the platform easier to learn and reduces cognitive load."
            }
          ].map((sol, i) => (
            <motion.div key={i} variants={fadeInUp} className="p-8 sm:p-10 rounded-[2rem] bg-card/40 border border-border/30 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] flex items-center justify-center font-bold text-lg">{sol.num}</div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground">{sol.title}</h4>
                  <p className="text-sm text-muted-foreground">{sol.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-8 mt-8">
                <div>
                  <h5 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Problem</h5>
                  <p className="text-base text-foreground/90">{sol.problem}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                  <div>
                    <h5 className="text-xs font-semibold tracking-widest uppercase text-[#3b82f6] mb-2">Design Move</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sol.move}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold tracking-widest uppercase text-emerald-500 mb-2">Why It Matters</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sol.why}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learnings */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 pb-20 space-y-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">What this project changed for me</h3>
            <div className="p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-[#3b82f6]/10 to-transparent border border-[#3b82f6]/20">
              <Lightbulb className="w-12 h-12 text-[#3b82f6] mb-8" />
              <p className="text-2xl font-medium leading-relaxed mb-12">
                This project reinforced that adoption is rarely a feature problem. It is a confidence problem.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                Users didn't need more functionality, they needed clearer signals at the exact moments where commitment happens.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#3b82f6] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Explainability drives action</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Systems only work when users understand why.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#3b82f6] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Design for decision moments</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Trust cues must appear where commitment happens.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
`
      fs.writeFileSync(fullPath, newTemplate);
      console.log(`Rewrote ${fullPath}`);
    }
  }
}

processDir(projectsDir);

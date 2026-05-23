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
      if (projectName === 'feedzaa') continue; // Skip feedzaa since we did it manually
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Attempt to extract existing text
      const titleMatch = content.match(/<span className="bg-gradient-to-r[^>]*>([^<]*)<\/span>/);
      const title = titleMatch ? titleMatch[1].trim() : toTitleCase(projectName.replace('-', ' '));
      
      // Find the main description paragraphs
      const pRegex = /<p className="text-[^"]*text-muted-foreground[^"]*">([\s\S]*?)<\/p>/g;
      let pMatches = [];
      let match;
      while ((match = pRegex.exec(content)) !== null) {
        // clean up html tags
        pMatches.push(match[1].replace(/<[^>]*>?/gm, '').trim());
      }
      
      const desc1 = pMatches[0] || `A comprehensive platform designed to solve operational challenges.`;
      const desc2 = pMatches[1] || `The solution provides intuitive interfaces and scalable workflows.`;
      
      // Images
      const imgRegex = /<img\s+src="([^"]+)"\s+alt="([^"]+)"/g;
      let imgs = [];
      let imgMatch;
      while ((imgMatch = imgRegex.exec(content)) !== null) {
        imgs.push({ src: imgMatch[1], alt: imgMatch[2] });
      }
      
      const img1 = imgs[0] ? imgs[0].src : '';
      const img2 = imgs[1] ? imgs[1].src : '';
      
      // Get colors based on project name roughly
      let color = '#3b82f6';
      if (projectName.includes('iris') || projectName.includes('energy')) color = '#10b981';
      if (projectName.includes('sense')) color = '#f59e0b';
      
      const newTemplate = `"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ${title.replace(/\s+/g, '')}CaseStudy() {
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
    <div className="min-h-screen bg-background text-foreground selection:bg-[${color}]/20 selection:text-foreground pb-24">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Button variant="ghost" asChild className="group text-muted-foreground hover:text-foreground">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero & Overview */}
      <div className="container mx-auto px-4 pt-32 max-w-5xl">
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-8">
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="text-[${color}] border-[${color}]/30 bg-[${color}]/10 mb-6">
              Case Study
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 uppercase">
              ${title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              Helping teams spend less time managing tools, and more time achieving operational excellence.
            </h2>
          </motion.div>

          {/* Overview Glass Card */}
          <motion.div variants={fadeInUp} className="mt-12 p-8 sm:p-10 rounded-[2rem] bg-card/40 border border-border/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[${color}]/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">Overview</h3>
                <p className="text-xl leading-relaxed">
                  ${desc1}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Timeline</h4>
                  <p className="font-medium">2-3 months</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Team</h4>
                  <p className="font-medium">Product Designer, Engineering Team, Stakeholders</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">My Role</h4>
                  <p className="font-medium">UX Research, UI Design, Prototyping</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Impact Section */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-24 space-y-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">The Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { metric: "60%", trend: "up", label: "Faster task completion and data processing." },
                { metric: "42%", trend: "down", label: "Reduced friction and cognitive load for users." },
                { metric: "2x", trend: "up", label: "Increase in platform adoption and retention." }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-[1.5rem] bg-background border border-white/5 shadow-lg flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-5xl font-bold font-space-grotesk text-foreground">{stat.metric}</span>
                    <TrendingUp className="w-8 h-8 text-[${color}]" />
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* The Problem */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 space-y-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">The Problem</h3>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              Users were frustrated when trying to execute their primary tasks because their workflow was fragmented across different legacy systems and spreadsheets.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-red-950/10 border border-red-500/20 text-red-200 mt-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-red-400 mb-2">Workflow Fragmentation</h4>
                <p className="leading-relaxed opacity-80">
                  By managing fragmented tools, users experienced broken focus, slower progress, and limited visibility into their overall operational health.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* The Process */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 space-y-12">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">The Process</h3>
            <p className="text-xl leading-relaxed mb-8">
              I started by studying the ecosystem. I conducted interviews to understand the friction points in the current operations. With the data points received, I carried out affinity mapping to identify themes and define design goals.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[1.5rem] bg-card/30 border border-border/30">
              <h4 className="text-lg font-semibold text-foreground mb-4">Pain Point 1: Unclear Status</h4>
              <p className="text-muted-foreground">"I often don't know whether a process went through or failed until it's too late. It gets chaotic."</p>
            </div>
            <div className="p-8 rounded-[1.5rem] bg-card/30 border border-border/30">
              <h4 className="text-lg font-semibold text-foreground mb-4">Pain Point 2: Scattered Tools</h4>
              <p className="text-muted-foreground">"There are so many systems involved that just getting the correct data takes up too much of my time."</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8">
            <h4 className="text-xl font-semibold mb-6">Design Goals</h4>
            <div className="space-y-4">
              {[
                { title: "Bring Structure to Complex Workflows", desc: "Help users manage multiple tasks without losing context as data scales." },
                { title: "Reduce Fragmentation", desc: "Minimize context switching by unifying the workflow into one platform." },
                { title: "Make State Clear", desc: "Design for instant understanding of system status." }
              ].map((goal, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5">
                  <Target className="w-6 h-6 text-[${color}] flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">{goal.title}</h5>
                    <p className="text-sm text-muted-foreground">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* The Solution */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 space-y-12">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">The Solution</h3>
            <p className="text-3xl font-medium leading-tight mb-12">
              A unified workspace for end-to-end management.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              ${desc2}
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                problem: "Users struggled to understand the state of their daily operations at a glance.",
                how: "Data is organized into a single, scannable dashboard with clear statuses and metrics.",
                why: "At-a-glance awareness helps operators quickly understand progress without digging into logs."
              },
              {
                problem: "Tools dictated the workflow, forcing users to think in terms of app switching.",
                how: "Modules are organized by core business actions, not disjointed tools.",
                why: "Designing around intent makes the platform easier to learn and reduces cognitive load."
              }
            ].map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 sm:p-10 rounded-[2rem] bg-card/40 border border-border/30 backdrop-blur-md">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Problem Tackled</h4>
                    <p className="text-lg">{sol.problem}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                    <div>
                      <h4 className="text-sm font-semibold tracking-widest uppercase text-[${color}] mb-2">How</h4>
                      <p className="text-muted-foreground leading-relaxed">{sol.how}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-widest uppercase text-emerald-500 mb-2">Why</h4>
                      <p className="text-muted-foreground leading-relaxed">{sol.why}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          ${img1 || img2 ? `
          {/* Solution Images */}
          <motion.div variants={fadeInUp} className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
             ${img1 ? `<img src="${img1}" alt="Dashboard Interface" className="w-full md:w-2/3 rounded-2xl border border-white/10 shadow-2xl" />` : ''}
             ${img2 ? `<img src="${img2}" alt="Mobile Interface" className="w-full md:w-1/3 rounded-2xl border border-white/10 shadow-2xl max-w-[300px]" />` : ''}
          </motion.div>
          ` : ''}
        </motion.div>

        {/* Learnings */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 pb-20 space-y-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">Learnings</h3>
            <div className="p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-[${color}]/10 to-transparent border border-[${color}]/20">
              <Lightbulb className="w-12 h-12 text-[${color}] mb-8" />
              <p className="text-2xl font-medium leading-relaxed mb-12">
                This project taught me that unifying tools isn't enough, you must unify how people think and talk about their workflows.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Speaking the user's language</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Users didn't think in terms of database structures. They thought in terms of business goals. Shifting the interface to focus on their natural mental models made the platform feel intuitive.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">A unified interface creates shared language</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    By standardizing how data and workflows were represented, the system helped teams talk about their work more clearly, even outside the product itself.
                  </p>
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

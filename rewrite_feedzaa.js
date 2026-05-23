const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'src/app/projects/feedzaa/page.tsx');

const newContent = `"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeedzaaCaseStudy() {
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
    <div className="min-h-screen bg-background text-foreground selection:bg-[#DB3E19]/20 selection:text-foreground pb-24">
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
            <Badge variant="outline" className="text-[#DB3E19] border-[#DB3E19]/30 bg-[#DB3E19]/10 mb-6">
              Case Study
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6">
              FEEDZAA
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              Helping home chefs spend 60% less time managing orders, and more time crafting authentic culinary experiences.
            </h2>
          </motion.div>

          {/* Overview Glass Card */}
          <motion.div variants={fadeInUp} className="mt-12 p-8 sm:p-10 rounded-[2rem] bg-card/40 border border-border/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DB3E19]/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">Overview</h3>
                <p className="text-xl leading-relaxed">
                  Feedzaa helps home chefs run their entire food commerce operation without juggling multiple apps. Previously, chefs relied on disconnected tools like WhatsApp, spreadsheets, and standalone payment apps to conduct business. Managing this fragmented workflow often took more effort than cooking itself.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Timeline</h4>
                  <p className="font-medium">3 months</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Team</h4>
                  <p className="font-medium">1 Product Designer (Self)<br/>2 Developers<br/>1 Product Manager</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">My Role</h4>
                  <p className="font-medium">UX Research, Wireframing, High-fidelity UI Design, Prototyping</p>
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
                { metric: "60%", trend: "up", label: "Faster order processing and menu management." },
                { metric: "42%", trend: "down", label: "Reduced friction in the customer checkout journey." },
                { metric: "3x", trend: "up", label: "Increase in recurring weekly orders per chef." }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-[1.5rem] bg-background border border-white/5 shadow-lg flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-5xl font-bold font-space-grotesk text-foreground">{stat.metric}</span>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-8 h-8 text-emerald-500" />
                    ) : (
                      <TrendingUp className="w-8 h-8 text-emerald-500 transform rotate-180" />
                    )}
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
              Home chefs are frustrated when trying to execute and monitor orders because their workflow is fragmented across different communication apps and spreadsheets.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-red-950/10 border border-red-500/20 text-red-200 mt-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-red-400 mb-2">Workflow Fragmentation</h4>
                <p className="leading-relaxed opacity-80">
                  Chefs prepared menus on notebooks, took orders on WhatsApp, manually verified payments via UPI apps, and tracked deliveries using phone calls. This fragmented workflow broke their focus, delayed deliveries, and limited their scaling potential.
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
              I started by studying the home chefs' ecosystem. I conducted semi-structured interviews with 5 active home chefs to understand the friction points in their current operations. With the data points received, I carried out affinity mapping to identify themes and define design goals.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[1.5rem] bg-card/30 border border-border/30">
              <h4 className="text-lg font-semibold text-foreground mb-4">Pain Point 1: Unclear Order Status</h4>
              <p className="text-muted-foreground">"I often don't know whether a payment went through or if a customer cancelled their WhatsApp order until it's too late. It gets chaotic when preparing 20 meals at once."</p>
            </div>
            <div className="p-8 rounded-[1.5rem] bg-card/30 border border-border/30">
              <h4 className="text-lg font-semibold text-foreground mb-4">Pain Point 2: Scattered Tools</h4>
              <p className="text-muted-foreground">"There are so many apps involved in this process that just taking an order and getting it to the delivery guy takes up too much of my cooking time."</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8">
            <h4 className="text-xl font-semibold mb-6">Design Goals</h4>
            <div className="space-y-4">
              {[
                { title: "Bring Structure to Complex Workflows", desc: "Help chefs manage multiple orders and menus without losing context as their customer base scales." },
                { title: "Reduce Fragmentation", desc: "Minimize context switching by unifying the commerce workflow (orders, payments, delivery) into one platform." },
                { title: "Make Order State Clear", desc: "Design for instant understanding of whether an order is pending, paid, or out for delivery." }
              ].map((goal, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5">
                  <Target className="w-6 h-6 text-[#DB3E19] flex-shrink-0" />
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
              Feedzaa. A unified workspace for end-to-end food commerce.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                problem: "Home chefs struggled to understand the state of their daily orders at a glance.",
                how: "Orders are organized into a single, scannable Kanban-style dashboard with clear statuses (New, Preparing, Ready, Delivered).",
                why: "At-a-glance awareness helps chefs quickly understand kitchen progress without digging into chat histories."
              },
              {
                problem: "Tools dictated the workflow, forcing chefs to think in terms of app switching rather than culinary intent.",
                how: "Modules are organized by core business actions (Menu Builder, Order Queue, Earnings), not disjointed tools.",
                why: "Designing around intent makes the platform easier to learn and reduces cognitive load during busy hours."
              },
              {
                problem: "Customer discovery of authentic food was broken by unsearchable WhatsApp broadcast groups.",
                how: "A unified customer app provides an intuitive feed of local chefs, with instant add-to-cart and integrated payments.",
                why: "A single, coherent discovery system bridges the gap between hungry users and talented creators effortlessly."
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
                      <h4 className="text-sm font-semibold tracking-widest uppercase text-[#DB3E19] mb-2">How</h4>
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

          {/* Solution Images */}
          <motion.div variants={fadeInUp} className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
             <img src="/feedzaa_web.png" alt="Feedzaa Web Dashboard" className="w-full md:w-2/3 rounded-2xl border border-white/10 shadow-2xl" />
             <img src="/chef_app.png" alt="Feedzaa Mobile App" className="w-full md:w-1/3 rounded-2xl border border-white/10 shadow-2xl max-w-[300px]" />
          </motion.div>
        </motion.div>

        {/* Learnings */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-32 pb-20 space-y-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">Learnings</h3>
            <div className="p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-[#DB3E19]/10 to-transparent border border-[#DB3E19]/20">
              <Lightbulb className="w-12 h-12 text-[#DB3E19] mb-8" />
              <p className="text-2xl font-medium leading-relaxed mb-12">
                Feedzaa taught me that unifying tools isn't enough, you must unify how people think and talk about their business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Speaking the user's language</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Home chefs didn't think in terms of "payment gateways" or "inventory management". They thought in terms of "getting paid" and "available portions". Shifting the interface to focus on their natural mental models made the platform feel intuitive.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Thoughtful design reduces the need for tech-savvy expertise</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Before Feedzaa, digital commerce felt exclusive to tech-savvy restaurants. A unified, deeply empathetic system allowed anyone with culinary talent to become a business owner, focusing on food rather than operational mastery.
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

fs.writeFileSync(target, newContent);

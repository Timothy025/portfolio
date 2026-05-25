"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  TrendingUp, 
  Bot, 
  Smartphone, 
  Activity, 
  ShieldCheck,
  Zap
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EcommercePlatformCaseStudy() {
  const [selectedRole, setSelectedRole] = useState<"buyer" | "undefined">("buyer")

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-8 transition-colors duration-500 selection:bg-[#db2777]/20">
      {/* Global Page Tint Accent */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.15]" style={{ backgroundColor: "#db2777" }} />
      
      {/* 1. TOP NAV / FLOATING BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-border/40 hover:bg-foreground/5 shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer transition-colors duration-300">
          <Link href="/#work">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
        </Button>
      </div>

      {/* 2. PREMIUM HERO SECTION */}
      <div className="relative overflow-hidden pt-32 pb-8 border-b border-border/10">
        {/* Brand Background Signature Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#db2777]/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#db2777]/5 to-transparent blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-space-grotesk tracking-tight uppercase flex items-center h-10 sm:h-12 lg:h-14" style={{ color: "#db2777" }}>
              E Commerce Platform
            </h1>
  
          </motion.div>

          {/* Immersive Overview & Detailed Metadata Grid */}
          <div className="mt-12 pt-8 border-t border-border/20 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full text-lg md:text-[20px] font-light leading-relaxed text-foreground/90 font-inter space-y-4"
            >
              <span className="text-[#db2777] text-xs font-semibold tracking-widest uppercase block">Overview</span>
              <p className="border-l-4 border-[#db2777] pl-6 md:pl-8 italic text-justify font-inter leading-relaxed">
                Online shoppers experience high cart abandonments when facing sluggish checkouts and disorienting catalog grids. This project optimizes consumer discovery, utilizing smooth transitions, dynamic cart previews, and interactive sales trend graphs to drive conversions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/10 text-sm font-mono tracking-tight"
            >
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Timeline</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">3 Months (Summer 2025)</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Role</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Product Designer</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Platform</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Web Shopper Portal & Admin Panel</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Tech Stack</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">React, tailwind CSS, GraphQL, Postgres, Node.js</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl mt-16">
        
        {/* 4. THE OPERATIONAL BREAKDOWN (THE PROBLEM) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="space-y-8 animate-fade-in"
        >
          <motion.div variants={fadeInUp} className="space-y-3">
            <span className="text-[#db2777] text-xs font-semibold tracking-widest uppercase block">Operational Model / The Challenge</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight leading-tight">
              The Pain of Fragmented E Commerce Pipelines
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 leading-relaxed w-full text-justify font-inter">
              Shopping should feel delightful and fast. But when users face multi step verification forms, dry product tables, and slow pages, merchant revenues drop.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 w-full pt-2">
            <div className="space-y-6 text-base md:text-[20px] leading-relaxed text-muted-foreground/80 font-inter">
              
                <div key={0} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    01 / Slow Payment Gateways
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Multiple redirect pages delayed checkouts, causing cart abandonments.</p>
                </div>
  

                <div key={1} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    02 / Cluttered Product Lists
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Unstructured catalog grids blocked product comparisons, driving user churn.</p>
                </div>
  

                <div key={2} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    03 / Scattered Vendor Tools
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Invoicing, inventory, and analytics required merchants to navigate disjointed menus.</p>
                </div>
  
            </div>
          </motion.div>
        </motion.div>

        {/* 5. INTERACTIVE ROLE SWITCHER SECTION */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-3 w-full">
            <span className="text-[#db2777] text-xs font-semibold tracking-widest uppercase block">Operational Model / Reality</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight md:whitespace-nowrap">
              Unified Operations
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground w-full text-justify font-inter">
              We designed this platform to serve casual shoppers exploring the catalog, and vendor admins coordinating dynamic inventories.
            </p>
          </motion.div>

          

          {/* Role Showcase Display */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-card/30 border border-border/30 backdrop-blur-md"
          >
            
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[#db2777]/10 text-[#db2777]">
                      <Zap className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        Consumer Shopper (Discovery & Rapid Checkout)
                      </h4>
                      <p className="text-xs text-[#db2777] font-mono tracking-wider uppercase">Archetype: "High-Confidence"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    The Shopper wants to locate products and buy them with absolute ease. The design optimizes for fast transaction execution:
                  </p>
                  <ul className="space-y-3.5">
                    
                      <li key={0} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#db2777] flex-shrink-0 mt-0.5" />
                        <span>Replaces dense tables with a sleek, card based dynamic catalog feed.</span>
                      </li>
  

                      <li key={1} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#db2777] flex-shrink-0 mt-0.5" />
                        <span>Integrates one swipe checkout sheets to bypass slow routing checks.</span>
                      </li>
  

                      <li key={2} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#db2777] flex-shrink-0 mt-0.5" />
                        <span>Highlights dynamic cart balance indicators on the main screen.</span>
                      </li>
  
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#db2777]/10 border border-[#db2777]/30 text-[#db2777] text-[9px] uppercase tracking-widest font-mono">
                    Overview Screen
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{"🛒 Dynamic Product Catalog"}</div>
                    <div className="text-[10px]">{"Filter: Near Me • Tech Deals • Wallet Balance: Rs. 14.5k"}</div>
                  </div>
                  
                      <div key={0} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">🎧 Wireless Headphones Pro</div>
                          <div className="text-[10px]">Status: In Stock • Noida Depot</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#db2777] text-xs">Price: Rs. 2,400</div>
                          <div>Action: Add to Cart</div>
                        </div>
                      </div>
  

                      <div key={1} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">⌚ Smartwatch Series 6</div>
                          <div className="text-[10px]">Status: 3 Left • Gurugram Depot</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#db2777] text-xs">Price: Rs. 4,800</div>
                          <div>Action: Add to Cart</div>
                        </div>
                      </div>
  
                  <div className="p-2.5 rounded-lg bg-[#db2777]/10 border border-[#db2777]/20 flex items-center justify-between text-foreground">
                    <span>Double Confirmation</span>
                    <span className="font-bold text-xs uppercase tracking-wider">{"Swipe to Purchase Items [══►]"}</span>
                  </div>
                </div>
              </div>
  
          </motion.div>
        </motion.div>

        {/* 6. THE DESIGN EVOLUTION */}
        

        {/* 7. THE SOLUTION DETAILS (DESIGN MOVES) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8 font-inter"
        >
          <motion.div variants={fadeInUp} className="w-full space-y-4">
            <span className="text-[#db2777] text-xs font-semibold tracking-widest uppercase block">Key Solution</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              Core Design Moves
            </h3>
            <p className="text-[20px] text-muted-foreground/80 leading-relaxed text-justify font-inter">
              A comprehensive deep dive into the operational breakthroughs engineered to bring low-cognitive friction, verified security, and seamless ease to this case study.
            </p>
          </motion.div>

          {/* DESIGN MOVE 1 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#db2777]/10 text-[#db2777] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#db2777]/20">01</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Sleek Catalog Feed
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#db2777]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  We replaced dry transaction tables with a beautiful, interactive spending feed showing daily cash flows and category tags.
                </p>
              </div>
              
              <div className="lg:col-span-5 flex items-center justify-center w-full">
                
                  <div className="h-28 border border-border/20 rounded-lg bg-card/30 p-2 flex items-end relative overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: "<svg className=\"w-full h-[70%] stroke-[#db2777] fill-none stroke-[2]\" viewBox=\"0 0 100 30\">\n                    <path d=\"M 0 25 Q 20 5, 40 20 T 80 5 T 100 15\" />\n                    <circle cx=\"40\" cy=\"20\" r=\"3\" className=\"fill-[#db2777] stroke-white stroke-[1]\" />\n                  </svg>" }} className="w-full" />
                  </div>
  
              </div>
            </div>
          </motion.div>

          {/* DESIGN MOVE 2 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#3EBAF4]/10 text-[#3EBAF4] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#3EBAF4]/20">02</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    One Swipe Checkout
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <Activity className="w-6 h-6 text-[#3EBAF4]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center font-inter">
              {/* Image Left */}
              <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                  <img 
                    src="undefined" 
                    alt="One Swipe Checkout" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-5 font-inter text-base md:text-[18px] text-muted-foreground/90 order-1 lg:order-2">
                <p className="text-justify font-inter">
                  Designed an interactive payment sliding sheet that executes product checkouts within sub seconds, avoiding sluggish page reloads.
                </p>
              </div>
            </div>
          </motion.div>

          {/* DESIGN MOVE 3 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8 font-inter">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#db2777]/10 text-[#db2777] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#db2777]/20">03</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Conversational Catalog AI
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <Bot className="w-6 h-6 text-[#db2777]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  Integrated an assistive chat helper inside the shopper app. Shoppers can ask 'What are the top tech deals today?' and receive instant feedback.
                </p>
              </div>
              
              <div className="lg:col-span-5 p-5 bg-[#0B0B0C] border border-border/30 rounded-2xl font-mono text-[10px] text-muted-foreground flex flex-col gap-3">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border/20 pb-2">📈 Merchant Sales Growth</span>
                
                <div dangerouslySetInnerHTML={{ __html: "<div className=\"h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30\">\n                  <div className=\"w-8 bg-[#db2777] rounded-t-sm\" style={{ height: \"45%\" }} />\n                  <div className=\"w-8 bg-[#eb3787] rounded-t-sm\" style={{ height: \"65%\" }} />\n                  <div className=\"w-8 bg-[#f34d98] rounded-t-sm\" style={{ height: \"85%\" }} />\n                  <div className=\"w-8 bg-muted rounded-t-sm\" style={{ height: \"35%\" }} />\n                </div>" }} />
  
                <div className="flex justify-between text-[8px] text-muted-foreground font-mono px-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 8. METRICS / WHAT CHANGED (IMPACT) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <span className="text-[#db2777] text-xs font-semibold tracking-widest uppercase block">Impact</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">What Changed Operationally</h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 w-full leading-relaxed text-justify font-inter">
              These outcomes represent the real-world operational changes and UX transformations achieved during our iterative product cycles. By putting user choice, accessibility, and smooth performance first, we converted a highly technical console into a self-serve portal.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            
              <motion.div 
                key={0} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#db2777]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#db2777] to-foreground bg-clip-text text-transparent">
                    35%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Lower Cart Abandonment
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Simplified form inputs into a single swipe double confirmation checkout drawer.
                    </p>
                  </div>
                </div>
              </motion.div>
  

              <motion.div 
                key={1} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#db2777]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#db2777] to-foreground bg-clip-text text-transparent">
                    1.2s
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Faster Catalog Search
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Implemented fuzzy search logic and local cache query loaders.
                    </p>
                  </div>
                </div>
              </motion.div>
  

              <motion.div 
                key={2} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#db2777]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#db2777] to-foreground bg-clip-text text-transparent">
                    100%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Real time Stock Updates
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      GraphQL metrics synced storefront product availability with zero latency.
                    </p>
                  </div>
                </div>
              </motion.div>
  
          </motion.div>
        </motion.div>

        {/* 9. LEARNINGS & TAKEAWAYS */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8 font-inter"
        >
          <motion.div variants={fadeInUp} className="w-full space-y-4">
            <span className="text-[#db2777] text-xs font-semibold tracking-widest uppercase block">Reflections</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              What This Project Changed For Me
            </h3>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="space-y-8 text-lg md:text-[20px] leading-relaxed text-muted-foreground/90 font-inter w-full"
          >
            <p className="text-lg md:text-[20px] font-light text-foreground leading-relaxed border-l-4 border-[#db2777] pl-6 italic text-justify w-full font-inter font-light">
              "Commerce UX is confidence UX. Fluid checkout loops build buyer trust."
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light pl-6 text-justify font-inter">
              By placing catalog filters directly onto the home screen and designing one swipe checkout drawer sheets, we helped users manage shopping baskets confidently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 w-full pl-6">
              
                <div key={0} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">01 / Explainability drives action</h4>
                  <p className="text-sm text-justify font-inter">Translated dry catalog codes into clear shipping status tags.</p>
                </div>
  

                <div key={1} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">02 / Design for decision moments</h4>
                  <p className="text-sm text-justify font-inter">Positioned buy buttons directly next to active wallet balances.</p>
                </div>
  
            </div>
          </motion.div>
        </motion.div>

        {/* 10. CALL TO ACTION */}
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 border-t border-border/20 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-inter"
        >
          <div>
            <h3 className="text-3xl font-bold font-space-grotesk tracking-tight uppercase">Let's craft the next operational breakthrough.</h3>
            <p className="text-muted-foreground mt-2 font-inter text-lg">Have a complex transactional workflow, multi-role portal, or data-dense dashboard to design?</p>
          </div>
          <Button 
            asChild 
            className="rounded-full px-8 py-6 text-base font-space-grotesk font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <Link href="mailto:timothy.ux@gmail.com">
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </div>
  )
}

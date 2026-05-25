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

export default function FeedzaaCaseStudy() {
  const [selectedRole, setSelectedRole] = useState<"buyer" | "seller">("buyer")

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
    <div className="min-h-screen bg-background text-foreground pb-8 transition-colors duration-500 selection:bg-[#DB3D1A]/20">
      {/* Global Page Tint Accent */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.15]" style={{ backgroundColor: "#DB3D1A" }} />
      
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#DB3D1A]/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#DB3D1A]/5 to-transparent blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            
            <div className="flex items-center -ml-4 h-16 sm:h-20 lg:h-24">
              <img
                src="/logos/Feedzaa.svg"
                alt="Feedzaa logo"
                className="block max-h-14 sm:max-h-16 lg:max-h-20 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[300px] object-contain dark:hidden"
              />
              <img
                src="/logos/Feedzaa.svg"
                alt="Feedzaa logo"
                className="hidden max-h-14 sm:max-h-16 lg:max-h-20 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[300px] object-contain dark:block"
              />
            </div>
  
          </motion.div>

          {/* Immersive Overview & Detailed Metadata Grid */}
          <div className="mt-12 pt-8 border-t border-border/20 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full text-lg md:text-[20px] font-light leading-relaxed text-foreground/90 font-inter space-y-4"
            >
              <span className="text-[#DB3D1A] text-xs font-semibold tracking-widest uppercase block">Overview</span>
              <p className="border-l-4 border-[#DB3D1A] pl-6 md:pl-8 italic text-justify font-inter leading-relaxed">
                Feedzaa helps home chefs run their entire food commerce operation without juggling multiple apps. Previously, chefs relied on disconnected tools like WhatsApp, spreadsheets, and standalone payment apps. This project was designed as a unified commerce system connecting customer ordering with direct kitchen execution and automated local rider dispatching.
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
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">3 Months (Spring 2025)</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Role</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Product Designer</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Platform</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Mobile Web & Kitchen App</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Tech Stack</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">React Native, Expo, Tailwind CSS, Stripe API</span>
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
            <span className="text-[#DB3D1A] text-xs font-semibold tracking-widest uppercase block">Operational Model / The Challenge</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight leading-tight">
              The Chaos of Backyard Kitchen Operations
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 leading-relaxed w-full text-justify font-inter">
              Home chefs are talented cooks but poor logistical coordinators. Managing active customer chats, menu planning, payment verification, and courier handoffs broke their day to day culinary focus.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 w-full pt-2">
            <div className="space-y-6 text-base md:text-[20px] leading-relaxed text-muted-foreground/80 font-inter">
              
                <div key={0} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    01 / Manual Order Trapping
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">WhatsApp orders were manually transcribed to paper or spreadsheets, causing delayed orders during rush hours.</p>
                </div>
  

                <div key={1} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    02 / Reconciling Bank Payments
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Chefs had to stop cooking to manually check bank apps for incoming transfers, causing delays and food spoilage.</p>
                </div>
  

                <div key={2} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    03 / Delivery Rider Disconnect
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">No unified delivery integration meant chefs spent hours call triage coordinating local couriers.</p>
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
            <span className="text-[#DB3D1A] text-xs font-semibold tracking-widest uppercase block">Operational Model / Reality</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight md:whitespace-nowrap">
              Two Roles, One Local Food Marketplace
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground w-full text-justify font-inter">
              We designed the Feedzaa marketplace around two distinct user groups who participate in the same local food network but operate under opposite time constraints.
            </p>
          </motion.div>

          
          {/* Interactive Role Switcher Selector Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center w-full">
            <div className="bg-[#0B0B0C]/80 backdrop-blur-md border border-border/40 p-1.5 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center max-w-md w-full shadow-2xl gap-1">
              <Button
                onClick={() => setSelectedRole("buyer")}
                variant="ghost"
                className={"flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 " + (
                  selectedRole === "buyer" 
                    ? "bg-[#DB3D1A] text-black font-semibold shadow-[0_4px_15px_rgba(0,230,115,0.25)] hover:bg-[#DB3D1A]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <Smartphone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">The Hungry Customer</span>
              </Button>
              <Button
                onClick={() => setSelectedRole("seller")}
                variant="ghost"
                className={"flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 " + (
                  selectedRole === "seller" 
                    ? "bg-[#DB3D1A] text-black font-semibold shadow-[0_4px_15px_rgba(31,208,180,0.25)] hover:bg-[#DB3D1A]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <Bot className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">The Home Chef</span>
              </Button>
            </div>
          </motion.div>
  

          {/* Role Showcase Display */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-card/30 border border-border/30 backdrop-blur-md"
          >
            
            {selectedRole === "buyer" ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[#DB3D1A]/10 text-[#DB3D1A]">
                      <Zap className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        The Hungry Customer (Discovery & Instant Checkout)
                      </h4>
                      <p className="text-xs text-[#DB3D1A] font-mono tracking-wider uppercase">Archetype: "High-Confidence"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    The Buyer wants to discover local home chefs and order food instantly without dealing with messy group chats or unverified links. The design optimizes for absolute checkout speed:
                  </p>
                  <ul className="space-y-3.5">
                    
                      <li key={0} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#DB3D1A] flex-shrink-0 mt-0.5" />
                        <span>Replaces confusing text broadcast menus with a visually stunning, image first local chef feed.</span>
                      </li>
  

                      <li key={1} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#DB3D1A] flex-shrink-0 mt-0.5" />
                        <span>Displays active chef kitchen status (e.g. 'Cooking Now', 'Pre order for dinner').</span>
                      </li>
  

                      <li key={2} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#DB3D1A] flex-shrink-0 mt-0.5" />
                        <span>Streamlines order creation into a sliding double confirmation checkout drawer.</span>
                      </li>
  
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#DB3D1A]/10 border border-[#DB3D1A]/30 text-[#DB3D1A] text-[9px] uppercase tracking-widest font-mono">
                    Overview Screen
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{"🍕 Discover Fresh Local Chefs"}</div>
                    <div className="text-[10px]">{"Filter: Near Me • Veg Only • Active Kitchen"}</div>
                  </div>
                  
                      <div key={0} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">🍝 Maria's Italian Kitchen</div>
                          <div className="text-[10px]">Status: Cooking Now • 1.2 miles</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#DB3D1A] text-xs">Rs. 180 / plate</div>
                          <div>8 portions left</div>
                        </div>
                      </div>
  

                      <div key={1} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">🥟 The Himalayan Dumpling</div>
                          <div className="text-[10px]">Status: Pre order for Dinner</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#DB3D1A] text-xs">Rs. 120 / plate</div>
                          <div>20 portions left</div>
                        </div>
                      </div>
  
                  <div className="p-2.5 rounded-lg bg-[#DB3D1A]/10 border border-[#DB3D1A]/20 flex items-center justify-between text-foreground">
                    <span>Double Confirmation</span>
                    <span className="font-bold text-xs uppercase tracking-wider">{"Swipe to Place Order [══►]"}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[#DB3D1A]/10 text-[#DB3D1A]">
                      <Bot className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        The Home Chef (Fulfillment & Yield Focus)
                      </h4>
                      <p className="text-xs text-[#DB3D1A] font-mono tracking-wider uppercase">Archetype: "Action-Oriented"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    The Chef wants to track incoming orders, schedule menus, and manage delivery riders with zero technical overhead. The design optimizes for cognitive simplicity during busy kitchen hours:
                  </p>
                  <ul className="space-y-3.5">
                    
                      <li key={0} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#DB3D1A] flex-shrink-0 mt-0.5" />
                        <span>Presents a dense, scannable kitchen queue (New, Preparing, Ready, Out) to prevent order mix ups.</span>
                      </li>
  

                      <li key={1} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#DB3D1A] flex-shrink-0 mt-0.5" />
                        <span>Integrates an automated local rider dispatch engine that triggers when food state is marked 'Ready'.</span>
                      </li>
  

                      <li key={2} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#DB3D1A] flex-shrink-0 mt-0.5" />
                        <span>Features real time earnings analytics showing today's margins and portion sales.</span>
                      </li>
  
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#DB3D1A]/10 border border-[#DB3D1A]/30 text-[#DB3D1A] text-[9px] uppercase tracking-widest font-mono">
                    Action Panel
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{"👩‍🍳 Kitchen Control Center"}</div>
                    <div className="text-[10px]">{"Session Status: Kitchen Active"}</div>
                  </div>
                  
                      <div key={0} className="p-2.5 rounded-lg bg-card/60 border border-border/30 text-[10px]">
                        <span className="font-bold text-foreground block mb-0.5">Order #1043 - Veg Lasagna</span>
                        State: Preparing • Time: 12 min • Rider: Assigned
                      </div>
  

                      <div key={1} className="p-2.5 rounded-lg bg-card/60 border border-border/30 text-[10px]">
                        <span className="font-bold text-foreground block mb-0.5">Order #1042 - Garlic Bread</span>
                        State: Ready • Time: 2 min • Rider: Arrived
                      </div>
  
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1.5 rounded-full border border-border/30 bg-card text-[9px] cursor-pointer">{"Mark Order Ready (↑)"}</span>
                  </div>
                </div>
              </div>
            )}
  
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
            <span className="text-[#DB3D1A] text-xs font-semibold tracking-widest uppercase block">Key Solution</span>
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
                <div className="w-11 h-11 rounded-full bg-[#DB3D1A]/10 text-[#DB3D1A] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#DB3D1A]/20">01</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Unified Kitchen Dashboard
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#DB3D1A]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  We consolidated WhatsApp chats, spreadsheets, and bank alerts into a single, scannable Kanban style kitchen control center. Order status updates trigger automated user push notifications and rider dispatch alerts.
                </p>
              </div>
              
              <div className="lg:col-span-5 flex items-center justify-center w-full">
                
                  <div className="h-28 border border-border/20 rounded-lg bg-card/30 p-2 flex items-end relative overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: "<svg className=\"w-full h-[70%] stroke-[#DB3E19] fill-none stroke-[2]\" viewBox=\"0 0 100 30\">\n                    <path d=\"M 0 25 Q 15 5, 30 10 T 60 20 T 90 5 T 100 25\" />\n                    <circle cx=\"30\" cy=\"10\" r=\"3\" className=\"fill-[#DB3E19] stroke-white stroke-[1]\" />\n                  </svg>" }} className="w-full" />
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
                    Frictionless Checkout
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
                    alt="Frictionless Checkout" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-5 font-inter text-base md:text-[18px] text-muted-foreground/90 order-1 lg:order-2">
                <p className="text-justify font-inter">
                  Designed a secure checkout sheet that automatically verifies bank deposits via instant webhooks. Customers get a verified order confirmation badge within seconds, without manual chef verification.
                </p>
              </div>
            </div>
          </motion.div>

          {/* DESIGN MOVE 3 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8 font-inter">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#DB3D1A]/10 text-[#DB3D1A] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#DB3D1A]/20">03</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Conversational AI Helper
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <Bot className="w-6 h-6 text-[#DB3D1A]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  Integrated a conversational AI bot directly inside the chef dashboard to assist with daily menu pricing. Chefs can ask 'How much did I earn today?' and get a breakdown of top-selling dishes and dynamic margins.
                </p>
              </div>
              
              <div className="lg:col-span-5 p-5 bg-[#0B0B0C] border border-border/30 rounded-2xl font-mono text-[10px] text-muted-foreground flex flex-col gap-3">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border/20 pb-2">📈 Weekly Revenue Trend</span>
                
                <div dangerouslySetInnerHTML={{ __html: "<div className=\"h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30\">\n                  <div className=\"w-8 bg-[#DB3E19] rounded-t-sm\" style={{ height: \"45%\" }} />\n                  <div className=\"w-8 bg-[#E55734] rounded-t-sm\" style={{ height: \"70%\" }} />\n                  <div className=\"w-8 bg-[#F07A5A] rounded-t-sm\" style={{ height: \"85%\" }} />\n                  <div className=\"w-8 bg-muted rounded-t-sm\" style={{ height: \"35%\" }} />\n                </div>" }} />
  
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
            <span className="text-[#DB3D1A] text-xs font-semibold tracking-widest uppercase block">Impact</span>
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#DB3D1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#DB3D1A] to-foreground bg-clip-text text-transparent">
                    60%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Faster Order Prep Time
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Consolidated WhatsApp orders into a single live kitchen dashboard, reducing errors.
                    </p>
                  </div>
                </div>
              </motion.div>
  

              <motion.div 
                key={1} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DB3D1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#DB3D1A] to-foreground bg-clip-text text-transparent">
                    42%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Reduced Checkout Friction
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Simplified customer payments through integrated one click UPI checkouts.
                    </p>
                  </div>
                </div>
              </motion.div>
  

              <motion.div 
                key={2} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DB3D1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#DB3D1A] to-foreground bg-clip-text text-transparent">
                    3x
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Increase in Weekly Orders
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Automated recurring orders let customers subscribe to their favorite chefs easily.
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
            <span className="text-[#DB3D1A] text-xs font-semibold tracking-widest uppercase block">Reflections</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              What This Project Changed For Me
            </h3>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="space-y-8 text-lg md:text-[20px] leading-relaxed text-muted-foreground/90 font-inter w-full"
          >
            <p className="text-lg md:text-[20px] font-light text-foreground leading-relaxed border-l-4 border-[#DB3D1A] pl-6 italic text-justify w-full font-inter font-light">
              "This project taught me that unifying tools isn't enough; you must unify how people think and talk about their business."
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light pl-6 text-justify font-inter">
              Home chefs didn't think in terms of 'inventory APIs' or 'payment corridors'. They thought in terms of 'plates prepared' and 'getting paid'. Aligning our design language with their mental models was the single biggest driver of adoption.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 w-full pl-6">
              
                <div key={0} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">01 / Speaks the user's language</h4>
                  <p className="text-sm text-justify font-inter">Renamed complex payment terms to everyday home cooking metaphors.</p>
                </div>
  

                <div key={1} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">02 / Inclusive UX bridges gaps</h4>
                  <p className="text-sm text-justify font-inter">Designed simplified touch targets for chefs who manage screens while cooking.</p>
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

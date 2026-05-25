"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot, Smartphone, ChartBar, BatteryCharging, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NetworkCaseStudy() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 font-inter">
      {/* FLOATING BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-border/40 hover:bg-foreground/5 shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer transition-colors duration-300">
          <Link href="/#work">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
        </Button>
      </div>

      <main className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 pt-[48px] space-y-[24px]">
        {/* HEADER & OVERVIEW */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-12"
        >
          <div className="space-y-6">
            
            <div className="flex items-center -ml-4 h-16 sm:h-20 lg:h-24">
              <img
                src="/logos/network.svg"
                alt="Iris Network logo"
                className="block max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:hidden"
              />
              <img
                src="/logos/network.svg"
                alt="Iris Network logo"
                className="hidden max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Charge Station Management System designed to help Charge Point Operators manage and monitor EV charging operations from a single platform.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              The goal of the platform was to simplify charging operations for both operators and EV drivers while improving visibility, accessibility, and ease of use across the entire charging journey. The ecosystem includes a web platform for operational management and a mobile application that allows EV users to start charging sessions by scanning a QR code or entering the Charger Point ID (CPID).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">3 Months</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">Lead UI/UX Designer</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">Web Dashboard & Mobile App</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Node.js</Badge>
              </div>
            </div>
          </div>
        </motion.section>

        {/* THE IMPACT */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#32B34F" }}>3x</div>
              <h4 className="font-bold text-foreground">Faster Incident Monitoring</h4>
              <p className="text-sm text-muted-foreground">Real-time session visibility allowed operators to identify ongoing issues in seconds instead of manually checking multiple records.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#32B34F" }}>50%</div>
              <h4 className="font-bold text-foreground">Reduced Mobile Friction</h4>
              <p className="text-sm text-muted-foreground">Faster QR scanning and easier CPID entry made charging simple and stress-free for first-time EV users.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#32B34F" }}>100%</div>
              <h4 className="font-bold text-foreground">Unified Dashboard Control</h4>
              <p className="text-sm text-muted-foreground">Consolidated live charger status, active sessions, and revenue into a clear, prioritized hierarchy.</p>
            </div>
          </div>
        </motion.section>

        {/* THE PROBLEM */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Challenge</h3>
          <p className="text-xl text-foreground font-medium leading-relaxed">
            Managing EV charging infrastructure involves multiple workflows happening at the same time. The biggest challenge was reducing operational complexity while making the entire experience feel intuitive and stress-free.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Scattered Information & Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Important information was scattered across different sections. Monitoring charging sessions required too many steps, and users struggled to identify charger status quickly.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Complicated Reporting Workflows
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Finance and reporting workflows felt complicated for non-technical users. Customer management lacked clarity and easy accessibility.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Intimidating Mobile Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Mobile users faced friction while starting charging sessions. First-time EV users found the entire charging process confusing and difficult to navigate.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* THE PROCESS & REALITY */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Process & Operational Reality</h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            We designed the CSMS to serve Charge Point Operators monitoring high-level station health, and EV Drivers executing seamless charging sessions on their mobile devices.
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="border-t-4 border-t-[#32B34F] bg-card/40">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#32B34F]"></span>
                  <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Charge Point Operator (CPO)</h4>
                </div>
                <h4 className="font-bold text-lg">Monitoring & Control Focus</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">The Operator tracks sessions, manages finances, and handles support without feeling overwhelmed. The web dashboard optimizes for fast visibility:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Simplifies dashboards by prioritizing live charger status, revenue overview, and alerts.</li>
                  <li>Provides real-time charging session timelines with clear states (Available, Charging, Faulted).</li>
                  <li>Consolidates unified customer profiles and simplifies financial report generation.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#3EBAF4] bg-card/40">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#3EBAF4]"></span>
                  <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">EV Driver / Mobile User</h4>
                </div>
                <h4 className="font-bold text-lg">Frictionless Initiation Focus</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">The Driver wants to start charging their vehicle with zero friction. The mobile app optimizes for confidence and simplicity:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Streamlines the initiation process with faster QR scanning and easy CPID entry.</li>
                  <li>Displays clear, predictable charging instructions and status visibility.</li>
                  <li>Provides a clean, familiar interface consistent with the overall brand design language.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* THE SOLUTION */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">Key Solutions</h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            A comprehensive deep dive into the operational breakthroughs engineered to bring low-cognitive friction, operational clarity, and seamless ease.
          </p>

          <div className="space-y-12 mt-8">
            
            <div className="space-y-6">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#32B34F]"></span> Charge Point Operator (Web)
              </h4>
              <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#32B34F" }}>
                <CardContent className="p-6 grid gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Dense and scattered operational data</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Simplified Dashboard Experience</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Instead of overwhelming users with dense tables, the interface prioritizes live charger status, active sessions, and revenue. Clear visual hierarchy helped operators identify problems instantly without navigating multiple screens.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 bg-card/40">
                <CardContent className="p-6 grid gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Complex finance workflows for non-technical users</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ChartBar className="w-4 h-4"/> Better Finance & Reporting Experience</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Financial workflows were simplified to improve readability. By focusing on easy-to-understand summaries, visual representation of revenue, and faster access to downloadable reports, non-technical users could confidently access insights.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col space-y-12 pt-8 items-center">
                <div className="w-full flex justify-center">
                  <img src="/network/web1.png" alt="Iris Network Web Dashboard" className="w-full max-w-5xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl" />
                </div>
                <div className="w-full flex justify-center">
                  <img src="/network/web2.png" alt="Iris Network Web Finance" className="w-full max-w-5xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl" />
                </div>
                <div className="w-full flex justify-center">
                  <img src="/network/web3.png" alt="Iris Network Web Reporting" className="w-full max-w-5xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3EBAF4]"></span> EV Driver (Mobile)
              </h4>
              <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40">
                <CardContent className="p-6 grid gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">First-time EV user confusion</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Smartphone className="w-4 h-4"/> Improved Mobile Charging Experience</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">The mobile app experience was redesigned to reduce friction. Improvements included faster QR scanning, easier CPID entry, clear instructions, and cleaner payment feedback, making it less intimidating for drivers.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="w-full pt-8 flex justify-center">
                <img src="/network/network_mob.png" alt="Iris Network Mobile Experience" className="w-full max-w-4xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl" />
              </div>
            </div>
            
          </div>
        </motion.section>

        {/* LEARNINGS */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">Learnings</h3>
          
          <div className="p-8 bg-muted/30 rounded-2xl border border-border/50">
            <p className="text-2xl font-light text-foreground leading-relaxed italic text-center mb-8">
              "Network was redesigned with a strong focus on usability, operational clarity, and customer convenience. Simplifying complex workflows evolved the platform into a more intuitive EV charging ecosystem."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Designing for Operational Simplicity</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Users managing charging infrastructure often work under pressure. Simplifying workflows had a major impact on usability and confidence.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Clarity {" > "} Feature Density</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Adding more information does not always improve the experience. Prioritizing the right information at the right moment significantly improved usability.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">First-Time User Experience is Critical</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Many EV users are still new to public charging systems. Reducing confusion during the charging process helped build trust in the product.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Consistency Builds Confidence</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Maintaining a consistent interaction pattern across web and mobile experiences helped users navigate the platform more comfortably.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CALL TO ACTION */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="pt-16 pb-24 text-center space-y-6 border-t border-border/30"
        >
          <h3 className="text-3xl font-bold font-space-grotesk tracking-tight uppercase">Let's craft the next operational breakthrough.</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Have a complex transactional workflow, multi-role portal, or data-dense dashboard to design?</p>
          <div className="pt-4">
            <Button size="lg" className="rounded-full px-8 text-base" asChild>
              <Link href="mailto:timothy.ux@gmail.com">
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.section>

      </main>
    </div>
  )
}

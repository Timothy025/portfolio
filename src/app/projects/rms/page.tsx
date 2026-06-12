"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RmsCaseStudy() {
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
                src="/logos/Planet 3_light.svg"
                alt="Planet3 RMS logo"
                className="block max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:hidden"
              />
              <img
                src="/logos/Planet 3_dark.svg"
                alt="Planet3 RMS logo"
                className="hidden max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Planet3 RMS Charger Details - UX Case Study: turning complex charger behavior into a simple decision-support screen.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              This case study focuses on the Charger Details experience in the Planet3 Remote Management System, created from scratch to help teams monitor and manage EV chargers with clarity. The goal was to create a practical, user-friendly experience for operations teams, service teams, site managers, and business stakeholders. Instead of simply displaying data, the product explains condition and highlights next actions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">2023 - 2024</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">Business Analyst & Product Owner</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">Web Application</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Product Requirements</Badge>
                <Badge variant="secondary">Jira</Badge>
                <Badge variant="secondary">UX Strategy</Badge>
                <Badge variant="secondary">Systems Analysis</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#EC008C" }}>100%</div>
              <h4 className="font-bold text-foreground">Decision Focus</h4>
              <p className="text-sm text-muted-foreground">Designed the experience around actionable insights rather than raw data.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#EC008C" }}>1st</div>
              <h4 className="font-bold text-foreground">Overview Priority</h4>
              <p className="text-sm text-muted-foreground">Placed key health indicators at the top for immediate understanding.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#EC008C" }}>Clear</div>
              <h4 className="font-bold text-foreground">Mental Model</h4>
              <p className="text-sm text-muted-foreground">Separated charger-level from connector-level information.</p>
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
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Problem</h3>
          <p className="text-xl text-foreground font-medium leading-relaxed">
            An EV charger produces live status, connector availability, sessions, alerts, and maintenance needs. The biggest challenge was organizing this into a clear, usable product experience.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Information Overload
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Understanding what charger information matters most to users to avoid data-heavy screens.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Complex Relationships
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Defining how charger status, connector status, alerts, sessions, and maintenance connect.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Varied User Contexts
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Creating a clear structure for users with different levels of responsibility (monitoring vs troubleshooting).
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
            As a BA and Product Owner, I bridged the gap between how the charger communicates with the system and how users expect to experience that information.
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg">Operations Teams</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Operations teams need a quick understanding of whether the charger is working well or needs attention:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Requires overview-first experience to assess overall health.</li>
                  <li>Needs to identify faults, warnings, and service needs immediately.</li>
                  <li>Benefits from simple status language without deep technical detail.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg">Service Teams</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Service teams need to understand exactly what is failing and why. The experience supports deeper troubleshooting:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Separates charger health from connector-level performance.</li>
                  <li>Groups sessions, alerts, and maintenance to support workflows.</li>
                  <li>Creates a clear flow from 'What is happening?' to 'What should I check next?'</li>
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
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Solution</h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            A comprehensive deep dive into the operational breakthroughs engineered to bring low-cognitive friction, verified security, and seamless ease.
          </p>

          <div className="space-y-6 mt-8">
            
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#EC008C" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Prioritizing key health indicators</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Overview-First Experience</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">The experience starts with the most important information: energy delivered, successful sessions, faulted sessions, charger health, connection status, and service details.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Contextualizing the physical charger</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Visual Health View</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Important details are placed around the charger image. This helps users connect information to the physical charger and makes the experience much easier to scan.</p>
                </div>
              </CardContent>
            </Card>

            
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Charger vs. Connector Information</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Separating Contexts</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Separating charger-level information (overall machine) from connector-level information (individual ports) creates a clearer mental model and reduces confusion.</p>
                </div>
              </CardContent>
            </Card>
            
          </div>

          <div className="space-y-12 md:space-y-16 mt-12 md:mt-16 pt-8">
            <div className="">
              <img src="/rms/dashboard.png" alt="RMS Dashboard Overview" className="w-full h-auto object-contain" />
            </div>
            <div className="">
              <img src="/rms/charger.png" alt="RMS Charger Visual Health" className="w-full h-auto object-contain" />
            </div>
            <div className="">
              <img src="/rms/alerts.png" alt="RMS Alerts and Connector Information" className="w-full h-auto object-contain" />
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
              "A strong product experience starts with understanding the system, but becomes valuable only when translated into a clear user journey."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              By defining the experience from a product owner perspective, the page became more than a data view. It became a decision-support screen that guides meaningful action.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Product clarity begins with system behavior</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Learning how the charger communicates helped define what users should see.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Prioritize user needs over available data</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">A Product Owner needs to prioritize what users need first, not just what data is available.</p>
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

"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Pickaxe, Trophy, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WitnessChainCaseStudy() {
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
                src="/logos/witnesschain.svg"
                alt="WitnessChain logo"
                className="block max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:hidden"
              />
              <img
                src="/logos/witnesschain.svg"
                alt="WitnessChain logo"
                className="hidden max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              A crypto-based mobile platform that allows users to mine digital tokens directly through their mobile devices.
            </h2>
          </div>

          <div className="w-full mt-4 flex justify-center">
            <img 
              src="/witnesschain.png" 
              alt="WitnessChain App Mockup" 
              className="w-full max-w-4xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl"
            />
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              The platform rewards users with tokens, gifts, and incentives based on their activity and participation. The original application felt outdated, visually inconsistent, and difficult for new users to understand. The redesign focused on transforming a technically heavy experience into a simple, engaging, and modern product that users could interact with confidently every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">3 Months</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">Lead UX/UI Designer</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">Mobile App</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Focus</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Gamification</Badge>
                <Badge variant="secondary">Crypto</Badge>
                <Badge variant="secondary">Onboarding</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#7CFF92" }}>3x</div>
              <h4 className="font-bold text-foreground">Faster Onboarding</h4>
              <p className="text-sm text-muted-foreground">Easier understanding of the mining process drastically reduced the friction for new users.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#7CFF92" }}>50%</div>
              <h4 className="font-bold text-foreground">Higher Engagement</h4>
              <p className="text-sm text-muted-foreground">Increased visibility of rewards and incentives led to more engaging daily interactions.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#7CFF92" }}>100%</div>
              <h4 className="font-bold text-foreground">Visual Modernization</h4>
              <p className="text-sm text-muted-foreground">Improved visual consistency across the entire application elevated product perception.</p>
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
            Crypto platforms can easily feel intimidating. The existing application struggled to retain users because the experience was disconnected, technically heavy, and visually outdated.
          </p>
          
          <div className="grid gap-4 mt-8">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Complex Mining Flows
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                The mining process was difficult to understand for new users. Important actions lacked visibility, leaving users confused about how to actually start earning tokens.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Invisible Rewards
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Reward systems were not clearly communicated, and users struggled to track their mining progress. This lack of feedback severely damaged daily motivation and retention.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Outdated UI & Clutter
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                The interface felt visually outdated and the navigation was cluttered, preventing the product from feeling like a modern, trustworthy premium crypto application.
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
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Process & Archetypes</h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            We focused on addressing the cognitive load for two distinct phases of the user journey: the initial learning curve, and long-term daily retention.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="h-full border-t-4 bg-card/40 hover:bg-card/60 transition-colors" style={{ borderTopColor: "#7CFF92" }}>
              <CardContent className="p-6 space-y-4">
                <Badge variant="secondary" className="mb-2 bg-muted text-muted-foreground hover:bg-muted font-space-grotesk tracking-wider">FIRST-TIME USER</Badge>
                <h4 className="font-bold text-xl text-foreground font-space-grotesk">Approachability Focus</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">New users needed to understand how to mine without getting overwhelmed by crypto terminology. The design optimizes for simplicity:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Created a smoother onboarding flow with a simplified navigation structure.</li>
                  <li>Highlighted a clear "Start Mining" action to instantly clarify the core app loop.</li>
                  <li>Provided simple feedback on mining states (active, paused, completed).</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full border-t-4 bg-card/40 hover:bg-card/60 transition-colors" style={{ borderTopColor: "#A855F7" }}>
              <CardContent className="p-6 space-y-4">
                <Badge variant="secondary" className="mb-2 bg-muted text-muted-foreground hover:bg-muted font-space-grotesk tracking-wider">ACTIVE MINER</Badge>
                <h4 className="font-bold text-xl text-foreground font-space-grotesk">Gamification Focus</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Returning users needed a reason to open the app every day. The design optimizes for emotional reward:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Introduced clear token reward tracking and milestone celebrations.</li>
                  <li>Added daily motivation elements and better visibility of gifts and incentives.</li>
                  <li>Designed real-time progress indicators to show live token generation.</li>
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
            A comprehensive look at the design decisions that transformed a technically heavy application into a fun, rewarding daily habit.
          </p>

          <div className="space-y-6 mt-8">
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#7CFF92" }}>
              <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Confusing interaction loops</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Pickaxe className="w-4 h-4"/> Redesigned Mining Experience</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">The mining flow was completely simplified. We reduced interaction friction by creating clear "Start Mining" visibility, real-time progress indicators, and easily understandable mining states so users knew exactly when they were generating value.</p>
                  </div>
                </div>
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                    <img src="/witness/1.png" alt="Redesigned Mining Experience" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#F59E0B] bg-card/40 mt-6">
              <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                    <img src="/witness/2.png" alt="Reward Visibility & Gamification" className="w-full h-auto object-contain" />
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Poor user motivation and retention</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Trophy className="w-4 h-4"/> Reward Visibility & Gamification</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Rewards became the core engagement element. We added better visualization of earned tokens, highlight boxes for gifts, and celebration moments for milestones. Making progress highly visible created a stronger sense of achievement and a community-driven feel.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Low trust and perceived value</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Smartphone className="w-4 h-4"/> Modernized User Interface</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">We overhauled the outdated interface with cleaner layouts, improved typography hierarchy, and a strong dark-theme experience. The app now feels immersive, premium, and aligned with modern crypto standards, drastically improving user trust.</p>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                    <img src="/witness/3.png" alt="Modernized UI View 1" className="w-full h-auto object-contain" />
                  </div>
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                    <img src="/witness/4.png" alt="Modernized UI View 2" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </CardContent>
            </Card>
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
              "Simplifying interactions and presenting information clearly helped make the product feel more trustworthy and accessible."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Simplicity Builds Trust</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Crypto platforms can easily overwhelm users. Reducing complexity was crucial in making the platform feel safer and more approachable.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Visibility Drives Engagement</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">When users could clearly see their mining progress and rewards, engagement naturally increased. Visual feedback played a major role in motivating users.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Emotional Design Matters</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Adding excitement through rewards, milestones, and cleaner visuals made the experience feel more enjoyable and less like a transactional chore.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Modern UI Improves Perception</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">The redesign showed how a refined and consistent interface can significantly improve how users perceive the overall value and credibility of a platform.</p>
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
          <h3 className="text-3xl font-bold font-space-grotesk tracking-tight uppercase">Let's craft the next breakthrough.</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Have a complex transactional workflow, multi-role app, or data-dense product to design?</p>
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

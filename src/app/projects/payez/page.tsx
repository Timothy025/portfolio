"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, Users, Settings, TrendingUp, Search, ArrowRight, FileText, Activity, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

export default function PayEZCaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const infoArchitecture = [
    {
      title: "Unified Gateway",
      description: "Unified UPI and crypto blockchain checkout panel",
      icon: CreditCard,
      features: ["Active UPI QR Scanners", "Web3 Multi-Chain Connectors", "Direct Fee Calculators", "Real-Time Exchange Indexes"]
    },
    {
      title: "KYC Compliance",
      description: "Account registration and secure compliance checks",
      icon: Users,
      features: ["Face-Scan Identification", "Govt ID Upload Wizards", "AML Transaction Auditing", "Account Setting Cards"]
    },
    {
      title: "Transaction Ledger",
      description: "Comprehensive deposit logs and receipt builders",
      icon: FileText,
      features: ["Live Session Histograms", "Unified Billing Invoices", "Tax Exporter Tools", "Audit Summary Generators"]
    },
    {
      title: "Security Shield",
      description: "Advanced anti-fraud controls and parameters",
      icon: Shield,
      features: ["Fraud Scoring Engines", "Biometric Authentication", "Private Key Guardrails", "Multi-Sig Settlement Logs"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Partnerships VP & FinTech Director",
      focus: "Expanding merchant onboarding networks, maximizing payment success metrics, and maintaining strict regulatory compliance."
    },
    {
      role: "Operations Operators",
      title: "Merchant Retailers & Accounting Admins",
      focus: "Require clean web consoles to view daily payouts, verify client payments, and manage refunds easily."
    },
    {
      role: "Engineering Team",
      title: "Web3 Protocol Developers & API Devs",
      focus: "Need standardized mobile mockups, detailed token assets, and clean layouts to bind multi-chain websocket connections."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Glowing Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,105,216,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,23,83,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group">
              <Link href="/projects" className="flex items-center gap-2">
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.div>
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#4A69D8]/30">
                Unified Payment Gateway
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-white via-[#4A69D8] to-[#6366F1] bg-clip-text text-transparent">
                PayEZ
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Designing intuitive mobile checkouts, anti-fraud shields, and multi-chain transaction consoles for digital commerce.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">UPI + Web3</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">FinTech UX</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Secure Checkout</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Figma</Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/20 border border-white/5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
            </motion.div>

            {/* OVERVIEW TAB */}
            <TabsContent value="overview" className="space-y-12">
              {/* Project Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <CreditCard className="w-8 h-8 text-[#4A69D8]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      PayEZ is an innovative unified payment gateway designed to bridge traditional fiat banking and modern cryptocurrency networks. Built to eliminate the friction in Web3 checkouts, it enables digital merchants to offer UPI and multi-chain tokens on a single interface.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By designing intuitive, mobile-first checkout screens, secure identity verification wizards, and comprehensive transaction consoles, we enabled retailers to accept dynamic multi-channel payments cleanly and safely.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Designer's Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Designer&apos;s Impact & Contributions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      As the sole product designer, I led user testing cycles with merchants and customers, established extensive visual design guidelines, and constructed the interactive layout framework in Figma.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full mt-2" />
                            Designed unified checkout layouts featuring active UPI and crypto tabs.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full mt-2" />
                            Simplified complex KYC Gov validation uploads for retail users.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full mt-2" />
                            Optimized anti-fraud alert states, keeping support dispatch times low.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full mt-2" />
                            Conducted remote user testing with 15 active digital merchants.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2" />
                            High-fidelity interactive mobile prototype in Figma.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2" />
                            Pre-packaged UI assets library (payment tabs, security indicators, billing logs).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2" />
                            Detailed payment coordinator blueprints and journey maps.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2" />
                            Figma variables sheet and typography layout parameters.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stakeholders Matrix */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-center">Collaborative Stakeholder Matrix</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stakeholders.map((stakeholder, i) => (
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#4A69D8]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#4A69D8]/30 text-[#4A69D8]">{stakeholder.role}</Badge>
                        <CardTitle className="text-xl font-bold">{stakeholder.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.focus}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Problem & Solution High-Contrast Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <Card className="border border-red-500/20 bg-red-950/5 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-400 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6" />
                      Transaction Friction (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Merchants were forced to host separate layout checkout forms for standard banking and Web3 wallets. Customers struggled with payment wallet connection alerts, resulting in major transaction drop-offs.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This fragmented experience caused high checkout drop-offs, poor reconciliation data, and severe merchant anxiety.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-emerald-500/20 bg-emerald-950/5 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Scalable Resolutions (The Solution)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We developed an integrated double-sided payment portal. Customers easily toggle checkouts between standard UPI tabs and multi-chain tokens, while merchants audit payouts cleanly.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By designing intuitive layout tabs and unified transaction ledgers, we increased merchant payment success metrics by 65% and simplified accounting workflows completely.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Screenshots Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center text-white">PayEZ Mobile Experience</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-[280px]"
                  >
                    <img
                      src="/payez.png"
                      alt="PayEZ Mobile Interface"
                      className="w-full h-auto object-cover rounded-xl border border-white/10"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* ARCHITECTURE TAB */}
            <TabsContent value="architecture" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Activity className="w-8 h-8 text-[#4A69D8]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for checkout confidence, compliance, ledger review, and payment safety.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="PayEZ"
                      rootDescription="Unified gateway, compliance, transaction records, and payment security"
                      sections={infoArchitecture}
                      primaryColor="#4A69D8"
                      secondaryColor="#6366F1"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">Merchant Checkout Journey</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#4A69D8]/20 rounded-lg text-sm text-white border border-[#4A69D8]/30">Scan Active UPI / Wallet</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#4A69D8]/20 rounded-lg text-sm text-white border border-[#4A69D8]/30">Calculate Transaction Fees</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#4A69D8]/20 rounded-lg text-sm text-white border border-[#4A69D8]/30">Biometric Secure Verify</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#6366F1]/20 rounded-lg text-sm text-white border border-[#6366F1]/30">Completed Ledger Settlement</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* PROCESS TAB */}
            <TabsContent value="process" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Settings className="w-8 h-8 text-[#4A69D8]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw blockchain nodes and checkout inputs into an elegant payment flow.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#4A69D8] flex items-center gap-2">
                          <Badge className="bg-[#4A69D8]/20 text-[#4A69D8]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by shadowing small retailers in active commercial centers. We noticed they spent too much time manually writing out ledger entries and dealing with checkout errors rather than processing payments.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4A69D8]" />
                            Conducted merchant shadowing sessions during business hours.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4A69D8]" />
                            Analyzed historical checkout logs to map payment drop-offs.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4A69D8]" />
                            Identified security friction points in web wallet connectors.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#6366F1] flex items-center gap-2">
                          <Badge className="bg-[#6366F1]/20 text-[#6366F1]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed clean checkout tabs, value charts, and secure status dials. We prioritized high-contrast blue status indicators so merchant clerks could check payouts instantly.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#6366F1]" />
                            Built high-density custom state tables in dark theme layouts.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#6366F1]" />
                            Mocked interactive diagnostics charts in Figma with energy site managers.
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 w-4 h-4 text-[#6366F1] flex-shrink-0" />
                            Refined color severity states for accessible status viewing.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Developer Collaboration */}
                    <div className="space-y-6 pt-6 border-t border-white/5">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Badge className="bg-emerald-500/20 text-emerald-400">Phase 3</Badge>
                        Engineering Handoff & Collaboration
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        To guarantee high fidelity implementation of payment portals, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to blockchain nodes.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Figma Spec Sync</h5>
                          <p className="text-xs text-muted-foreground mt-1">Clean grid layouts matching CSS flex/grid rules perfectly.</p>
                        </div>
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Scheduler Token Library</h5>
                          <p className="text-xs text-muted-foreground mt-1">Color, spacing, and transition constants for components.</p>
                        </div>
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Real-time Data Map</h5>
                          <p className="text-xs text-muted-foreground mt-1">Direct mockups mapping websocket inputs to UI triggers.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

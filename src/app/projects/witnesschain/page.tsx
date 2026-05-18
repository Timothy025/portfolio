"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Zap, Coins, Users, Star, Settings, Activity, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

export default function WitnessChainCaseStudy() {
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

  const informationArchitecture = [
    {
      title: "Mining Console",
      description: "Passive data validation and active miner controls",
      icon: Zap,
      features: ["Active Mining Toggles", "Live Speed Gauges", "Current Telemetry Logs", "Total Validated Counts"]
    },
    {
      title: "Rewards Ledger",
      description: "Real-time token payouts and secure wallet integrations",
      icon: Coins,
      features: ["Active Token Counters", "Gas Fee Rate Dials", "Wallet Sync Panels", "Claim History Invoices"]
    },
    {
      title: "Activity Hub",
      description: "Validation log histories and validator progression levels",
      icon: Activity,
      features: ["Historical Validations", "Reward Settlement Logs", "Node Rank Progress", "Daily Performance Trends"]
    },
    {
      title: "Profile Directory",
      description: "Cryptographic wallet management and console settings",
      icon: Users,
      features: ["Authenticated Keys", "Dark Mode Configs", "Backup Phrase Vaults", "Node Health Checkers"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Network Architects & Web3 Growth leads",
      focus: "Maximizing active validator counts, securing network integrity, and guaranteeing low-friction token transactions."
    },
    {
      role: "Operations Operators",
      title: "Passive Node Miners & Validators",
      focus: "Require an absolute simple interface to activate mining toggles, monitor speeds, and claim rewards."
    },
    {
      role: "Engineering Team",
      title: "Smart Contract & Protocol Developers",
      focus: "Need standard mobile wireframes, detailed state models, and unified styles to bind ledger parameters directly."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,255,146,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.1),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#7CFF92]/30">
                Web3 Validator Console
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#7CFF92] via-emerald-400 to-[#7CFF92] bg-clip-text text-transparent">
                WitnessChain
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Mine. Play. Earn. – Passive validation consoles made playable for the next billion Web3 users.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Passive Validation</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Gamified Web3</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">DePIN Node</Badge>
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
                      <Zap className="w-8 h-8 text-[#7CFF92]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      WitnessChain is a Web3 gamified mobile mining rewards app built to secure DePIN networks. Users easily contribute validation capacity by toggling a mining switch, receiving cryptocurrency tokens passively based on their node activity.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By designing intuitive, interactive glow switches, visual token counters, and clean wallet synchronization flows, we simplified Web3 complexities into a delightful gamified experience.
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
                      I led the complete UI/UX process for WitnessChain, focusing on gamifying validator dashboards, designing satisfying key activation states, and standardizing component guides for blockchain engineering handoffs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2" />
                            Simplifying complex Web3 nodes into satisfying tactile toggles.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2" />
                            Designed a gorgeous neon dark layout with active status glows.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2" />
                            Constructed streamlined wallet connect and claim flow states.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2" />
                            Conducted testing cycles with 20 active crypto miners.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                            Tactile glowing toggles and active state dial mockups in Figma.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                            Comprehensive visual token components and wallet modal blueprints.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                            Validator user blueprints and feedback matrices.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
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
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#7CFF92]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#7CFF92]/30 text-[#7CFF92]">{stakeholder.role}</Badge>
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
                      Validation Friction (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Running standard validation nodes required entering cryptic CLI terminal scripts, installing specialized hardware, or tracking gas configurations manually. This isolated non-technical users from participating in the network.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This lack of visual interfaces created a severe barrier, preventing network expansion and active community growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-emerald-500/20 bg-emerald-950/5 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Playable Abstractions (The Solution)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We developed a gamified console mobile experience. Users download the app, authenticate cryptographic wallets instantly, and toggle a satisfying glowing mining dial to validate passive capacity.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By designing gamified ranks, visual dials, and clear payout ledgers, we expanded active miners by 300% and made Web3 DePIN access incredibly simple.
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
                <h3 className="text-2xl font-bold text-center text-white">WitnessChain Console Visuals</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl"
                  >
                    <img
                      src="/witnesschain.png"
                      alt="WitnessChain Interface Console"
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
                      <Activity className="w-8 h-8 text-[#7CFF92]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for wallet setup, mining control, reward clarity, and profile trust.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="WitnessChain"
                      rootDescription="Mining control, rewards, validation activity, and wallet profile"
                      sections={informationArchitecture}
                      primaryColor="#7CFF92"
                      secondaryColor="#34D399"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">Passive Validation Lifecycle Journey</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#7CFF92]/20 rounded-lg text-sm text-white border border-[#7CFF92]/30">Connect Web3 Wallet</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#7CFF92]/20 rounded-lg text-sm text-white border border-[#7CFF92]/30">Toggle Glowing Miner Switch</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#7CFF92]/20 rounded-lg text-sm text-white border border-[#7CFF92]/30">Validate DePIN Node Capacity</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-emerald-500/20 rounded-lg text-sm text-white border border-emerald-500/30">Accumulate & Claim Crypto Tokens</div>
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
                      <Settings className="w-8 h-8 text-[#7CFF92]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw smart contracts and mining logs into a high-satisfaction game.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#7CFF92] flex items-center gap-2">
                          <Badge className="bg-[#7CFF92]/20 text-[#7CFF92]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by interviewing active validators in Web3 communities. We noticed they wanted to earn network tokens but hated navigating complex node-command lines.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#7CFF92]" />
                            Conducted remote user testing with 20 active node validators.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#7CFF92]" />
                            Analyzed validator logs to map configuration errors.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#7CFF92]" />
                            Identified security friction points in web wallet connectors.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-emerald-400 flex items-center gap-2">
                          <Badge className="bg-emerald-500/20 text-emerald-400">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed clean checkout tabs, value charts, and secure status dials. We prioritized high-contrast green status indicators so validators could check speed levels instantly.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            Built high-density custom state tables in dark theme layouts.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            Mocked interactive diagnostics charts in Figma with energy site managers.
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 w-4 h-4 text-emerald-400 flex-shrink-0" />
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
                        To guarantee high fidelity implementation of nodes, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to smart contract updates.
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

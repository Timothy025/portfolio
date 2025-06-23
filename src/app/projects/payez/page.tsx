"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, Users, Settings, TrendingUp, Search, ArrowRight, FileText, Activity, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      title: "Payment Gateway",
      description: "Unified UPI and crypto payment processing",
      icon: CreditCard,
      features: ["UPI Integration", "Crypto Payments", "Transaction Security", "Payment Analytics"]
    },
    {
      title: "User Management",
      description: "Account management and authentication",
      icon: Users,
      features: ["User Registration", "KYC Verification", "Security Settings", "Profile Management"]
    },
    {
      title: "Transaction History",
      description: "Complete payment and transaction records",
      icon: FileText,
      features: ["Payment History", "Transaction Details", "Receipts", "Export Functions"]
    },
    {
      title: "Security & Compliance",
      description: "Advanced security and regulatory compliance",
      icon: Shield,
      features: ["Encryption", "Fraud Detection", "Compliance Monitoring", "Audit Trails"]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive payment analytics and insights",
      icon: TrendingUp,
      features: ["Payment Analytics", "Revenue Reports", "User Insights", "Performance Metrics"]
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
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,23,83,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,105,216,0.1),transparent_50%)]" />
        
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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
                Unified Payment Gateway
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#061753] to-[#4A69D8] bg-clip-text text-transparent">
                PayEZ
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A unified UPI + crypto payment gateway that seamlessly integrates 
              traditional and digital payment methods for modern commerce.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed mt-4"
            >
              The platform bridges the gap between traditional banking and cryptocurrency 
              payments, providing users with a single interface for all their payment needs 
              while maintaining the highest security standards.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                Payment Gateway
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                UPI Integration
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Crypto Payments
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Mobile App
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Figma
              </Badge>
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
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
            </motion.div>

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
                      PayEZ is a revolutionary payment gateway that unifies UPI and 
                      cryptocurrency payments in a single, user-friendly platform. 
                      It addresses the growing need for flexible payment solutions 
                      in the digital economy.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The platform provides seamless integration between traditional 
                      banking systems and blockchain technology, enabling users to 
                      make payments using either UPI or various cryptocurrencies 
                      through a unified interface.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* My Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">My UI/UX Role</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I designed the mobile app interface in Figma, focusing on creating 
                      an intuitive payment experience that bridges traditional and 
                      cryptocurrency payments. Created comprehensive wireframes, 
                      interactive prototypes, and component libraries for secure 
                      financial applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            Mobile app interface design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            Payment flow optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            Security-focused UX design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            Multi-payment method integration
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            High-fidelity mockups
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            Interactive prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            Design system components
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4A69D8] rounded-full" />
                            Security compliance guidelines
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* App Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center">PayEZ Mobile App Interface</h3>
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative mx-auto w-64 h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF]/10 via-[#061753]/10 to-[#4A69D8]/10" />
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
                      <div className="absolute inset-4 bg-gray-900 rounded-2xl flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#FFFFFF] via-[#061753] to-[#4A69D8] text-white p-4 rounded-t-2xl">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold">PayEZ</h4>
                            <CreditCard className="w-5 h-5" />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-4 space-y-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">Quick Pay</div>
                            <div className="text-sm text-gray-400">Choose payment method</div>
                          </div>
                          <div className="space-y-3">
                            {[
                              { method: "UPI Payment", icon: "🏦", status: "Available" },
                              { method: "Bitcoin", icon: "₿", status: "Available" },
                              { method: "Ethereum", icon: "Ξ", status: "Available" },
                              { method: "USDT", icon: "💎", status: "Available" }
                            ].map((payment, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{payment.icon}</span>
                                  <div>
                                    <div className="text-white font-medium">{payment.method}</div>
                                    <div className="text-sm text-gray-400">Instant transfer</div>
                                  </div>
                                </div>
                                <div className="text-sm text-[#4A69D8]">{payment.status}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

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
                      Information Architecture
                    </CardTitle>
                    <CardDescription>
                      The core navigation structure designed for payment gateway users
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Flowchart Container */}
                    <div className="relative p-8 bg-muted/30 rounded-xl border border-border/50">
                      {/* Main App Entry */}
                      <div className="flex justify-center mb-8">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-[#FFFFFF] via-[#061753] to-[#4A69D8] text-white p-4 rounded-lg shadow-lg"
                        >
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-6 h-6" />
                            <span className="font-bold text-lg">PayEZ Platform</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Navigation Flow */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infoArchitecture.map((section, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                          >
                            {/* Connection Line */}
                            {index > 0 && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#4A69D8] to-transparent" />
                            )}
                            
                            {/* Section Card */}
                            <div className="bg-background/50 border border-border/50 rounded-lg p-4 hover:border-[#4A69D8] transition-colors">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-[#4A69D8]/20 rounded-lg">
                                  <section.icon className="w-5 h-5 text-[#4A69D8]" />
                                </div>
                                <div>
                                  <h4 className="font-semibold">{section.title}</h4>
                                  <p className="text-sm text-muted-foreground">{section.description}</p>
                                </div>
                              </div>
                              
                              {/* Features List */}
                              <div className="space-y-2">
                                {section.features.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="w-1.5 h-1.5 bg-[#4A69D8] rounded-full" />
                                    {feature}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* User Journey Flow */}
                      <div className="mt-12">
                        <h4 className="text-xl font-semibold mb-6 text-center">Payment Gateway Journey Flow</h4>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                          {infoArchitecture.map((section, index) => (
                            <div key={index} className="flex items-center">
                              <div className="bg-muted/50 border border-border/50 rounded-lg px-4 py-2">
                                <div className="flex items-center gap-2">
                                  <section.icon className="w-4 h-4 text-[#4A69D8]" />
                                  <span className="text-sm font-medium">{section.title}</span>
                                </div>
                              </div>
                              {index < infoArchitecture.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-muted-foreground mx-2" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

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
                      Design Process
                    </CardTitle>
                    <CardDescription>
                      The methodology behind creating secure payment experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "Understanding payment behaviors and security requirements",
                          icon: Search
                        },
                        {
                          phase: "Design",
                          description: "Mobile app and security-focused interface design",
                          icon: CreditCard
                        },
                        {
                          phase: "Prototype",
                          description: "Interactive prototypes and security testing",
                          icon: Activity
                        },
                        {
                          phase: "Launch",
                          description: "Implementation and continuous security optimization",
                          icon: ArrowRight
                        }
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-6 rounded-lg bg-muted/50 border border-border/50"
                        >
                          <div className="flex justify-center mb-4">
                            <div className="p-3 bg-[#4A69D8]/20 rounded-lg">
                              <step.icon className="w-8 h-8 text-[#4A69D8]" />
                            </div>
                          </div>
                          <h4 className="font-semibold mb-2">{step.phase}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                      ))}
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
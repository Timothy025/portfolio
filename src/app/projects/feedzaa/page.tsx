"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ChefHat, ShoppingCart, Users, Star, MapPin, Clock, Search, ArrowRight, Settings, Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeedzaaCaseStudy() {
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
      title: "Home & Discovery",
      description: "Chef discovery and food exploration",
      icon: ChefHat,
      features: ["Chef Profiles", "Featured Dishes", "Search & Filter", "Recommendations"]
    },
    {
      title: "Ordering System",
      description: "Seamless food ordering experience",
      icon: ShoppingCart,
      features: ["Menu Browsing", "Cart Management", "Payment Processing", "Order Tracking"]
    },
    {
      title: "Chef Dashboard",
      description: "Chef management and analytics",
      icon: Users,
      features: ["Order Management", "Menu Builder", "Analytics", "Customer Reviews"]
    },
    {
      title: "User Profiles",
      description: "Personalized user experience",
      icon: Star,
      features: ["Order History", "Favorites", "Reviews", "Preferences"]
    },
    {
      title: "Delivery & Logistics",
      description: "Order fulfillment and delivery",
      icon: MapPin,
      features: ["Delivery Tracking", "Location Services", "Time Estimates", "Status Updates"]
    }
  ]

  const platformData = [
    { metric: "Active Chefs", value: "2,847", change: "+15.2%", icon: ChefHat, color: "text-[#DB3E19]" },
    { metric: "Total Orders", value: "45,678", change: "+23.7%", icon: ShoppingCart, color: "text-[#F7D71C]" },
    { metric: "User Rating", value: "4.8/5", change: "+0.2", icon: Star, color: "text-[#DB3E19]" },
    { metric: "Delivery Time", value: "32 min", change: "-8%", icon: Clock, color: "text-[#F7D71C]" }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(219,62,25,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(247,215,28,0.1),transparent_50%)]" />
        
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
                Chef-Driven Food Commerce
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#DB3E19] to-[#F7D71C] bg-clip-text text-transparent">
                Feedzaa
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A chef-driven food commerce platform connecting home chefs with food lovers, 
              enabling authentic culinary experiences and community-driven dining.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed mt-4"
            >
              The platform empowers talented home chefs to showcase their culinary skills, 
              while providing food enthusiasts with access to unique, homemade dishes 
              delivered fresh to their doorstep.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                Food Commerce
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Chef Platform
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Mobile App
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Delivery System
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
                      <ChefHat className="w-8 h-8 text-[#DB3E19]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Feedzaa is a revolutionary food commerce platform that connects 
                      talented home chefs with food enthusiasts. It creates a marketplace 
                      where culinary passion meets community dining experiences.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The platform enables home chefs to showcase their skills, manage 
                      their menus, and reach customers, while providing food lovers with 
                      access to authentic, homemade dishes delivered fresh to their homes.
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
                      an intuitive food discovery and ordering experience. Created 
                      wireframes, interactive prototypes, and component libraries for 
                      both customer and chef-facing interfaces.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#DB3E19] rounded-full" />
                            Mobile app interface design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F7D71C] rounded-full" />
                            Food discovery experience
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#DB3E19] rounded-full" />
                            Chef dashboard design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F7D71C] rounded-full" />
                            Order flow optimization
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F7D71C] rounded-full" />
                            High-fidelity mockups
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#DB3E19] rounded-full" />
                            Interactive prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F7D71C] rounded-full" />
                            Design system components
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#DB3E19] rounded-full" />
                            User research insights
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Platform Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center">Feedzaa Mobile App Interface</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Customer App Screen */}
                  <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ChefHat className="w-5 h-5 text-[#DB3E19]" />
                        Customer App
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative mx-auto w-64 h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#DB3E19]/10 to-[#F7D71C]/10" />
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
                        <div className="absolute inset-4 bg-gray-900 rounded-2xl flex flex-col">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-[#DB3E19] to-[#F7D71C] text-white p-4 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold">Feedzaa</h4>
                              <ChefHat className="w-5 h-5" />
                            </div>
                          </div>
                          {/* Content */}
                          <div className="flex-1 p-4 space-y-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">Discover Chefs</div>
                              <div className="text-sm text-gray-400">Fresh homemade food</div>
                            </div>
                            <div className="space-y-3">
                              {[
                                { name: "Chef Maria", cuisine: "Italian", rating: "4.9", dishes: "12" },
                                { name: "Chef Alex", cuisine: "Mexican", rating: "4.8", dishes: "8" },
                                { name: "Chef Sarah", cuisine: "Indian", rating: "4.7", dishes: "15" }
                              ].map((chef, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                                >
                                  <div>
                                    <div className="text-white font-medium">{chef.name}</div>
                                    <div className="text-sm text-gray-400">{chef.cuisine}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-3 h-3 text-[#F7D71C] fill-current" />
                                      <span className="text-sm text-white">{chef.rating}</span>
                                    </div>
                                    <div className="text-xs text-gray-400">{chef.dishes} dishes</div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Chef Dashboard Screen */}
                  <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#F7D71C]" />
                        Chef Dashboard
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative mx-auto w-full h-96 bg-gradient-to-br from-[#DB3E19]/20 to-[#F7D71C]/20 rounded-lg border-2 border-gray-300 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#DB3E19]/10 to-[#F7D71C]/10" />
                        {/* Browser Bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-200 flex items-center gap-2 px-3">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                          </div>
                          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
                            feedzaa.com/chef-dashboard
                          </div>
                        </div>
                        {/* Content */}
                        <div className="absolute inset-0 top-8 bg-white">
                          {/* Navigation */}
                          <div className="bg-gray-50 border-b p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <ChefHat className="w-6 h-6 text-[#DB3E19]" />
                                <span className="font-bold">Chef Dashboard</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <Activity className="w-5 h-5 text-gray-600" />
                                <Settings className="w-5 h-5 text-gray-600" />
                                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                              </div>
                            </div>
                          </div>
                          {/* Main Content */}
                          <div className="p-6 space-y-4">
                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4">
                              {platformData.map((metric, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  className="bg-gray-100 rounded-lg p-4 text-center"
                                >
                                  <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                                  <div className="text-2xl font-bold">{metric.value}</div>
                                  <div className="text-sm text-gray-600">{metric.metric}</div>
                                  <div className="text-xs text-[#DB3E19]">{metric.change}</div>
                                </motion.div>
                              ))}
                            </div>
                            {/* Recent Orders */}
                            <div className="bg-gray-100 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold">Recent Orders</h4>
                                <ShoppingCart className="w-5 h-5 text-[#F7D71C]" />
                              </div>
                              <div className="space-y-2">
                                {[
                                  { order: "#FZ-001", customer: "John D.", status: "Preparing" },
                                  { order: "#FZ-002", customer: "Sarah M.", status: "Ready" },
                                  { order: "#FZ-003", customer: "Mike R.", status: "Delivered" }
                                ].map((order, index) => (
                                  <div key={index} className="flex items-center justify-between p-2 bg-white rounded">
                                    <div>
                                      <div className="font-medium">{order.order}</div>
                                      <div className="text-sm text-gray-600">{order.customer}</div>
                                    </div>
                                    <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className="text-xs">
                                      {order.status}
                                    </Badge>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
                      <Activity className="w-8 h-8 text-[#DB3E19]" />
                      Information Architecture
                    </CardTitle>
                    <CardDescription>
                      The core navigation structure designed for food commerce users
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
                          className="bg-gradient-to-r from-[#DB3E19] to-[#F7D71C] text-white p-4 rounded-lg shadow-lg"
                        >
                          <div className="flex items-center gap-3">
                            <ChefHat className="w-6 h-6" />
                            <span className="font-bold text-lg">Feedzaa Platform</span>
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
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#DB3E19] to-transparent" />
                            )}
                            
                            {/* Section Card */}
                            <div className="bg-background/50 border border-border/50 rounded-lg p-4 hover:border-[#DB3E19] transition-colors">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-[#DB3E19]/20 rounded-lg">
                                  <section.icon className="w-5 h-5 text-[#DB3E19]" />
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
                                    <div className="w-1.5 h-1.5 bg-[#DB3E19] rounded-full" />
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
                        <h4 className="text-xl font-semibold mb-6 text-center">Food Commerce Journey Flow</h4>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                          {infoArchitecture.map((section, index) => (
                            <div key={index} className="flex items-center">
                              <div className="bg-muted/50 border border-border/50 rounded-lg px-4 py-2">
                                <div className="flex items-center gap-2">
                                  <section.icon className="w-4 h-4 text-[#DB3E19]" />
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
                      <Settings className="w-8 h-8 text-[#DB3E19]" />
                      Design Process
                    </CardTitle>
                    <CardDescription>
                      The methodology behind creating delightful food commerce experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "Understanding chef and customer needs",
                          icon: Search
                        },
                        {
                          phase: "Design",
                          description: "Mobile app and dashboard interface design",
                          icon: ChefHat
                        },
                        {
                          phase: "Prototype",
                          description: "Interactive prototypes and user testing",
                          icon: Activity
                        },
                        {
                          phase: "Launch",
                          description: "Implementation and continuous optimization",
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
                            <div className="p-3 bg-[#DB3E19]/20 rounded-lg">
                              <step.icon className="w-8 h-8 text-[#DB3E19]" />
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
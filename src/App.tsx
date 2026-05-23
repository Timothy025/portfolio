import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/app/providers"
import { ThemeToggle } from "@/components/theme-toggle"
import { CustomCursor } from "@/components/custom-cursor"

// Import Pages
import Home from "./app/page"
import About from "./app/about/page"

// Import Case Studies
import Feedzaa from "./app/projects/feedzaa"
import IrisSense from "./app/projects/iris-sense"
import IrisNetwork from "./app/projects/iris-network"
import IrisROne from "./app/projects/r-one-ams"
import WitnessChain from "./app/projects/witnesschain"
import OMS from "./app/projects/oms-order-management"
import IrisRMS from "./app/projects/rms"
import IrisFleet from "./app/projects/fleet"
import PayEZ from "./app/projects/payez"
import Energy from "./app/projects/energy"
import AnalyticsDashboard from "./app/projects/analytics-dashboard"
import EcommercePlatform from "./app/projects/ecommerce-platform"
import MobileBanking from "./app/projects/mobile-banking"
import NetworkCMS from "./app/projects/network-cms"
import Web3Wallet from "./app/projects/web3-wallet"
import ProductCasestudy from "./app/projects/product-casestudy"

// Layout Wrapper
function Layout() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen flex-col bg-background text-foreground antialiased font-sans">
        <CustomCursor />
        <Navbar />

        {/* Symmetrical Floating Theme Toggle */}
        <div className="fixed top-6 right-6 sm:right-8 lg:right-12 z-[100]">
          <ThemeToggle />
        </div>

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

// Scroll to Top Utility
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Navigate to="/#contact" replace />} />
          <Route path="projects" element={<Navigate to="/#work" replace />} />

          {/* Project Case Studies */}
          <Route path="projects/feedzaa" element={<Feedzaa />} />
          <Route path="projects/iris-sense" element={<IrisSense />} />
          <Route path="projects/iris-network" element={<IrisNetwork />} />
          <Route path="projects/r-one-ams" element={<IrisROne />} />
          <Route path="projects/witnesschain" element={<WitnessChain />} />
          <Route path="projects/oms-order-management" element={<OMS />} />
          <Route path="projects/rms" element={<IrisRMS />} />
          <Route path="projects/fleet" element={<IrisFleet />} />
          <Route path="projects/payez" element={<PayEZ />} />
          <Route path="projects/energy" element={<Energy />} />
          
          {/* Redirect for historical Aatral energy path */}
          <Route path="projects/energy-aatral" element={<Navigate to="/projects/energy" replace />} />
          
          <Route path="projects/analytics-dashboard" element={<AnalyticsDashboard />} />
          <Route path="projects/ecommerce-platform" element={<EcommercePlatform />} />
          <Route path="projects/mobile-banking" element={<MobileBanking />} />
          <Route path="projects/network-cms" element={<NetworkCMS />} />
          <Route path="projects/web3-wallet" element={<Web3Wallet />} />
          <Route path="projects/product-casestudy" element={<ProductCasestudy />} />

          {/* Fallback Catch-All Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

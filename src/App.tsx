import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/app/providers"

// Import Pages
import Home from "./app/page"
import About from "./app/about/page"
import Contact from "./app/contact/page"
import Projects from "./app/projects/page"

// Import Case Studies
import Feedzaa from "./app/projects/feedzaa/page"
import IrisSense from "./app/projects/iris-sense/page"
import IrisNetwork from "./app/projects/iris-network/page"
import IrisROne from "./app/projects/r-one-ams/page"
import WitnessChain from "./app/projects/witnesschain/page"
import OMS from "./app/projects/oms-order-management/page"
import IrisRMS from "./app/projects/rms/page"
import IrisFleet from "./app/projects/fleet/page"
import PayEZ from "./app/projects/payez/page"
import Energy from "./app/projects/energy/page"
import AnalyticsDashboard from "./app/projects/analytics-dashboard/page"
import EcommercePlatform from "./app/projects/ecommerce-platform/page"
import MobileBanking from "./app/projects/mobile-banking/page"
import NetworkCMS from "./app/projects/network-cms/page"
import Web3Wallet from "./app/projects/web3-wallet/page"
import ProductCasestudy from "./app/projects/product-casestudy/page"

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
        <Navbar />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />

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

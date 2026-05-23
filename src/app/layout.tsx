import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timothy Jerald Xavier | Product Designer",
  description: "Product Designer & UI/UX Expert specializing in User Experience, User Interface Design, Interaction Design, User Research, Prototyping, Wireframing, Figma, Design Systems, Information Architecture, and Usability Testing. Delivering high-impact B2B SaaS, Web3, and Enterprise Design solutions through User-Centered Design.",
  keywords: [
    "Product Designer", "UI/UX Designer", "User Experience Design", "User Interface Design", 
    "UX Researcher", "Interaction Design", "Wireframing", "Prototyping", "Figma", 
    "Design Systems", "SaaS Design", "Enterprise UX", "Web3 Design", "Mobile App Design",
    "Usability Testing", "Information Architecture", "User-Centered Design", "Agile Design",
    "Cross-functional Collaboration", "B2B", "B2C", "Visual Design"
  ],
  icons: {
    icon: '/browser_top.png',
    shortcut: '/browser_top.png',
    apple: '/browser_top.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/browser_top.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <CustomCursor />
            <Navbar />
            
            {/* Symmetrical Floating Theme Toggle */}
            <div className="fixed top-6 right-6 sm:right-8 lg:right-12 z-[100]">
              <ThemeToggle />
            </div>

            <main className="flex-1 pt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

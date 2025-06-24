import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timothy Jerald Xavier - UI/UX Designer",
  description: "UI/UX Designer with a passion for meaningful interfaces and impactful digital products.",
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
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

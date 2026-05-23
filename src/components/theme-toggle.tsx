"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/app/providers"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border border-border/40 hover:bg-foreground/5 transition-colors">
        <div className="w-4 h-4" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full border border-border/40 hover:bg-foreground/5 transition-colors overflow-hidden flex items-center justify-center cursor-pointer"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="h-4.5 w-4.5 text-foreground transition-all duration-300 transform scale-100 rotate-0" />
        ) : (
          <Moon className="h-4.5 w-4.5 text-foreground transition-all duration-300 transform scale-100 rotate-0" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 
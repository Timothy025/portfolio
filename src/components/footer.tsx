import Link from "next/link"
import { downloadResume } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="border-t border-border/30">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            Copyright © 2026 Timothy Jerald Xavier
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={downloadResume}
              className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors duration-300 cursor-pointer tracking-wide"
            >
              Resume
            </button>
            <Link
              href="https://linkedin.com/in/timothy-jerald/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              LinkedIn
            </Link>
            <Link
              href="https://behance.net/timothyjerald"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              Behance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
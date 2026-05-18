import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadResume() {
  const link = document.createElement('a')
  link.href = '/Timothy_CV.pdf'
  link.download = 'Timothy_Jerald_Xavier_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

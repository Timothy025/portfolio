# Timothy Jerald Xavier - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Features a futuristic design with dark/light theme support and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, futuristic UI with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── projects/
│   │   └── page.tsx          # Projects page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── providers.tsx         # Theme provider
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── footer.tsx            # Footer component
│   ├── mobile-nav.tsx        # Mobile navigation
│   ├── navbar.tsx            # Navigation bar
│   └── theme-toggle.tsx      # Theme toggle component
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Design Features

- **Gradient Backgrounds**: Subtle animated gradients for visual appeal
- **Glass Morphism**: Backdrop blur effects on cards and components
- **Neon Accents**: Blue and cyan accent colors for futuristic feel
- **Typography**: Space Grotesk for headings, Inter for body text
- **Micro-interactions**: Hover effects and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Home (`/`)
- Hero section with name and tagline
- Animated background with gradient effects
- Call-to-action buttons
- Smooth scroll indicator

### Projects (`/projects`)
- Grid layout showcasing portfolio projects
- Project cards with descriptions and tags
- Category filtering (planned)
- Case study links

### About (`/about`)
- Two-column layout with contact info and bio
- Professional skills and experience highlights
- Download resume functionality
- Social media links

### Contact (`/contact`)
- Contact form with validation
- Contact information display
- Social media links
- Quick response status

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/app/page.tsx` - Hero section content
- `src/app/about/page.tsx` - Bio and contact details
- `src/app/projects/page.tsx` - Project data
- `src/app/contact/page.tsx` - Contact information

### Styling
- Colors: Update CSS variables in `src/app/globals.css`
- Fonts: Modify font imports in `src/app/layout.tsx`
- Animations: Adjust Framer Motion settings in components

### Content
- Projects: Add your projects to the `projects` array in `src/app/projects/page.tsx`
- Skills: Update skills list in `src/app/about/page.tsx`
- Social Links: Modify social media links in contact components

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### shadcn/ui Components
Add new components as needed:
```bash
npx shadcn@latest add <component-name>
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: jeraldtimothy@gmail.com
- **LinkedIn**: [linkedin.com/in/timothy-jerald/](https://linkedin.com/in/timothy-jerald/)
- **Behance**: [behance.net/timothyjerald](https://behance.net/timothyjerald)

---

Built with ❤️ by Timothy Jerald Xavier

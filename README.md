# 📸 Saurabh Studio

> **"Frames Come Alive"** — Premium Photography & Cinematography Studio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.x-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)](https://gsap.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Security](#-security)
- [Credits](#-credits)

---

## 🎯 About

**Saurabh Studio** is a modern, high-performance photography studio website built with Next.js 14. The website features cinema-quality animations, 3D effects, and a unique photography-themed design language.

### 🏢 Studio Information

| Detail | Information |
|--------|-------------|
| **Studio Name** | Saurabh Studio |
| **Location** | Ayodhya, Uttar Pradesh, India |
| **Contact** | +91 9198297260 |
| **Services** | Wedding Photography, Pre-Wedding, Events, Commercial |
| **Instagram** | [@saurabh_studio_108](https://www.instagram.com/saurabh_studio_108) |
| **YouTube** | [@saurabhstudio007](https://www.youtube.com/@saurabhstudio007) |

---

## ✨ Features

### 🎬 Cinema-Quality Animations

| Feature | Description |
|---------|-------------|
| **Three.js Particles** | 3,000 floating golden particles in hero section |
| **GSAP ScrollTrigger** | Scroll-based parallax and reveal animations |
| **Framer Motion** | Smooth component transitions and micro-interactions |
| **Custom Cursor** | Aperture-style cursor with hover effects |
| **Preloader** | Camera aperture blade loading animation |

### 📷 Photography-Themed Design

- **Aperture Navigation** — Camera lens-inspired menu with rotating blades
- **Shutter Reveal Effects** — Images unveil with camera shutter animation
- **Film Reel Carousel** — Video showcase styled as classic film strips
- **Darkroom Contact Form** — Multi-stage form with photo development theme
- **Cinema Credits Footer** — Film-style end credits

### 🎨 Website Sections

| Section | Features |
|---------|----------|
| **Hero** | 3D particle field, cinematic bars, camera push effect |
| **Navigation** | Aperture logo, mobile full-screen reveal, scroll detection |
| **Portfolio** | Bento grid, category filters, lightbox with keyboard navigation |
| **Video Showcase** | Film reel design, YouTube integration, duration overlays |
| **Services** | 3D flip cards, pricing reveal, floating particles |
| **About** | Parallax storytelling, camera assembly animation, stat counters |
| **Testimonials** | Film strip carousel, B&W to color reveal on hover |
| **Contact** | 4-stage wizard (Exposure → Development → Fixing → Print) |
| **Footer** | Animated logo, social links, developer credit |
| **404 Page** | Custom error page with aperture animation |

### 🔒 Security Features

- Right-click context menu disabled
- Keyboard shortcuts blocked (Ctrl+S, Ctrl+U, F12)
- Image/video drag protection
- Text selection disabled on media
- Touch callout disabled for mobile

---

## 🛠 Tech Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.x | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.x | Utility-first styling |

### Animation & 3D

| Technology | Purpose |
|------------|---------|
| [GSAP](https://gsap.com/) | Professional-grade animations |
| [Framer Motion](https://www.framer.com/motion/) | React animation library |
| [Three.js](https://threejs.org/) | 3D graphics engine |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | Three.js helper components |

### UI & Components

| Technology | Purpose |
|------------|---------|
| [Lucide React](https://lucide.dev/) | Icon library |
| [Radix UI](https://www.radix-ui.com/) | Accessible component primitives |
| [Swiper](https://swiperjs.com/) | Touch slider/carousel |

### Form & Validation

| Technology | Purpose |
|------------|---------|
| [React Hook Form](https://react-hook-form.com/) | Form state management |
| [Zod](https://zod.dev/) | Schema validation |
| [Formspree](https://formspree.io/) | Form backend service |

### Other

| Technology | Purpose |
|------------|---------|
| [PhotoSwipe](https://photoswipe.com/) | Image gallery lightbox |
| [Lottie React](https://lottiefiles.com/) | Lottie animations |
| [Howler.js](https://howlerjs.com/) | Audio library |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, yarn, pnpm, or bun
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/saurabh-studio.git

# Navigate to project directory
cd saurabh-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
saurabh-studio/
├── public/                    # Static assets
│   ├── images/               # Image files
│   ├── videos/               # Video thumbnails
│   └── fonts/                # Custom fonts
│
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles, animations, CSS variables
│   │   ├── layout.tsx        # Root layout with fonts & metadata
│   │   ├── page.tsx          # Main homepage
│   │   └── not-found.tsx     # Custom 404 page
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Three.js hero with particles
│   │   │   ├── Navigation.tsx    # Aperture-style navigation
│   │   │   ├── Portfolio.tsx     # Gallery with lightbox
│   │   │   ├── VideoShowcase.tsx # Film reel video section
│   │   │   ├── Services.tsx      # 3D flip service cards
│   │   │   ├── About.tsx         # Parallax about section
│   │   │   ├── Testimonials.tsx  # Film strip testimonials
│   │   │   ├── Contact.tsx       # Multi-stage contact form
│   │   │   └── Footer.tsx        # Cinema credits footer
│   │   │
│   │   └── ui/
│   │       ├── Preloader.tsx      # Aperture loading animation
│   │       ├── CustomCursor.tsx   # Custom cursor with effects
│   │       └── SecurityWrapper.tsx # Content protection
│   │
│   ├── hooks/
│   │   └── useAnimations.ts      # Custom animation hooks
│   │
│   └── lib/
│       ├── constants.ts          # Studio data, content
│       └── utils.ts              # Utility functions
│
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies & scripts
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── DEVELOPER.md              # Developer documentation
└── README.md                 # Project documentation
```

---

## ⚙️ Configuration

### 1. Studio Information

Edit `src/lib/constants.ts` to update:

```typescript
export const STUDIO_INFO = {
  name: "Saurabh Studio",
  phone: "+91 9198297260",
  email: "hello@saurabhstudio.in",
  social: {
    instagram: "https://www.instagram.com/saurabh_studio_108",
    youtube: "https://www.youtube.com/@saurabhstudio007",
    whatsapp: "https://wa.me/919198297260"
  }
};
```

### 2. Formspree Integration

1. Go to [formspree.io](https://formspree.io/) and create an account
2. Create a new form and get your form ID
3. Update `src/components/sections/Contact.tsx`:

```typescript
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

### 3. YouTube Videos

Edit `VIDEO_SHOWCASE` in `src/lib/constants.ts`:

```typescript
export const VIDEO_SHOWCASE = [
  {
    id: 1,
    title: "Wedding Highlight",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    duration: "4:30",
    category: "wedding",
  },
  // Add more videos...
];
```

### 4. Portfolio Images

Add your images to `/public/images/` and update `PORTFOLIO_ITEMS` in constants.

### 5. Services & Pricing

Update `SERVICES` array in `src/lib/constants.ts` with your packages.

---

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/saurabh-studio)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

| Platform | Build Command | Output Directory |
|----------|--------------|------------------|
| Netlify | `npm run build` | `.next` |
| AWS Amplify | `npm run build` | `.next` |
| Docker | See Dockerfile | - |

### Production Build

```bash
# Create optimized build
npm run build

# Start production server
npm run start
```

---

## 🔒 Security

### Implemented Protections

| Protection | Status |
|------------|--------|
| Right-click disabled | ✅ |
| Keyboard shortcuts blocked | ✅ |
| Image drag prevention | ✅ |
| Video drag prevention | ✅ |
| Text selection disabled | ✅ |
| Mobile touch callout | ✅ |

### Recommendations

1. **Watermark Images** — Add visible/invisible watermarks
2. **Low-res Thumbnails** — Serve low-res on site, high-res to clients
3. **Hotlink Protection** — Configure in hosting/CDN settings
4. **CDN with Token Auth** — Use signed URLs for media

---

## 🎨 Customization

### Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #D4A574;      /* Gold accent */
  --color-secondary: #8B7355;    /* Warm brown */
  --color-accent: #C9B896;       /* Light gold */
  --color-background: #0A0A0A;   /* Dark background */
  --color-surface: #141414;      /* Card surfaces */
}
```

### Fonts

Default fonts: **Inter** (body) & **Playfair Display** (headings)

Update in `src/app/layout.tsx` to change fonts.

---

## 📱 Responsive Design

| Breakpoint | Description |
|------------|-------------|
| Mobile | < 640px — Simplified animations, hamburger menu |
| Tablet | 640px - 1024px — Adapted layouts, touch-friendly |
| Desktop | > 1024px — Full animations, custom cursor, 3D effects |

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) file.

---

## 👨‍💻 Credits

### Developer

Designed & Developed by **[DevArea](https://youtube.com/@DevArea)**

See [DEVELOPER.md](DEVELOPER.md) for developer details.

### Studio

**Saurabh Studio** — Ayodhya, Uttar Pradesh, India

---

## 📞 Support

For support or inquiries:

- 📧 Email: hello@saurabhstudio.in
- 📱 WhatsApp: +91 9198297260
- 🌐 Instagram: [@saurabh_studio_108](https://www.instagram.com/saurabh_studio_108)

---

<p align="center">
  <strong>Saurabh Studio</strong><br>
  <em>"Where Sacred Moments Become Eternal Frames"</em><br><br>
  Made with ❤️ in Ayodhya, India
</p>

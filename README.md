# Piquiyo - Modern Web Development Platform

A cutting-edge React application showcasing modern web development capabilities with WordPress headless CMS integration via WPGraphQL.

## 🚀 Features

- **Modern React Stack**: React 19.2.4 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Routing**: React Router DOM for navigation
- **Icons**: Lucide React icon library
- **Build Tool**: Vite for fast development and building
- **CMS Ready**: WPGraphQL integration for headless WordPress

## 📁 Project Structure

```
piquiyo wp/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, Services, FAQ, etc.
│   │   └── ui/             # Reusable UI components
│   ├── pages/              # Route components
│   ├── styles/             # Global styles and themes
│   ├── lib/                # Utility functions
│   └── main.tsx           # App entry point
├── public/                 # Static assets
├── dist/                  # Build output (generated)
├── wordpress-graphql-setup.md  # Headless WordPress guide
└── everythingaboutwebsite.md   # Complete documentation
```

## 🛠️ Tech Stack

- **Frontend**: React 19.2.4, TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.19
- **Build**: Vite 7.3.1
- **Icons**: Lucide React 0.563.0
- **Animations**: Framer Motion 12.31.0
- **Routing**: React Router DOM 7.13.0

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd piquiyo-wp

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 WordPress Integration

This project is designed to work with headless WordPress using WPGraphQL:

### Setup Instructions
1. Follow the guide in `wordpress-graphql-setup.md`
2. Install required WordPress plugins
3. Configure custom post types and fields
4. Update React components to fetch from WordPress

### Required WordPress Plugins
- WPGraphQL
- WPGraphiQL
- Advanced Custom Fields Pro
- WPGraphQL for Advanced Custom Fields

## 📦 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Headless WordPress**: Deploy React app separately
- **SSR**: Next.js integration (future enhancement)

## 🎨 Design System

### Colors
- Brand: `#FF4937` (Orange)
- Text: `#2e2c2f` (Dark Gray)
- Text Muted: `#3A3D42` (Medium Gray)
- Background Dark: `#202020`
- Background Light: `#f2f2f2`

### Typography
- **Inter**: Body text and UI elements
- **Red Hat Display**: Headings and display text

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images and performance

## 🔧 Configuration

### Tailwind Config
Custom configuration in `tailwind.config.js` with brand colors and typography.

### TypeScript
Strict TypeScript configuration with proper type definitions.

### Vite
Optimized Vite configuration for React with TypeScript support.

## 📚 Documentation

- `everythingaboutwebsite.md` - Complete website structure and styling guide
- `wordpress-graphql-setup.md` - Headless WordPress integration guide
- Component documentation in respective files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🚀 Future Roadmap

- [ ] Next.js integration for SSR
- [ ] Component Storybook
- [ ] Advanced animations
- [ ] Performance optimizations
- [ ] Additional WordPress integrations

---

**Built with ❤️ using modern web technologies**

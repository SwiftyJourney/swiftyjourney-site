# Swifty Journey

Personal website and portfolio for Juan Francisco Dorado Torres - iOS Engineer specializing in Swift, SwiftUI, and clean architecture.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Multilingual Support

The website supports both English and Spanish:

- **English**: `/en/` (default fallback)
- **Spanish**: `/es/`
- **Root**: Redirects to `/en/`

### URL Structure
```
/en/            # English homepage
/en/affiliates/ # English affiliates page

/es/            # Spanish homepage  
/es/afiliados/  # Spanish affiliates page
```

## 🏗️ Architecture

### Project Structure
```
src/
├── components/
│   ├── AffiliateCard.astro     # Individual affiliate product card
│   ├── EDLogo.astro            # Essential Developer logo component
│   ├── HeroPortfolio.astro     # Main hero section with CTAs
│   ├── LangToggle.astro        # Language switcher
│   ├── PartnersStrip.astro     # Partner/affiliate showcase
│   ├── ProblemSolver.astro     # Skills and experience section
│   ├── ProjectCard.astro       # Individual project card
│   ├── ProjectsGrid.astro      # Projects showcase grid
│   ├── Section.astro           # Reusable section wrapper
│   ├── SkillStrip.astro        # Skills showcase
│   ├── TechBadges.astro        # Technology badges grid
│   ├── TechStack.astro         # Technology stack display
│   └── ThemeToggle.astro       # Dark/light mode toggle
├── data/
│   ├── affiliates-en.ts        # Affiliate products data (English)
│   └── affiliates-es.ts        # Affiliate products data (Spanish)
├── layouts/
│   └── BaseLayout.astro        # Main site layout
├── pages/
│   ├── en/
│   │   ├── affiliates.astro    # English affiliates page
│   │   └── index.astro         # English homepage
│   ├── es/
│   │   ├── afiliados.astro     # Spanish affiliates page
│   │   └── index.astro         # Spanish homepage
│   └── index.astro             # Root redirect
└── styles/
    └── global.css              # Global styles
```

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Persistent theme switching with localStorage
- **Multilingual**: Complete ES/EN support with proper hreflang SEO
- **Performance**: Optimized images and minimal JavaScript
- **SEO Optimized**: Meta tags, Open Graph, canonical URLs
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🎨 Styling

The site uses **Tailwind CSS v4** with:
- **Color Scheme**: Zinc palette with orange accents
- **Typography**: System fonts with custom feature settings
- **Dark Mode**: Class-based dark mode implementation
- **Components**: Modular, reusable Astro components

### Design System
- **Primary Color**: Orange-500 (`#f97316`)
- **Text Colors**: Zinc-900 (light) / Zinc-100 (dark)
- **Background**: White (light) / Zinc-900 (dark)
- **Borders**: Zinc-300 (light) / Zinc-700 (dark)

## 📝 Content Management

### Adding New Projects
Edit the projects array in the respective language files:

```typescript
// In src/pages/en/index.astro or src/pages/es/index.astro
projects={[
  {
    title: "Project Name",
    desc: "Brief description",
    tags: ["Swift", "iOS"],
    href: "https://github.com/user/repo",
  },
  // ... more projects
]}
```

### Adding New Skills
Edit the skills array in SkillStrip component usage:

```typescript
skills={[
  {
    icon: "mdi:icon-name",
    title: "Skill Name",
    desc: "Skill description",
  },
  // ... more skills
]}
```

### Adding New Affiliates
Edit the appropriate data file:

```typescript
// src/data/affiliates-en.ts or affiliates-es.ts
export const affiliateProducts = [
  {
    id: "product-id",
    name: "Product Name",
    description: "Product description",
    price: "$99",
    originalPrice: "$149",
    image: "/partners/product/image.png",
    href: "https://affiliate-link.com",
    tags: ["tag1", "tag2"],
  },
  // ... more products
];
```

## 🔧 Development

### Component Guidelines
1. **Astro Components**: Use `.astro` for static components
2. **Props**: Define TypeScript interfaces for component props
3. **Styling**: Use Tailwind CSS classes, avoid inline styles
4. **Responsiveness**: Mobile-first approach (sm:, md:, lg:, xl:)
5. **Accessibility**: Include ARIA labels and semantic HTML

### Adding New Pages
1. Create files in appropriate language folders (`/en/` and `/es/`)
2. Update navigation if needed
3. Add proper meta tags and SEO
4. Test responsive design
5. Ensure translations are consistent

### Icons
The site uses [MDI (Material Design Icons)](https://materialdesignicons.com/) via `astro-icon`:

```astro
<Icon name="mdi:icon-name" />
```

## 🚢 Deployment

### Vercel (Current Setup)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Configure custom domain: `swiftyjourney.com`

### Environment Variables
No environment variables required for basic operation.

### Domain Configuration
- **Primary Domain**: `swiftyjourney.com`
- **Blog Subdomain**: `blog.swiftyjourney.com` (separate repository)

## 🔍 SEO & Analytics

### Built-in SEO Features
- **Canonical URLs**: Prevent duplicate content
- **hreflang Tags**: Language-specific SEO
- **Open Graph**: Social media sharing optimization
- **Meta Descriptions**: Per-page SEO descriptions
- **Structured Data**: JSON-LD for better search results

### Adding Analytics
To add Google Analytics or other tracking:

```astro
<!-- In src/layouts/BaseLayout.astro -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Maintenance

### Regular Updates
- **Dependencies**: Keep Astro and Tailwind updated
- **Content**: Update projects, skills, and experience
- **Performance**: Monitor Core Web Vitals
- **SEO**: Check search console for issues

### Adding CV Download
When ready to add CV download functionality:

1. Add CV file to `/public/JuanDorado-CV.pdf`
2. Uncomment the CV buttons in both language versions:
   - `/src/pages/en/index.astro`
   - `/src/pages/es/index.astro`

```typescript
// Uncomment these lines:
{ label: "Download CV", href: "/JuanDorado-CV.pdf", kind: "primary" },
{ label: "Descargar CV", href: "/JuanDorado-CV.pdf", kind: "primary" },
```

## 🔗 Related Projects

- **[Swifty Journey Blog](../swiftyjourney-blog/)**: Separate blog repository
- **GitHub Repositories**: Listed in the projects section

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [MDI Icons](https://materialdesignicons.com)

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
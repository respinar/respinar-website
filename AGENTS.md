# Agent Guidelines for Respinar Astro Project

## Commands

### Development & Build

- **Dev server**: `npm run dev` - Starts development server with hot reload
- **Build**: `npm run build` - Creates production build in `dist/` directory
- **Preview**: `npm run preview` - Previews production build locally
- **Astro CLI**: `npm run astro` - Access Astro CLI commands

### Code Quality & Formatting

- **Lint**: `npm run lint` - Runs ESLint on `.js,.ts,.astro` files
- **Lint fix**: `npm run lint:fix` - Auto-fixes ESLint issues where possible
- **Format**: `npm run format` - Formats code with Prettier
- **Format check**: `npm run format:check` - Checks if code is properly formatted

### Testing

No testing framework currently configured. When adding tests:

- Use Vitest (recommended for Astro projects) with `vitest` command
- Run single test: `npm test -- <test-file-path>`
- Watch mode: `npm run test:watch`

## Code Style

### Framework & Languages

- **Framework**: Astro 5.x with TypeScript (strict configuration)
- **Styling**: Tailwind CSS v4 with utility-first approach
- **TypeScript**: Strict mode enabled via `astro/tsconfigs/strict`

### File Structure & Naming

- **Components**: PascalCase naming (e.g., `Header.astro`, `ProjectCard.tsx`)
- **Pages**: kebab-case for routes (e.g., `about.astro`, `contact.astro`)
- **Layouts**: PascalCase with descriptive names (e.g., `BaseLayout.astro`)
- **Styles**: camelCase for custom CSS classes, kebab-case for utilities
- **Assets**: Descriptive names in `public/` (e.g., `logo.svg`, `favicon.svg`)

### Import Organization

```typescript
---
// Group imports at top of frontmatter in this order:
// 1. Astro built-ins (if any)
// 2. Third-party libraries (alphabetically)
// 3. Local imports (relative paths, grouped by directory)

// Example:
import { Image } from 'astro:assets';
import Analytics from '@vercel/analytics/astro';
import SpeedInsights from '@vercel/speed-insights/astro';

import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
---
```

### Component Structure

```astro
---
// 1. Imports (grouped and organized)
// 2. Props interface (if needed)
interface Props {
  title: string;
  description?: string;
}
const { title, description } = Astro.props;

// 3. Component logic (minimal, prefer client-side for interactivity)
// 4. Data fetching (if needed)
---

<!-- 5. HTML structure with semantic markup -->
<div class="component-wrapper">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>

<!-- 6. Scoped styles (if needed) -->
<style>
  .component-wrapper {
    /* Component-specific styles */
  }
</style>
```

### HTML & Accessibility

- **Semantic HTML**: Use proper semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- **Accessibility**: Include alt text for images, proper ARIA labels when needed
- **Responsive**: Mobile-first approach with Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- **Links**: Use descriptive link text, add `hover:` states for better UX

### CSS & Styling

- **Tailwind Utilities**: Prefer utility classes over custom CSS
- **Responsive Design**: Use breakpoint prefixes (`md:text-6xl`, `lg:grid-cols-3`)
- **Dark Mode**: Not currently implemented - avoid dark mode utilities
- **Custom CSS**: Only when Tailwind utilities are insufficient
- **Performance**: Minimize custom CSS, leverage Tailwind's purging

### TypeScript

- **Strict Mode**: Enabled - no implicit `any` types allowed
- **Interfaces**: Use interfaces for component props and complex data structures
- **Type Imports**: Prefer `import type` for type-only imports
- **Generics**: Use when appropriate for reusable components
- **Utility Types**: Leverage built-in types (`Pick`, `Omit`, `Partial`, etc.)

### JavaScript/TypeScript Best Practices

- **Arrow Functions**: Prefer for inline handlers and utilities
- **Async/Await**: Use for asynchronous operations
- **Destructuring**: Prefer object/array destructuring
- **Optional Chaining**: Use `?.` for safe property access
- **Nullish Coalescing**: Use `??` for default values
- **Template Literals**: Prefer over string concatenation

### Error Handling

- **Client-side**: Use try/catch for async operations
- **Build Errors**: Fix immediately - strict TypeScript prevents runtime issues
- **404 Pages**: Create custom 404.astro for better user experience
- **Loading States**: Consider skeleton loaders for dynamic content

### Performance Considerations

- **Image Optimization**: Use Astro's `<Image>` component when available
- **Bundle Splitting**: Astro handles this automatically
- **Lazy Loading**: Use `loading="lazy"` for images below fold
- **Critical CSS**: Tailwind purges unused styles automatically
- **Analytics**: Vercel Analytics and Speed Insights configured

### SEO & Meta

- **Meta Tags**: Include title, description, and Open Graph tags
- **Structured Data**: Consider JSON-LD for rich snippets
- **Sitemap**: Auto-generated by Astro
- **Robots.txt**: Configure if needed for search engines

## Project Structure

```
src/
├── components/     # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   └── ...
├── layouts/        # Page layout components
│   └── BaseLayout.astro
├── pages/          # Route-based pages (.astro files)
│   ├── index.astro
│   ├── about.astro
│   ├── projects.astro
│   └── contact.astro
└── styles/         # Global styles
    └── global.css  # Tailwind imports
public/             # Static assets (images, icons, etc.)
.vscode/            # VS Code configuration
```

## Development Workflow

### Before Committing

1. Run `npm run lint` - Fix any linting issues
2. Run `npm run format` - Ensure consistent formatting
3. Run `npm run build` - Verify production build succeeds
4. Test manually in development server

### Adding New Features

1. Create component in appropriate directory
2. Follow naming conventions and code style
3. Add TypeScript interfaces for props
4. Test across different screen sizes
5. Update relevant pages/routes

### VS Code Setup

- **Extensions**: Astro VS Code extension recommended
- **Settings**: Prettier and ESLint should work automatically
- **Debugging**: Launch configuration available for development server

## Deployment

- **Platform**: Vercel (configured with Analytics and Speed Insights)
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Environment Variables**: None currently configured

## No Cursor Rules Found

No `.cursor/rules/` directory or `.cursorrules` file found.

## No Copilot Instructions Found

No `.github/copilot-instructions.md` file found.

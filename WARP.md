# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Glory Nest is a hospitality website built with modern web technologies. This is a Lovable-managed project (https://lovable.dev/projects/71797523-fcfb-428f-99cf-631a01784fbf) with multi-language support (English, Vietnamese, Korean) for a bed & breakfast/guesthouse.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router v6
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom theme
- **Backend**: Supabase (authentication, database)
- **State Management**: TanStack Query (React Query)
- **Internationalization**: i18next with browser language detection
- **Forms**: React Hook Form with Zod validation

## Development Commands

### Start Development Server
```bash
npm run dev
# Runs on http://0.0.0.0:7777
# Also accessible at http://gn.secondbrains.vn
```

### Build for Production
```bash
npm run build
# Standard production build
```

### Build for Development Environment
```bash
npm run build:dev
# Build with development mode flags
```

### Linting
```bash
npm run lint
# Runs ESLint with TypeScript support
```

### Preview Production Build
```bash
npm run preview
# Preview the production build locally
```

## Architecture

### Directory Structure

```
src/
├── App.tsx                 # Root application component with routing
├── main.tsx               # Application entry point
├── components/            # Feature components
│   ├── Navigation.tsx     # Main navigation with language switcher
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Homepage hero
│   ├── BookingSection.tsx # Booking interface
│   ├── ContactDialog.tsx  # Contact form modal
│   └── ui/               # shadcn/ui components
├── pages/                # Route-level page components
│   ├── Index.tsx         # Homepage (main landing)
│   ├── Story.tsx         # About/Story page
│   ├── Booking.tsx       # Booking page
│   ├── EFund.tsx         # E-Fund page
│   ├── Journal.tsx       # Blog/Journal page
│   ├── FAQ.tsx           # FAQ page
│   ├── Contact.tsx       # Contact page
│   └── NotFound.tsx      # 404 page
├── i18n/                 # Internationalization
│   ├── index.ts          # i18n configuration
│   └── locales/          # Translation files (en, vi, kr)
├── integrations/
│   └── supabase/         # Supabase client and types
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── hooks/                # Custom React hooks
```

### Routing Configuration

The application uses React Router with automatic scroll-to-top on navigation. All routes are defined in `App.tsx`:

- `/` - Homepage
- `/story` - About page
- `/booking` - Booking interface
- `/efund` - E-Fund information
- `/journal` - Blog/updates
- `/faq` - Frequently asked questions
- `/contact` - Contact form
- `*` - 404 catch-all

**Important**: When adding new routes, always place them BEFORE the catch-all `*` route.

### Internationalization (i18n)

The project supports three languages with automatic browser detection:
- English (en) - fallback language
- Vietnamese (vi)
- Korean (kr)

Language preference is stored in localStorage. Translation keys are in `src/i18n/locales/`.

To use translations in components:
```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
return <div>{t('key.path')}</div>;
```

### Styling System

**Tailwind CSS** with custom configuration:
- Custom font families: Roboto (sans/serif), Lavishly Yours (display)
- CSS variables for theming (defined in `src/index.css`)
- Dark mode support via class strategy
- Custom color palette using HSL variables

**shadcn/ui Configuration**:
- Components in `src/components/ui/`
- Path aliases configured: `@/components`, `@/lib/utils`, etc.
- Base color: slate
- CSS variables enabled for theming

### State Management

- **TanStack Query** for server state
- **React Router** state for navigation
- **Local component state** with hooks

### Supabase Integration

Supabase client is configured in `src/integrations/supabase/client.ts`:
- Auto-generated types in `types.ts`
- localStorage persistence for auth
- Auto-refresh tokens enabled

**Security Note**: Supabase credentials are currently in version control (client.ts). For production, move to environment variables.

## Component Patterns

### Page Components
Page components are composition roots that import and arrange feature components. They include Navigation and Footer wrappers.

Example pattern:
```typescript
const PageName = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Page content */}
      </main>
      <Footer />
    </div>
  );
};
```

### Feature Components
Reusable UI sections (HeroSection, BookingSection, etc.) that can be composed into pages. These handle their own state and logic.

### UI Components
Low-level shadcn/ui components in `components/ui/`. These follow shadcn conventions and should not be modified directly - regenerate using CLI if needed.

## TypeScript Configuration

The project uses relaxed TypeScript settings suitable for rapid development:
- `noImplicitAny: false`
- `noUnusedParameters: false`
- `strictNullChecks: false`
- `skipLibCheck: true`

Path alias `@/*` maps to `src/*`.

## Development Server Configuration

Custom Vite configuration:
- Port: 7777
- Host: 0.0.0.0 (accessible on network)
- Allowed host: gn.secondbrains.vn
- CORS enabled for production domain
- React SWC for fast refresh
- Lovable tagger plugin in development mode

## Lovable Integration

This project is managed through Lovable (lovable-tagger plugin). Changes made via Lovable are automatically committed. When developing locally, push changes to sync with Lovable.

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
# Components will be added to src/components/ui/
```

The configuration is in `components.json` and follows the default shadcn/ui conventions.

## Common Patterns

### Adding a New Page

1. Create page component in `src/pages/NewPage.tsx`
2. Import Navigation and Footer
3. Add route in `App.tsx` BEFORE the `*` catch-all route
4. Add navigation link in `Navigation.tsx` if needed
5. Add translations to all locale files in `src/i18n/locales/`

### Adding Translations

Add keys to all three locale files:
- `src/i18n/locales/en.json`
- `src/i18n/locales/vi.json`
- `src/i18n/locales/kr.json`

Use dot notation for nested keys and access with `t('key.path')`.

### Using Supabase

Import the client:
```typescript
import { supabase } from "@/integrations/supabase/client";
```

Use with TanStack Query for data fetching and mutations.

## Environment Configuration

Currently using hardcoded values for Supabase in `src/integrations/supabase/client.ts`. For production deployment, migrate to environment variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Important Notes

- The development server uses port 7777 (not the default 5173)
- Custom CORS configuration allows gn.secondbrains.vn domain
- TypeScript is configured for flexibility over strict type safety
- All pages must include Navigation and Footer components
- ScrollToTop component ensures pages load at the top on navigation

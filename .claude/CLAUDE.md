# Cabinet Médical Santé et Travail Pour Tous - Web Application

## Project Overview

Application web moderne pour la gestion de la santé au travail et les campagnes médicales du Cabinet Médical Santé et Travail Pour Tous. Développée avec Next.js 15, TypeScript, et shadcn/ui.

## Tech Stack

- **Framework**: Next.js 15.4.6 avec App Router
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS v4 avec CSS Variables
- **UI Components**: shadcn/ui (style "new-york")
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Package Manager**: npm

## Development Workflow

1. **Before any new feature or phase**: Create and checkout a feature git branch named `feat/some-short-name`
2. **Write component tests** for all new React components using testing library
3. **Write integration tests** for all new API integrations and user flows
4. **Update type definitions** for any new API contracts or data models
5. **Follow responsive design** principles - test on mobile, tablet, desktop
6. **Ensure accessibility** standards (WCAG 2.1) with proper ARIA labels
7. **You MUST run lint and type check** before committing any changes
8. **Commit with descriptive messages** in French for user-facing features, English for technical changes
9. **Test in both light and dark themes** to ensure proper styling

## Development Commands

```bash
# Développement
npm run dev              # Démarrer le serveur de dev (avec turbopack)

# Build et Production
npm run build           # Build de production
npm start              # Démarrer en mode production

# Qualité du code
npm run lint           # ESLint check
npm run typecheck      # TypeScript check (à ajouter si nécessaire)

# Tests (à configurer)
npm test               # Run component tests
npm run test:e2e       # Run end-to-end tests
npm run test:watch     # Run tests in watch mode
```

## Project Structure

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── auth/              # Pages d'authentification
│   ├── campaigns/         # Gestion des campagnes médicales
│   ├── dashboard/         # Tableau de bord principal
│   ├── employees/         # Gestion des employés
│   ├── organizations/     # Gestion des organisations
│   ├── workstations/      # Gestion des postes de travail
│   ├── layout.tsx         # Layout racine (lang="fr")
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux Tailwind
├── components/
│   ├── ui/               # Composants shadcn/ui
│   ├── forms/            # Composants de formulaires
│   ├── navigation/       # Composants de navigation
│   └── charts/           # Composants de graphiques
├── contexts/             # Contextes React
├── hooks/                # Hooks personnalisés
├── lib/
│   ├── utils.ts          # Utilitaires (cn, etc.)
│   └── api.ts            # Configuration API
├── providers/            # Providers React
└── types/
    └── api.ts            # Types API et données
```

## Code Conventions

### TypeScript
- **Strict mode** activé dans tsconfig.json
- Import aliases avec `@/` pour `./src/*`
- Types explicites pour les APIs et composants

### Styling
- **TailwindCSS v4** avec CSS Variables pour les thèmes
- **Design system** basé sur shadcn/ui "new-york" style
- **Couleurs**: Système OKLCH pour meilleure accessibilité
- **Dark mode** supporté via CSS variables
- Classe utilitaire `cn()` pour merger les classes conditionnellement

### Components
- **Composants fonctionnels** avec TypeScript
- **shadcn/ui** pour les composants de base (Button, Card, etc.)
- **Lucide React** pour les icônes
- Props typées avec interfaces/types explicites

### Forms
- **React Hook Form** pour la gestion des formulaires
- **Zod** pour la validation des schémas
- **@hookform/resolvers** pour l'intégration

### File Naming
- `kebab-case` pour les fichiers
- `PascalCase` pour les composants
- `camelCase` pour les fonctions et variables

## Architecture Patterns

### App Router (Next.js 15)
- Structure basée sur les dossiers pour les routes
- Layouts imbriqués pour la réutilisation
- Loading et error boundaries automatiques

### Component Architecture
- Composants UI réutilisables dans `@/components/ui`
- Composants métier dans des dossiers dédiés
- Separation of concerns entre logique et présentation

### State Management
- Contexts React pour l'état global
- Hooks personnalisés pour la logique réutilisable
- Local state avec useState/useReducer

### API Integration
- Configuration centralisée dans `@/lib/api.ts`
- Types API définis dans `@/types/api.ts`
- Pattern async/await pour les appels API

## Environment Setup

### Required Node Version
- Node.js 18+ (pour Next.js 15)
- npm comme package manager

### Development
1. `npm install` - Installer les dépendances
2. `npm run dev` - Démarrer le serveur de développement
3. Ouvrir http://localhost:3000 (ou 3001 si 3000 occupé)

### Code Quality
- ESLint configuré avec `next/core-web-vitals` et `next/typescript`
- TypeScript en mode strict
- Auto-formatting recommandé (Prettier)

## Domain-Specific Information

### Business Context
- **Cabinet médical** spécialisé en santé au travail
- **Gestion des campagnes** médicales et de prévention
- **Suivi des employés** et dossiers de santé
- **Conformité FHIR** pour l'interopérabilité
- **Intégration OpenMRS** prévue

### Design System - Medical Premium Theme
L'application utilise le thème **Medical Premium** comme design principal:

#### Visual Identity
- **Couleurs principales**: Gradient bleu-vert médical (`from-blue-600 to-green-600`)
- **Logo animé**: Stéthoscope avec badge cœur, animations subtiles au hover
- **Backgrounds**: Gradients doux `from-blue-50 via-white to-green-50` (light) / `from-slate-900 via-slate-800 to-emerald-900` (dark)
- **Cards**: Effet glassmorphism avec `bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm`

#### UI Components
- **Hero Section**: Titre hiérarchique "Cabinet Médical / Santé et Travail / Pour Tous"
- **Feature Cards**: 6 sections métier avec icônes colorées et descriptions
- **Animations**: Transitions douces, hover effects, pulse/bounce sur les éléments médicaux
- **Responsive**: Mobile-first avec grille adaptative (md:grid-cols-2 lg:grid-cols-3)

#### Medical Iconography
- **Stethoscope**: Icône principale avec animation de rotation au hover
- **HeartHandshake**: Badge animé avec effet de battement de cœur
- **Icons métier**: Building2, Target, Users, Wrench, Shield, BarChart3 avec couleurs thématiques

### Key Features
- Organisations: Gestion des entreprises clientes
- Campagnes: Planification et suivi des campagnes médicales
- Employés: Dossiers de santé et suivi médical
- Postes de travail: Évaluation des risques professionnels
- Sécurité: Authentification JWT et contrôle d'accès

### Localization
- **Interface entièrement en français**
- Langue définie dans layout.tsx (`lang="fr"`)
- Tous les textes utilisateur traduits

## Best Practices

1. **Always use TypeScript** - Types explicites pour tout
2. **shadcn/ui components** - Utiliser les composants du design system
3. **Tailwind utilities** - Éviter les CSS personnalisés sauf nécessaire
4. **Responsive design** - Mobile-first avec Tailwind breakpoints
5. **Accessibility** - Suivre les standards WCAG avec shadcn/ui
6. **Performance** - Optimiser avec Next.js (Image, Link, etc.)
7. **French localization** - Tous les textes utilisateur en français

## Common Patterns

### Component Creation
```tsx
// Composant typé avec interface
interface ComponentProps {
  title: string;
  children: React.ReactNode;
}

export function Component({ title, children }: ComponentProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}
```

### Form with Validation
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Email invalide"),
});

type FormData = z.infer<typeof schema>;

export function MyForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  
  // Implementation...
}
```

### API Call Pattern
```tsx
import { api } from "@/lib/api";

async function fetchData() {
  try {
    const response = await api.get("/endpoint");
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
    throw error;
  }
}
```

## Quality Standards

- **Component Testing**: Use @testing-library/react for component tests
- **Type Safety**: TypeScript strict mode - no `any`, explicit types everywhere
- **Performance**: Optimize with Next.js built-ins (Image, Link, dynamic imports)
- **Accessibility**: WCAG 2.1 AA compliance, test with screen readers
- **Responsive Design**: Mobile-first approach, test across breakpoints
- **SEO**: Proper meta tags, semantic HTML, structured data when applicable

## Integration with Backend (opencare4all-core)

- **API Communication**: RESTful APIs with JWT authentication
- **Data Models**: Align with backend DTOs and entity structure
- **FHIR Integration**: Display FHIR-compliant patient data from OpenMRS
- **Organizations**: CRUD operations for company profiles
- **Campaigns**: Medical campaign management and patient assignments
- **Security**: Role-based access control matching backend permissions

## Notes for Claude Code

- **Always run `npm run lint`** après les modifications importantes
- **Use existing components** from shadcn/ui avant de créer du custom
- **Follow the French localization** - tous les nouveaux textes en français
- **Respect the design system** défini dans globals.css
- **TypeScript strict mode** - pas de `any`, types explicites
- **App Router patterns** - utiliser les conventions Next.js 15
- **Test coverage** - write tests for new components and features
- **Backend alignment** - ensure frontend models match backend DTOs
# OpenCare4All Frontend

Modern Next.js web application for occupational health management and medical campaigns.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Component Library**: shadcn/ui for beautiful, accessible components
- **Responsive Design**: Mobile-first approach with tablet and desktop support
- **Type Safety**: Full TypeScript integration with API client
- **FHIR Compatible**: Designed to work with FHIR-compliant backend systems

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **API Client**: Custom fetch-based client with TypeScript types

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── campaigns/         # Campaign management
│   ├── employees/         # Employee management
│   └── organizations/     # Organization management
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── navigation/       # Navigation components
│   ├── forms/            # Custom form components
│   └── charts/           # Data visualization
├── lib/
│   ├── api.ts           # API client for Spring Boot backend
│   └── utils.ts         # Utility functions
├── types/
│   └── api.ts           # TypeScript types matching backend DTOs
├── hooks/               # Custom React hooks
├── contexts/            # React contexts
└── providers/           # React providers
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- OpenCare4All backend running on `http://localhost:8080`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/slashexec/opencare4all-web.git
   cd opencare4all-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` to configure your API endpoint:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔗 Backend Integration

This frontend is designed to work with the OpenCare4All Spring Boot backend. Make sure you have:

1. **Backend running** on `http://localhost:8080`
2. **CORS configured** to allow frontend requests
3. **API endpoints** available at `/api/*`

### API Endpoints Used
- `POST /api/auth/signin` - User authentication
- `GET /api/organizations` - Organization management
- `GET /api/campaigns` - Campaign management
- `GET /api/employees` - Employee management
- `GET /api/workstations` - Workstation management

## 🎨 UI/UX Design

### Design System
- **Colors**: Neutral palette perfect for healthcare applications
- **Typography**: Geist font for excellent readability
- **Components**: Consistent design language with shadcn/ui
- **Responsive**: Mobile-first design with breakpoints:
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`

### Key Features
- ✅ **Accessible**: WCAG 2.1 AA compliant components
- ✅ **Responsive**: Optimized for all screen sizes
- ✅ **Fast**: Optimized performance with Next.js
- ✅ **Type Safe**: Full TypeScript coverage
- ✅ **Professional**: Clean, medical-grade UI design

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Adding New Components

1. **shadcn/ui components**
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Custom components**
   Create in `src/components/` with proper TypeScript types

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **📱 Mobile** (320px - 767px): Touch-friendly interface
- **📱 Tablet** (768px - 1023px): Optimized layouts
- **💻 Desktop** (1024px+): Full-featured interface

## 🎯 Domain Focus

Designed specifically for **occupational health management**:

- **Employee Health**: Track workplace health records
- **Medical Campaigns**: Organize health screening campaigns
- **Risk Management**: Monitor workplace health risks
- **Compliance**: FHIR-compliant health data management

---

Built with ❤️ for occupational health management

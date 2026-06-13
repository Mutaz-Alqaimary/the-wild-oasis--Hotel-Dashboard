# The Wild Oasis

The Wild Oasis is a hotel management dashboard built with React and Vite. It helps staff manage cabins, bookings, guests, check-ins, settings, and user accounts from a protected admin interface.

Live demo: [https://the-wild-oasis-ten-xi-56.vercel.app]

## Features

- Protected app routes with Supabase authentication
- Dashboard with recent bookings, stays, statistics, and charts
- Cabin management with create, edit, duplicate, delete, sorting, and filtering
- Booking management with filtering, sorting, pagination, details, check-in, and checkout flows
- Guest management with create, edit, delete, filtering, sorting, and pagination
- Hotel settings management
- User signup and account profile updates
- Dark mode support
- Toast notifications and error boundaries

## Tech Stack

- React 18
- Vite
- React Router
- Supabase
- TanStack Query
- React Hook Form
- Styled Components
- Recharts
- React Hot Toast
- ESLint and Prettier

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A Supabase project with the required tables, storage buckets, and authentication enabled

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

The app reads these values from `src/services/supabase.js`.

### Run Locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Runs TypeScript project checks and creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint across the project.

## Project Structure

```text
src/
|-- context/          # Global UI context such as dark mode
|-- data/             # Seed data and uploader helpers
|-- features/         # Feature modules for bookings, cabins, guests, auth, dashboard, settings
|-- hooks/            # Reusable custom hooks
|-- pages/            # Route-level page components
|-- services/         # Supabase client and API functions
|-- styles/           # Global styles
|-- ui/               # Reusable UI components
`-- utils/            # Constants and helpers
```

## Deployment

This project is configured for Vercel with `vercel.json`. Add the same Supabase environment variables in the deployment platform before building.

For single-page app routing, requests are rewritten to `index.html` so React Router can handle client-side routes.

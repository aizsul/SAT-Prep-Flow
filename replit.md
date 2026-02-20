# Overview

PrepMaster is a digital SAT practice test application that simulates the College Board's "Bluebook" testing experience. Students enter their name and email, then take a two-module adaptive test with timed sections, a built-in Desmos calculator, question flagging, and navigation. After Module 1, the system routes students to either an easy or hard Module 2 based on their performance. Results are stored in a PostgreSQL database with scores calculated on a 400-1600 scale.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend (React SPA)
- **Framework**: React with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with two main routes: `/` (Home) and `/test` (Test page)
- **State Management**: React Context (`TestProvider`) with `useReducer` pattern for managing the entire test flow — current module, question index, answers, flags, timer, and calculator state
- **Data Fetching**: TanStack React Query for server state (fetching questions, submitting results)
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives, styled with Tailwind CSS and CSS variables
- **Animations**: Framer Motion for smooth transitions between questions and page elements
- **Styling**: Tailwind CSS with a custom "Bluebook" color palette using CSS variables for theming. Fonts: Inter (UI), Source Serif 4 (passages), JetBrains Mono (code/timer)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

## Backend (Express API)
- **Framework**: Express 5 running on Node.js with TypeScript (executed via tsx)
- **API Routes**: Simple REST endpoints mounted under `/api/`:
  - `GET /api/questions` — returns static question sets (module1, module2Easy, module2Hard)
  - `POST /api/results` — validates and stores test results
  - `GET /api/results` — retrieves all stored results
- **Question Data**: Currently hardcoded in `server/data.ts` as static JSON (not in database), organized by module and difficulty track
- **Validation**: Zod schemas (generated via drizzle-zod) for input validation on API endpoints
- **Dev Server**: Vite dev server integrated as middleware with HMR support during development
- **Production**: Client is built to `dist/public`, server is bundled with esbuild to `dist/index.cjs`

## Shared Layer (`shared/`)
- **Schema** (`shared/schema.ts`): Drizzle ORM table definitions and Zod schemas shared between frontend and backend. Contains the `results` table definition and TypeScript interfaces for `Question` types
- **Routes** (`shared/routes.ts`): API contract definitions with paths, methods, and Zod validation schemas — serves as a typed API reference for both sides

## Database
- **Engine**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-kit` for schema management
- **Schema Push**: Use `npm run db:push` to sync schema to database (no migration files needed for dev)
- **Tables**:
  - `results` — stores test outcomes: student name/email, module 1 score, module 2 difficulty track, module 2 score, total calculated score (400-1600), and completion timestamp

## Test Flow Architecture
The adaptive test follows this flow:
1. Student enters name/email on Home page
2. Module 1 begins (32-minute timer, mixed reading/writing and math questions)
3. Module 1 score determines Module 2 difficulty (easy or hard track)
4. Module 2 begins (32-minute timer, adaptive difficulty questions)
5. Results are calculated and submitted to the API
6. The entire flow state lives in React Context, persisting across question navigation

## Build System
- **Dev**: `npm run dev` — runs tsx with Vite middleware for HMR
- **Build**: `npm run build` — Vite builds the client, esbuild bundles the server. Specific dependencies are bundled (allowlisted) to reduce cold start times
- **Production**: `npm start` — serves the built files with Node.js

# External Dependencies

- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable using the `pg` package with connection pooling
- **Desmos Calculator**: Embedded via iframe (`https://www.desmos.com/testing/cb-sat-ap/graphing`) for the SAT calculator tool
- **Google Fonts**: Inter, Source Serif 4, JetBrains Mono, DM Sans, Fira Code, Geist Mono, and Architects Daughter loaded via Google Fonts CDN
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` for Replit development environment integration (dev only)
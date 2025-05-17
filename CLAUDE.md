# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15+ project using the App Router, designed with a modern tech stack:

- **Framework**: Next.js 15+ with App Router
- **Runtime**: Bun (package manager)
- **Languages**: TypeScript
- **Styling**: Tailwind CSS v4 with OKLCH color space
- **UI Components**: shadcn/ui components
- **Database**: Neon (serverless Postgres)
- **Tooling**: Biome (linting/formatting)

## Development Commands

```bash
# Format and lint code with Biome
bun fix

# Run tests
bun test
```

## Project Structure

- `/app`: Next.js App Router pages and layouts
- `/components`: UI components
  - `/components/ui`: shadcn/ui components
  - Other components for layout (header, footer, container)
- `/lib`: Utilities, constants, and database functions
- `/public`: Static assets

## Architecture Patterns

1. **App Router Structure**:
   - `layout.tsx` sets up global layout, fonts, and metadata
   - Page components use Container component for consistent spacing
   - Metadata is configured in layout for SEO optimizations

2. **Data Handling**:
   - Database connection via Neon's serverless driver
   - Simple event tracking implementation

3. **Components**:
   - UI components follow shadcn/ui patterns with Radix primitives
   - Custom styling using Tailwind CSS with class-variance-authority
   - Dark mode support with CSS variables and next-themes

4. **Configuration**:
   - Site constants in `/lib/const.ts`
   - Biome for code formatting and linting (replaces ESLint/Prettier)

## Database Connection

The project uses Neon's serverless Postgres. Database connections are managed in `/lib/db.ts`. Make sure the `DATABASE_URL` environment variable is properly set before attempting database operations.

## Styling

This project uses Tailwind CSS v4 with:
- OKLCH color space for better color perception
- CSS variables for theming
- Dark mode support with proper color contrasts
- Geist fonts for Sans and Mono

The `cn()` utility in `/lib/utils.ts` should be used for merging Tailwind classes.

## Analytics

Plausible analytics is integrated in the layout.

### Custom Events

To track custom events with Plausible:

1. Add `plausible-event-name=MyEventName` to the element's className where:
   - `MyEventName` is the name of your custom event (e.g., `SignupButtonClick`, `DownloadStart`)
   - Can be added to any interactive element like buttons, links, or forms

Example:
```tsx
<Button 
  className="plausible-event-name=SignupButtonClick"
  onClick={handleSignup}
>
  Sign Up
</Button>
```

This approach leverages Plausible's automatic event capturing through tagged events without requiring additional JavaScript code.

## Development Conventions

1. Use Biome for code formatting (`bun fix`)
2. Follow existing component patterns for consistency
3. Use absolute imports with the configured path aliases
4. Maintain light/dark theme compatibility
5. Keep accessibility in mind when working with UI components

# BSC Globe Education UK

Marketing website for BSC Globe Education UK. It presents British education pathways, programme details, admissions information, and an enquiry workflow.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Requirements

- Node.js 20.9 or later
- npm

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run dev` clears port 3000 before starting Next.js. To use a different port, run Next directly:

```bash
npx next dev -p 3001
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create and validate the production build. |
| `npm run start` | Serve the production build after `npm run build`. |

## Project Structure

```text
src/
	app/                 Routes, metadata, and global Tailwind styles
	components/          Shared navigation, footer, forms, FAQ, and programme UI
	lib/                 Programme content and programme image mappings
public/images/         Optimized site images
contents/              Source content and brand guidance
```

Key routes include:

- `/` - Home
- `/programmes` - Programme directory
- `/programmes/[slug]` - Individual programme pages
- `/programmes/qs-undergraduate-pathway` - Undergraduate pathway overview
- `/about`, `/admissions`, and `/contact` - Core information and enquiry pages
- `/privacy` and `/terms` - Legal pages

## Content and Images

- Programme copy, entry requirements, and progression details are maintained in [src/lib/programmes.ts](src/lib/programmes.ts).
- Programme-card image mappings are maintained in [src/lib/programme-images.ts](src/lib/programme-images.ts).
- Shared page chrome is in [src/components/site-chrome.tsx](src/components/site-chrome.tsx), and navigation is in [src/components/navigation.tsx](src/components/navigation.tsx).
- Tailwind CSS 4 is imported and themed in [src/app/globals.css](src/app/globals.css). Reuse its existing Tailwind tokens and utilities when adjusting the interface.

Run `npm run lint` and `npm run build` before opening a pull request or deploying changes.

## Deployment

Create a production build:

```bash
npm run build
npm run start
```

The project can be deployed to any platform that supports Next.js, including Vercel. Set the production domain and any deployment-specific configuration in the hosting platform.

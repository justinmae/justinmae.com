# Justin Mae's Portfolio

This is a personal portfolio website built with Next.js and deployed on GitHub Pages.

## Technologies Used

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- GitHub Pages for deployment

## Development

To run the development server:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will run on [http://localhost:3000](http://localhost:3000).

## Building for Production

To build the project for production:

```bash
# Build the project
npm run build
```

This will create a static export in the `out` directory, ready for deployment to GitHub Pages.

## Deployment

This project is configured for GitHub Pages deployment:

```bash
# Deploy to GitHub Pages
npm run deploy
```

This will build the project and push the `out` directory to the `gh-pages` branch.

## Project Structure

- `app/` - Next.js app directory containing pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utility functions and hooks
- `public/` - Static assets

## Notes

This project was migrated from Vite to Next.js. The migration process is documented in the `cursor.log` file.

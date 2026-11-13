# John Harvey Gomez Vega — Portfolio

Personal portfolio website for **John Harvey Gomez Vega**, a software developer based in Medellín, Colombia.

Built with a dark, terminal-inspired aesthetic, this site showcases professional experience, personal projects, and contact information. It supports both **English** and **Spanish**.

## Live site

- **Portfolio**: *(deploy to your own server/domain)*
- **GitHub**: https://github.com/johngom
- **LinkedIn**: https://linkedin.com/in/zemog1916
- **Email**: zemog1916@gmail.com

## What technologies are used?

This project is built with:

- [Vite](https://vitejs.dev/) — Build tool and dev server
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) — Accessible React components
- [React Router](https://reactrouter.com/) — Client-side routing
- [TanStack Query](https://tanstack.com/query) — Data fetching utilities
- [Lucide React](https://lucide.dev/) — Icons

## Development

### Requirements

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm

### Local setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Enter the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server will be available at `http://localhost:5173` by default.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
.
├── public/              # Static assets (favicon, profile photo)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Header, Footer, Layout
│   │   └── ui/          # shadcn/ui components + custom cards
│   ├── lib/
│   │   ├── i18n/        # English/Spanish translations
│   │   └── utils.ts     # Tailwind cn utility
│   ├── pages/           # Route pages (Home, Work, About, Contact)
│   ├── App.tsx          # Router setup
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles and design tokens
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## Internationalization

The site uses a custom React Context for translations. Language is auto-detected from the browser and stored in `localStorage`. Users can switch language from the header.

Translations live in `src/lib/i18n/translations.ts`.

## Contact form

The contact form on `/contact` submits to **Formspree**. The Formspree endpoint is configured in `src/pages/Contact.tsx`.

To use your own Formspree form:
1. Create a free account at https://formspree.io
2. Create a new form and copy the endpoint URL
3. Replace `https://formspree.io/f/moedjdky` in `src/pages/Contact.tsx` with your endpoint

## Deployment

This is a static frontend. After building, the `dist/` folder contains plain HTML, CSS, and JS files that can be served by any web server.

### Option 1: Build and serve with Nginx (recommended)

On your own Linux server:

```sh
# Build the project
npm run build

# Copy the dist folder to your web directory
sudo cp -r dist/* /var/www/portfolio/
```

Example Nginx config (`/etc/nginx/sites-available/portfolio`):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optional: enable gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;
}
```

Enable the site and reload Nginx:

```sh
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

> Because this is a single-page application (SPA), the `try_files` directive ensures React Router handles all client-side routes.

### Option 2: Serve with Caddy

[Caddy](https://caddyserver.com/) is simpler and handles HTTPS automatically.

```sh
npm run build
sudo cp -r dist/* /var/www/portfolio/
```

Example `Caddyfile`:

```caddy
your-domain.com {
    root * /var/www/portfolio
    file_server
    try_files {path} /index.html
}
```

### Option 3: Docker + Nginx

A `Dockerfile` example:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Example `nginx.conf` for the container:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Build and run:

```sh
docker build -t portfolio .
docker run -d -p 8080:80 portfolio
```

### Option 4: Quick preview on the server

If you just want to test the production build locally or on a server:

```sh
npm run build
npm run preview
```

This serves the `dist/` folder at `http://localhost:4173`.

## Updating after changes

Every time you make changes:

```sh
npm run build
# Then copy or sync the dist folder to your server
```

For Docker:

```sh
docker build -t portfolio .
# Restart the container with the new image
```

## License

This portfolio is a personal project. Feel free to use it as inspiration for your own portfolio.

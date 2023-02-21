# Codino
Codino site based on [Next.js](https://nextjs.org) with TypeScript

## Features
- SSR or static build with Next.js, prefetch, preload, image optimization
- prettier, tslint, eslint
- i18n
- SEO
- content in json (no CMS)
- forms handled by [EmailJS](https://www.emailjs.com)
- hidden game :) 

## Features
- `/pages` next.js pages, by default `/` and `/career/:slug`, `/case-study/:slug`
- `/components` react components
- `/layouts` components are used for sections of your site that you want to share across multiple pages
- `/assets` styles based on sass
- `/content` content for jobs, products and services section
- `/public` resources - translated texts, icons, svg and images that will be optimized (compression + responsive)
- `/utils` and `/hooks` - as in the name :]
- `/types` type definitions in TS

## Configuring
just copy `.env.local.example` over to `.env.local` and update values

## Running locally in development mode
```
npm install
npm run dev
```

## Building and deploying in production
```
npm install
npm run build
npm start
```

## Static HTML Export
```
next export
```
this allows you to export your app to static HTML, which can render without the need of a Node.js server

## Deploying to Vercel

Once merged to `main` branch, your changes will then be served to your visitors on https://codino.vercel.app/

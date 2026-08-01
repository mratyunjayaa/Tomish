# Tomish Frontend

Frontend application for the Tomish website built with React, Vite, and Tailwind CSS.

---

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4
- React Router DOM
- Motion
- React Three Fiber
- Lucide React
- React Icons

---

## Project Structure

```
src/
│
├── assets/             # Images, SVGs, static assets
│
├── components/
│   ├── common/         # Reusable UI components
│   ├── hero/           # Hero section
│   └── layout/         # Navbar, Footer, Topbar
│
├── constants/          # Static data
│
├── layouts/            # Main layout
│
├── pages/              # Page components
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Getting Started

### Clone

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application will be available at

```
http://localhost:5173
```

---

## Available Scripts

```bash
npm run dev        # Development

npm run build      # Production build

npm run preview    # Preview production build

npm run lint       # Run oxlint
```

---

## Development Guidelines

### Components

- Keep components small and reusable.
- One component per file.
- Export components using named exports whenever possible.
- Shared UI goes inside `components/common`.

### Constants

Never hardcode navigation, services, testimonials, or feature data.

Store them inside

```
src/constants/
```

### Assets

All images and icons belong inside

```
src/assets/
```

Do not import assets from `public` unless required.

---

## Folder Naming

```
components/
pages/
layouts/
constants/
assets/
hooks/
utils/
services/
```

Use **PascalCase** for components.

Example

```
HeroSection.jsx
Navbar.jsx
Footer.jsx
```

Use **camelCase** for utility and data files.

Example

```
navigation.js
featureData.js
services.js
```

---

## Git Workflow

Create a feature branch

```bash
git checkout -b feature/<feature-name>
```

Example

```bash
feature/navbar
feature/contact-form
feature/testimonials
```

Bug fixes

```bash
bugfix/navbar-scroll
bugfix/mobile-menu
```

Hotfix

```bash
hotfix/build-error
```

---

## Commit Convention

Use Conventional Commits.

```
feat: add services section

fix: resolve navbar scroll issue

refactor: split hero component

style: update button spacing

docs: update README

perf: optimize hero animation

chore: update dependencies

build: update vite configuration
```

---

## Before Creating a Pull Request

- Project builds successfully.
- No console errors.
- Responsive on mobile, tablet, and desktop.
- No unused imports.
- Components are reusable.
- Constants are not hardcoded.
- Run

```bash
npm run build
```

before pushing.

---

## Deployment

Production

```
https://tomish.app.netlify.app
```

Build command

```bash
npm run build
```

Output directory

```
dist/
```

---

## Notes

- Do not commit `.env`.
- Keep components modular.
- Avoid duplicate code.
- Prefer reusable components over copy-paste.
- Keep imports organized.
- Follow the existing folder structure.

---

## Maintainers

Tomish Development Team
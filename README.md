# Prabhakaran — Portfolio (React)

React + Vite conversion of the original static HTML/CSS/JS portfolio, using React Router for page navigation.

## Stack
- React 19 + Vite
- react-router-dom (client-side routing, mirrors the original pages as routes)
- Original `styles.css` imported as-is (no CSS framework changes)

## Getting started
```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure
```
src/
  main.jsx              entry point, imports styles.css
  App.jsx                routes (react-router-dom)
  context/
    ThemeContext.jsx     dark/light theme state + localStorage, replaces the old theme script
  components/
    Layout.jsx            shared Navbar + <Outlet /> + Footer, scrolls to top on route change
    Navbar.jsx             nav links, theme toggle, mobile menu
    Footer.jsx
    Carousel.jsx           About page image carousel (was scripts.js carousel logic)
    ContactForm.jsx        controlled contact form (simulated submit, was scripts.js form logic)
  pages/
    Home.jsx     About.jsx     Projects.jsx     Resume.jsx     Contact.jsx
  styles.css              unmodified copy of the original stylesheet
public/
  assets/images/          static images served at /assets/images/...
  assets/documents/       place Prabhakaran_Resume.pdf here
```

## Known gaps — assets not included in the source upload
The following files are referenced by the site but weren't part of the uploaded files, so add them to
`public/assets/images/` and `public/assets/documents/` to complete the site:

- `assets/images/team-collaboration.jpg` (About page carousel)
- `assets/images/tech-conference.jpg` (About page carousel)
- `assets/images/project-ecommerce.jpg` (Projects page)
- `assets/images/project-task-app.jpg` (Projects page)
- `assets/images/project-dashboard.jpg` (Projects page)
- `assets/documents/Prabhakaran_Resume.pdf` (Resume page download + preview)

`profile.jpg` and `workspace.jpg` are already included.

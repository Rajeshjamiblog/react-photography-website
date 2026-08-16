# 📸 React Photography Portfolio

A modern, responsive photography portfolio website built from scratch using **React** and **Vite**.

This project is developed step by step while learning React concepts and applying them by building a real-world production-style application.

---

## 🚀 Project Goal

The goal of this project is to:

- Learn React from scratch
- Understand component-based architecture
- Build a professional photography portfolio website
- Create reusable UI components
- Practice configuration-driven development
- Write component-level tests
- Learn Git and GitHub workflows
- Deploy the application using Vercel

---

# ✨ Features

## Website Sections

- ✅ Responsive Navbar
- ✅ Hero section with background image
- ✅ About section
- ✅ Photography Gallery
- ✅ Services section
- ✅ Contact section
- ✅ Footer section

## Development Features

- ✅ Component-based architecture
- ✅ Reusable Container component
- ✅ Reusable Button component
- ✅ Configuration-driven content
- ✅ BEM CSS naming convention
- ✅ Responsive design
- ✅ Component testing with Vitest
- ✅ React Testing Library integration

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3

## Testing

- Vitest
- React Testing Library

## Development Tools

- Node.js
- npm
- ESLint
- Git
- GitHub
- VS Code

## Deployment

- Vercel

---

# 📂 Project Structure

```text
react-photography-website/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   │
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Navbar.css
│   │   │   │   └── Navbar.test.jsx
│   │   │   │
│   │   │   ├── Container/
│   │   │   │   ├── Container.jsx
│   │   │   │   ├── Container.css
│   │   │   │   └── Container.test.jsx
│   │   │   │
│   │   │   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       ├── Footer.css
│   │   │       └── Footer.test.jsx
│   │   │
│   │   ├── sections/
│   │   │   │
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Gallery/
│   │   │   ├── Services/
│   │   │   └── Contact/
│   │   │
│   │   └── ui/
│   │       └── Button/
│   │
│   ├── config/
│   │   ├── branding.js
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── gallery.js
│   │   ├── services.js
│   │   ├── contact.js
│   │   └── footer.js
│   │
│   ├── pages/
│   │   └── Home/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🧩 Component Architecture

The application follows a reusable component structure.

Example:

```
Home
│
├── Navbar
│
├── Hero
│
├── About
│
├── Gallery
│
├── Services
│
├── Contact
│
└── Footer
```

Each section contains:

```
Component
│
├── JSX
├── CSS
└── Test
```

Example:

```
Hero/
│
├── Hero.jsx
├── Hero.css
└── Hero.test.jsx
```

---

# 🎨 Styling Approach

The project follows:

## BEM Naming Convention

Example:

```css
.hero

.hero__title

.hero__subtitle

.hero__actions
```

Benefits:

- Clear CSS structure
- Avoids naming conflicts
- Easier maintenance

---

# ⚙️ Configuration Driven Development

Website content is separated from components.

Example:

```
config/
│
├── hero.js
├── about.js
├── services.js
└── contact.js
```

Instead of:

```jsx
<h1>
Photography Studio
</h1>
```

Content comes from:

```javascript
branding.siteName
```

Benefits:

- Easy content updates
- Cleaner components
- Better scalability

---

# 🧪 Testing

Testing is implemented using:

- Vitest
- React Testing Library


## Current Test Status

```
Test Files: 9 passed
Tests: 28 passed
```

## Covered Components

| Component | Tests |
|---|---:|
| Container | 2 |
| Navbar | 2 |
| Button | 4 |
| Hero | 4 |
| About | 3 |
| Gallery | 3 |
| Services | 3 |
| Contact | 4 |
| Footer | 3 |
| Total | 28 |

---

# ▶️ Getting Started

## Clone Repository

```bash
git clone https://github.com/<your-github-username>/react-photography-website.git
```

---

## Navigate to Project

```bash
cd react-photography-website
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Application will start:

```
http://localhost:5173
```

---

## Run Tests

```bash
npm run test
```

---

# 🌿 Git Workflow

This project follows a feature branch workflow.

Example:

```
main
│
├── feature/navbar
│
├── feature/hero
│
├── feature/about
│
├── feature/gallery
│
├── feature/services
│
├── feature/contact
│
└── feature/footer
```

Workflow:

```bash
git checkout -b feature/example

git add .

git commit -m "feat: add example"

git checkout main

git merge feature/example

git push
```

---

# 📅 Development Progress

## Completed

- [x] Repository Created
- [x] React + Vite Setup
- [x] Project Structure
- [x] Navbar
- [x] Hero Section
- [x] About Section
- [x] Gallery Section
- [x] Services Section
- [x] Contact Section
- [x] Footer Section
- [x] Responsive Layout
- [x] Component Testing

## Upcoming

- [ ] Mobile hamburger menu
- [ ] Testimonials section
- [ ] Gallery lightbox
- [ ] Contact form
- [ ] Form validation
- [ ] SEO optimization
- [ ] Image optimization
- [ ] Deployment to Vercel

---

# 🚀 Future Improvements

Planned enhancements:

- Add animations
- Add dark/light theme
- Add image filtering
- Add backend contact API
- Add CMS integration
- Improve accessibility
- Add performance optimization

---

# 👨‍💻 Author

**Rajesh Jami**

---

⭐ This project represents my journey of learning React by building a real-world photography portfolio application using modern frontend development practices.
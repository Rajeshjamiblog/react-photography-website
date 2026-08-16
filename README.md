# 📸 React Photography Portfolio

A modern, responsive photography portfolio website built using **React** and **Vite**.

This project was developed step by step to learn React concepts while building a real-world production-style website with reusable components, responsive design, testing, Git workflow, and deployment.

---

## 🌐 Live Demo

🚀 https://react-photography-website.vercel.app/

---

## 📌 Project Overview

The goal of this project is to create a professional photography portfolio website that includes:

- Modern responsive UI
- Reusable React components
- Clean project architecture
- Config-driven content management
- Component testing
- Git feature branch workflow
- Production deployment using Vercel

---

# ✨ Features

## Navigation

- Responsive navigation bar
- Desktop menu
- Mobile hamburger menu
- Mobile menu open/close functionality

## Hero Section

- Professional landing section
- Photography branding
- Call-to-action area

## About Section

- Photographer introduction
- Image and description layout
- Responsive design

## Gallery Section

- Photography image grid
- Dynamic image rendering from configuration

## Services Section

- Photography service cards
- Responsive layout

## Contact Section

- Contact information display
- Call-to-action content

## Footer Section

- Branding information
- Copyright section

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

- VS Code
- Git
- GitHub

## Deployment

- Vercel

---

# 📂 Project Structure

```text
react-photography-website/

├── public/
│   └── images/
│
├── src/
│
│   ├── assets/
│   │
│   ├── components/
│   │
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   └── Container/
│   │
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Gallery/
│   │   │   ├── Services/
│   │   │   └── Contact/
│   │
│   │   └── ui/
│   │       └── Button/
│   │
│   ├── config/
│   │
│   ├── pages/
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

# 🧪 Testing

The project uses **Vitest** and **React Testing Library**.

Current test coverage:

```
Test Files: 9 passed
Tests:      31 passed
```

Run tests:

```bash
npm run test
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/<your-github-username>/react-photography-website.git
```

## Navigate to Project

```bash
cd react-photography-website
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

# 📦 Production Build

Create production build:

```bash
npm run build
```

Output:

```
dist/
```

---

# 🌿 Git Workflow

This project follows feature branch workflow.

Example:

```text
main

 |
 |
feature/navbar

 |
 |
feature/services

 |
 |
feature/contact
```

Workflow:

```bash
git checkout -b feature/new-feature

git add .

git commit -m "feat: add new feature"

git checkout main

git merge feature/new-feature

git push
```

---

# 📈 Development Progress

## Completed

- [x] Repository Setup
- [x] React + Vite Setup
- [x] Project Structure
- [x] Navbar Component
- [x] Responsive Mobile Navbar
- [x] Hero Section
- [x] About Section
- [x] Gallery Section
- [x] Services Section
- [x] Contact Section
- [x] Footer Section
- [x] Component Testing
- [x] Responsive Styling
- [x] Vercel Deployment

## Future Improvements

- [ ] Gallery Lightbox
- [ ] Image Slider
- [ ] Animations
- [ ] SEO Optimization
- [ ] Contact Form Backend
- [ ] Custom Domain
- [ ] Performance Optimization

---

# 👨‍💻 Author

**Rajesh Jami**

Full Stack Developer  
Java | Spring Boot | React | Microservices

---

⭐ This project represents my journey of learning React by building a real-world photography portfolio application.
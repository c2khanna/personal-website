# Chaitanya Khanna — Personal Website & Portfolio

[![Website](https://img.shields.io/badge/Website-chaitanyakhanna.me-5a009d?style=flat&logo=googlechrome&logoColor=white)](https://chaitanyakhanna.me)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Google Cloud Run](https://img.shields.io/badge/Deployed%20on-Google%20Cloud%20Run-4285F4?style=flat&logo=googlecloud&logoColor=white)](https://cloud.google.com/run)

The personal portfolio website of **Chaitanya Khanna**, showcasing work experience, personal engineering projects, and a direct contact form.

**Live Site:** [https://chaitanyakhanna.me](https://chaitanyakhanna.me)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Standalone build)
- **UI & Components:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Modular SCSS (Sass), Bootstrap 5 Grid / Utilities
- **Animations:** Custom CSS morph transitions, Framer Motion, ScrollReveal
- **Email Delivery:** [Resend](https://resend.com/) via Next.js Route Handlers (`/api/contact`)
- **Containerization & Hosting:** Docker (multi-stage Alpine image), [Google Cloud Run](https://cloud.google.com/run)

---

## ✨ Features

- **About Me:** Brief introduction and engineering background.
- **Interactive Work Experience Timeline:** Visual chronological milestone markers and expandable job details with animated morphing transitions.
- **Projects Showcase:** Featured applications with tech stack tags, demo links, and GitHub repositories.
- **Contact Me Form:** Server-side email delivery powered by Resend with 1-click email reply integration, live loading states, and user feedback.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile displays.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18+ or v20+)
- `npm` (bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/c2khanna/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure environment variables for local email sending:
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=chaitanyakhanna13@gmail.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Project Structure

```text
personal-website/
├── Dockerfile                  # Multi-stage production container build
├── next.config.mjs             # Next.js config (standalone output mode)
├── package.json                # Project dependencies and build scripts
├── public/                     # Static assets (images, icons)
│   ├── assets/                 # Project logos, social icons, photos
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── api/contact/        # Serverless API route for contact form (Resend)
    │   ├── globals.scss        # Global styles and resets
    │   ├── layout.tsx          # Root layout and metadata
    │   └── page.tsx            # Main single-page portfolio layout
    ├── components/             # Reusable UI components
    │   ├── AboutMe.tsx
    │   ├── ContactMe.tsx
    │   ├── Landing.tsx
    │   ├── NavBar.tsx
    │   ├── Projects.tsx
    │   ├── Reveal.tsx
    │   └── WorkEx.tsx
    └── data/                   # Structured content data
        ├── project-data.ts     # Project list and metadata
        ├── types.ts            # TypeScript interfaces
        └── work-ex-data.ts     # Chronological work history
```

---

## 🚢 Deployment

The application is deployed on **Google Cloud Run** using a containerized multi-stage build.

### Build and Run with Docker Locally

```bash
# Build the Docker image
docker build -t personal-website .

# Run the container
docker run -p 8080:8080 -e RESEND_API_KEY=your_key personal-website
```

Access the containerized app at [http://localhost:8080](http://localhost:8080).

---

## 📬 Connect

- **Website:** [chaitanyakhanna.me](https://chaitanyakhanna.me)
- **LinkedIn:** [linkedin.com/in/chaitanya-khanna](https://www.linkedin.com/in/chaitanya-khanna/)
- **GitHub:** [@c2khanna](https://github.com/c2khanna)

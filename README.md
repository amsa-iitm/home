<div align="center">

# 🏛️ Applied Mechanics Student Association (AMSA)
### Official Web Application

**Department of Applied Mechanics & Biomedical Engineering**  
**Indian Institute of Technology Madras (IIT Madras), Chennai, India**

[![Website](https://img.shields.io/badge/Website-amsa--iitm.github.io-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://amsa-iitm.github.io/home/)
[![Email](https://img.shields.io/badge/Email-amsa%40smail.iitm.ac.in-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:amsa@smail.iitm.ac.in)
[![Deployment](https://img.shields.io/badge/Deployment-GitHub_Pages-24292e?style=for-the-badge&logo=githubpages&logoColor=white)](https://amsa-iitm.github.io/home/)

<p align="center">
  <a href="#-introduction">Introduction</a> •
  <a href="#%EF%B8%8F-tech-stack--architecture">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-content-management-data-driven-design">Content Management</a> •
  <a href="#-deployment-github-pages">Deployment</a> •
  <a href="#-contact--credits">Contact & Credits</a>
</p>

---

</div>

## 📌 Introduction

This is the official web application for the **Applied Mechanics Student Association (AMSA)** at the Department of Applied Mechanics & Biomedical Engineering, IIT Madras.

The platform serves as the central hub for:
- 🎯 **Showcasing Initiatives** — Association activities, seminars, and upcoming events.
- 🤝 **Student Support** — Academic resources, mentorship, and wellness initiatives.
- 🏆 **Celebrating Milestones** — Department achievements, awards, and student honors.
- 🔬 **Collaborations** — Industry and research collaboration inquiries.
- 📸 **Archives & Gallery** — Preserving memories, past gatherings, and department events.
- 📬 **Direct Outreach** — Seamless communication through an integrated contact form.

---

## 🛠️ Tech Stack & Architecture

| Category | Technology | Highlights |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) (TypeScript) | Type-safe, component-driven UI architecture |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and optimized production builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility styling via `@tailwindcss/vite` |
| **Routing** | [React Router v7](https://reactrouter.com/) | Declarative client-side routing & nested layouts |
| **Form Service** | [Web3Forms API](https://web3forms.com/) | Serverless form handling with honeypot anti-spam protection |
| **Icons** | [Heroicons](https://heroicons.com/) & Custom SVGs | Lightweight, scalable vector icons |
| **CI/CD & Hosting** | [GitHub Pages](https://pages.github.com/) + Actions | Automated CI/CD build and zero-downtime deployment |

---

## 📁 Project Structure

```plaintext
amsa_website_v1.0.0/
├── public/                     # Static public assets (images, documents, logos)
│   └── images/                 # Categorized assets (events, gallery, team, etc.)
├── src/
│   ├── components/             # Reusable React UI components
│   │   ├── about/              # Timeline and department history
│   │   ├── announcements/      # Notice board and archives
│   │   ├── home/               # Hero section, highlights, upcoming events
│   │   └── ...                 # Shared components (Navbar, Footer, Cards)
│   ├── data/                   # Centralized JSON data files (content management)
│   │   ├── about.json          # Department history, mission, and objectives
│   │   ├── achievements.json   # Student achievements & honors
│   │   ├── announcements.json  # Official announcements & notices
│   │   ├── contact.json        # Contact info, map embed URL, social media links
│   │   ├── events.json         # Upcoming and past event details
│   │   ├── gallery.json        # Gallery album configurations
│   │   ├── resources.json      # Student hub academic & career resources
│   │   └── team.json           # Student council & core team members
│   ├── layouts/                # Page layout wrappers (MainLayout, StudentHubLayout)
│   ├── pages/                  # Top-level page routes
│   │   ├── Home.tsx            # Homepage with hero banner and highlights
│   │   ├── About.tsx           # About AMSA and department journey
│   │   ├── Team.tsx            # Council leadership and committee directory
│   │   ├── Events.tsx          # Event listings and registrations
│   │   ├── Collaborations.tsx  # Industry, research, and outreach partnerships
│   │   ├── Gallery.tsx         # Photo galleries and albums
│   │   ├── Contact.tsx         # Contact details and Web3Forms inquiry form
│   │   ├── NotFound.tsx        # Custom 404 error page
│   │   └── student-hub/        # Student Hub portal sub-pages
│   │       ├── Home.tsx        # Hub overview
│   │       ├── ResourcesPortal.tsx # Academic papers, guides, and tools
│   │       ├── Achievements.tsx    # Hall of fame & student submissions
│   │       └── WellnessPortal.tsx  # Campus wellness, mental health, & support
│   ├── styles/                 # Global CSS, fonts, and theme definitions
│   ├── utils/                  # Helper utilities (asset paths, date formatters)
│   ├── App.tsx                 # Application route definitions
│   ├── main.tsx                # React application root mount
│   └── vite-env.d.ts           # Vite environment variable type definitions
├── .env                        # Local environment secrets (git-ignored)
├── .env.example                # Template for environment variables
├── .gitignore                  # Git ignore specifications
├── index.html                  # Main HTML template
├── package.json                # Dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.js              # Vite build plugins & gallery watcher plugin
```

---

## 📝 Content Management (Data-Driven Design)

All text content, member profiles, announcements, and events are completely decoupled from React code. You can update website content simply by editing the corresponding JSON file in `src/data/`:

| Section | Data File | Instructions |
| :--- | :--- | :--- |
| 👥 **Team & Council** | `src/data/team.json` | Add or update office bearers, roles, and profiles. |
| 📅 **Events** | `src/data/events.json` | Post new seminars, workshops, or competitions. |
| 📢 **Announcements** | `src/data/announcements.json` | Broadcast updates to the notice board. |
| 📚 **Student Resources** | `src/data/resources.json` | Add academic resources, guides, and links. |
| 📍 **Contact & Socials** | `src/data/contact.json` | Update office location, phone, and social handles. |
| 🖼️ **Gallery** | `src/data/gallery.json`<br>`public/images/gallery/<album>/` | Edit metadata or place images in the album folder. The built-in Vite gallery watcher automatically scans and generates `gallery.expanded.json`. |

---

## 🌐 Deployment (GitHub Pages)

This project includes an automated GitHub Actions deployment pipeline located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Steps to Deploy

1. **Push Changes to GitHub**
   ```bash
   git add .
   git commit -m "Update AMSA website"
   git push origin main
   ```

2. **Configure Repository Settings**
   - Go to **Settings** > **Pages** in your GitHub repository.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Automatic Deployment**
   - The workflow triggers automatically on push to `main` (or `master`).
   - It runs `npm ci` and `npm run build`, then deploys the `dist/` directory to GitHub Pages.

---

## 🏛️ Contact & Credits

**Applied Mechanics Student Association (AMSA)**  
Department of Applied Mechanics & Biomedical Engineering  
Mechanical Sciences Block, Indian Institute of Technology Madras  
Chennai – 600 036, Tamil Nadu, India  

| Channel | Details |
| :--- | :--- |
| 📧 **Email** | [amsa@smail.iitm.ac.in](mailto:amsa@smail.iitm.ac.in) |
| 📞 **Phone** | [+91 44 2257 4050](tel:+914422574050) |
| 💼 **LinkedIn** | [Applied Mechanics & Biomedical Engineering](https://in.linkedin.com/company/applied-mechanics-biomedical-engineering) |
| 📷 **Instagram** | [@amsa_iitm](https://instagram.com/amsa_iitm) |
| ▶️ **YouTube** | [@AMBE-IITM](https://www.youtube.com/@AMBE-IITM) |

---

<div align="center">

Designed and Developed with ❤️ by **Team AMSA**  
*All rights reserved.*

</div>

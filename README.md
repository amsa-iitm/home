╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   🏛️  APPLIED MECHANICS STUDENT ASSOCIATION (AMSA)                           ║
║   🌐  OFFICIAL WEB APPLICATION                                               ║
║                                                                              ║
║   Department of Applied Mechanics & Biomedical Engineering                   ║
║   Indian Institute of Technology Madras (IIT Madras), Chennai, India         ║
║                                                                              ║
║   🔗 Website: https://amsa-iitm.github.io/home/                              ║
║   📬 Contact: amsa@smail.iitm.ac.in                                          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝


════════════════════════════════════════════════════════════════════════════════
  📌 1. INTRODUCTION
════════════════════════════════════════════════════════════════════════════════
This is the official web application for the Applied Mechanics Student Association
(AMSA) at the Department of Applied Mechanics & Biomedical Engineering, IIT Madras.

The platform serves as the central hub for:
  🎯 Showcasing association activities, initiatives, and upcoming events.
  🤝 Facilitating student support, academic resources, and wellness initiatives.
  🏆 Celebrating department achievements and student milestones.
  🔬 Managing industry and research collaboration inquiries.
  📸 Archiving past memories and galleries of department gatherings.
  📬 Enabling direct communication with the team via a built-in Contact form.


════════════════════════════════════════════════════════════════════════════════
  🛠️ 2. TECH STACK & ARCHITECTURE
════════════════════════════════════════════════════════════════════════════════
  🔹 Framework    : React 19 (TypeScript)
  🔹 Build Tool   : Vite 6 (Lightning-fast HMR)
  🔹 Styling      : Tailwind CSS v4 (@tailwindcss/vite)
  🔹 Routing      : React Router v7
  🔹 Form Service : Web3Forms API (with honeypot anti-spam protection)
  🔹 Icons        : Heroicons & Custom Inline SVGs
  🔹 Deployment   : GitHub Pages with automated GitHub Actions CI/CD


════════════════════════════════════════════════════════════════════════════════
  📁 3. PROJECT STRUCTURE
════════════════════════════════════════════════════════════════════════════════
amsa_website_v1.0.0/
├── 📂 public/                     Static public assets (images, documents, logos)
│   └── 📁 images/                 Categorized assets (events, gallery, team, etc.)
├── 📂 src/
│   ├── 📁 components/             Reusable React UI components
│   │   ├── 📁 about/              Timeline and about sections
│   │   ├── 📁 announcements/      Notice board and archives
│   │   ├── 📁 home/               Hero, highlights, and upcoming events
│   │   └── ...                    Shared components (Navbar, Footer, Cards)
│   ├── 📁 data/                   Centralized JSON data files (content management)
│   │   ├── 📄 about.json          Department history, mission, and objectives
│   │   ├── 📄 achievements.json   Student achievements & honors
│   │   ├── 📄 announcements.json  Official announcements & notices
│   │   ├── 📄 contact.json        Contact info, map embed URL, social media links
│   │   ├── 📄 events.json         Upcoming and past event details
│   │   ├── 📄 gallery.json        Gallery album configurations
│   │   ├── 📄 resources.json      Student hub academic & career resources
│   │   └── 📄 team.json           Student council & core team members
│   ├── 📁 layouts/                Page layout wrappers (MainLayout, StudentHubLayout)
│   ├── 📁 pages/                  Top-level page routes
│   │   ├── 📄 Home.tsx            Homepage with hero banner and highlights
│   │   ├── 📄 About.tsx           About AMSA and department journey
│   │   ├── 📄 Team.tsx            Council leadership and committee directory
│   │   ├── 📄 Events.tsx          Event listings and registrations
│   │   ├── 📄 Collaborations.tsx  Industry, research, and outreach partnerships
│   │   ├── 📄 Gallery.tsx         Photo galleries and albums
│   │   ├── 📄 Contact.tsx         Contact details and Web3Forms inquiry form
│   │   ├── 📄 NotFound.tsx        Custom 404 error page
│   │   └── 📁 student-hub/        Student Hub portal sub-pages
│   │       ├── 📄 Home.tsx        Hub overview
│   │       ├── 📄 ResourcesPortal Academic papers, guides, and tools
│   │       ├── 📄 Achievements.tsx Hall of fame & student submissions
│   │       └── 📄 WellnessPortal  Campus wellness, mental health, & support
│   ├── 📁 styles/                 Global CSS, fonts, and theme definitions
│   ├── 📁 utils/                  Helper utilities (asset paths, date formatters)
│   ├── 📄 App.tsx                 Application route definitions
│   ├── 📄 main.tsx                React application root mount
│   └── 📄 vite-env.d.ts           Vite environment variable type definitions
├── ⚙️ .env                        Local environment secrets (git-ignored)
├── ⚙️ .env.example                Template for environment variables
├── ⚙️ .gitignore                  Git ignore specifications
├── 📄 index.html                  Main HTML template
├── 📦 package.json                Dependencies and npm scripts
├── ⚙️ tsconfig.json               TypeScript compiler configuration
└── ⚙️ vite.config.js              Vite build plugins & gallery watcher plugin


════════════════════════════════════════════════════════════════════════════════
  📝 4. CONTENT MANAGEMENT (DATA-DRIVEN DESIGN)
════════════════════════════════════════════════════════════════════════════════
All text content, member profiles, announcements, and events are completely
decoupled from React code. You can update website content simply by editing
the corresponding JSON file in src/data/:

  👥 Team & Council:
     Edit `src/data/team.json` to add or update office bearers, roles, and profiles.

  📅 Events:
     Edit `src/data/events.json` to post new seminars, workshops, or competitions.

  📢 Announcements:
     Edit `src/data/announcements.json` to broadcast updates to the notice board.

  📚 Student Resources:
     Edit `src/data/resources.json` to add academic resources, guides, and links.

  📍 Contact Information & Socials:
     Edit `src/data/contact.json` to update office location, phone, and social handles.

  🖼️ Gallery:
     Edit `src/data/gallery.json` or place images in `public/images/gallery/<album>/`.
     The built-in Vite gallery watcher plugin will automatically scan the folder
     and generate `gallery.expanded.json`.


════════════════════════════════════════════════════════════════════════════════
  🌐 5. DEPLOYMENT (GITHUB PAGES)
════════════════════════════════════════════════════════════════════════════════
This project includes an automated GitHub Actions deployment pipeline located at:
`.github/workflows/deploy.yml`

To deploy:
  1️⃣ Push the codebase to the `main` or `master` branch on GitHub:
         git add .
         git commit -m "Update AMSA website"
         git push origin main

  2️⃣ In your GitHub repository:
     • Go to "Settings" > "Pages".
     • Under "Build and deployment", set "Source" to "GitHub Actions".

  3️⃣ The workflow will automatically trigger on push, run `npm ci` and `npm run build`,
     and deploy the `dist/` directory to GitHub Pages.


════════════════════════════════════════════════════════════════════════════════
  🏛️ 6. CONTACT & CREDITS
════════════════════════════════════════════════════════════════════════════════
Applied Mechanics Student Association (AMSA)
Department of Applied Mechanics & Biomedical Engineering
Mechanical Sciences Block, Indian Institute of Technology Madras
Chennai - 600 036, Tamil Nadu, India

  📧 Email     : amsa@smail.iitm.ac.in
  📞 Phone     : +91 44 2257 4050
  💼 LinkedIn  : https://in.linkedin.com/company/applied-mechanics-biomedical-engineering
  📷 Instagram : https://instagram.com/amsa_iitm
  ▶️ YouTube   : https://www.youtube.com/@AMBE-IITM
  
  Designed and Developed with ❤️ by Team AMSA
  All rights reserved.
════════════════════════════════════════════════════════════════════════════════

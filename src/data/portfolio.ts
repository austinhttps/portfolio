export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  badgeIcon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  tags: string[];
  url?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    handle: string;
    headline: string;
    location: string;
    bio: string;
    avatarUrl?: string;
    resumeUrl: string;
    contactEmail: string;
    socials: {
      github: string;
      linkedin: string;
      twitter?: string;
      email: string;
    };
  };
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  experience: Experience[];
  education: Education[];
  blogPosts: BlogPost[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Austin Mirando",
    handle: "austinhttps",
    headline: "Cybersecurity Student & Eagle Scout",
    location: "Raleigh, NC",
    bio: `My background is in project management, public relations, and stakeholder communications within a national youth development organization.\n\n

        I’ve led large-scale projects, coordinated outreach campaigns, and worked across teams to improve operations and meet shared goals. Those experiences have shaped my approach to leadership: support the people around me, communicate clearly, and follow through.\n\n

        I’m currently pursuing an Associate in Arts (AA) at Wake Technical Community College and plan to continue toward a bachelor’s degree in cybersecurity at the University of North Carolina Wilmington (UNCW). My goal is to bring my leadership and risk management experience into information security, with a focus on security awareness, compliance, and protecting organizational systems and data.\n\n

        I bring experience in public speaking, technical communication, and operational planning. I’m also building hands-on skills in networking, systems security, and security compliance as I prepare for a career in cybersecurity.`,
    resumeUrl: "https://linkedin.com/in/austinmirando/",
    contactEmail: "austinjmirando@gmail.com",
    socials: {
      github: "https://github.com/austinhttps",
      linkedin: "https://linkedin.com/in/austinmirando/",
      email: "mailto:austinjmirando@gmail.com",
    },
  },
  skills: [
    {
      title: "Security & Core Concepts",
      skills: [
        { name: "Application Security" },
        { name: "Network Security" },
        { name: "Threat Analysis" },
        { name: "Penetration Testing Basics" },
        { name: "Cryptography & Auth" },
        { name: "Privacy-First Systems" },
        { name: "AI Security" },
      ],
    },
    {
      title: "Languages & Runtimes",
      skills: [
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Python" },
        { name: "C#" },
        { name: "HTML5 / CSS3" },
        { name: "SQL" },
      ],
    },
    {
      title: "Frontend & Interactive",
      skills: [
        { name: "Next.js" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Three.js" },
      ],
    },
    {
      title: "Tools, Systems & DevOps",
      skills: [
        { name: "Antigravity / Codex" },
        { name: "Git & GitHub Actions" },
        { name: "Linux / Bash" },
        { name: "Docker" },
        { name: "Wireshark / Nmap" },
        { name: "Yjs / WebSockets" },
        { name: "Vercel" },
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "MiteAI — On-Device Private Intelligence",
      description: "Native Windows assistant engineered to execute local language models and an on-device private knowledge base with zero telemetry and complete data isolation.",
      tags: ["C#", ".NET", "Local LLMs", "Windows", "Privacy AI"],
      featured: true,
      demoUrl: "https://github.com/austinhttps/miteai",
      githubUrl: "https://github.com/austinhttps/miteai",
      metrics: "100% On-Device",
    },
    {
      id: "project-2",
      title: "ScribblBoard — Real-Time Collaborative Canvas",
      description: "Multiplayer-ready collaborative whiteboard utilizing React, Konva, and Yjs CRDT synchronization with local persistence and low-latency drawing capabilities.",
      tags: ["TypeScript", "React", "Konva", "Yjs", "WebSockets"],
      featured: true,
      demoUrl: "https://scribblboard.vercel.app",
      githubUrl: "https://github.com/austinhttps/scribblboard",
      metrics: "CRDT Sync",
    },
    {
      id: "project-3",
      title: "Kitchen Rush — Cooperative Multiplayer Simulator",
      description: "Fast-paced cooperative cooking game featuring an asynchronous Python game server communicating with browser-based interactive client sessions.",
      tags: ["Python", "JavaScript", "WebSockets", "Game Design"],
      featured: true,
      demoUrl: "https://kitchen-rush-one.vercel.app",
      githubUrl: "https://github.com/austinhttps/kitchenrush",
      metrics: "3D Canvas",
    },
    {
      id: "project-4",
      title: "PixelMirror — Win11<>Andriod Mirroring System",
      description: "A WinUI and APK application designed to connect Pixel phones to Windows computers.",
      tags: ["C++", "Kotlin", "Dart", "Python", "Windows", "CMake", "C", "Andriod"],
      featured: true,
      demoUrl: "https://github.com/austinhttps/pixelmirror",
      githubUrl: "https://github.com/austinhttps/pixelmirror",
      metrics: "Cross-Platform",
    },
    {
      id: "project-5",
      title: "Atmosphere — Lightweight Weather Web Application",
      description: "A modern, responsive, mobile-first weather web application powered by the free Open-Meteo API. Built with Vanilla JavaScript (ESModules), Vite, and Vitest.",
      tags: ["API", "JavaScript", "Open-Meteo", "Vite", "HTML", "CSS", "Responsive"],
      featured: true,
      demoUrl: "https://atmosphere.vercel.app",
      githubUrl: "https://github.com/austinhttps/atmosphere",
      metrics: "Open-Meteo API",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Eagle Scout",
      issuer: "Scouting America (BSA)",
      issueDate: "Earned",
      credentialUrl: "https://www.credly.com/badges/843da9f2-9957-4c54-9010-62336c5a0cb7",
    },
    {
      id: "cert-2",
      name: "Vigil Honor",
      issuer: "Order of the Arrow, Scouting America",
      issueDate: "Awarded",
      credentialUrl: "https://oa-scouting.org/about/membership",
    },
    {
      id: "cert-4",
      name: "National Leadership Seminar (NLS)",
      issuer: "Order of the Arrow, Scouting America",
      issueDate: "Completed",
      credentialUrl: "https://oa-scouting.org/training/national-leadership-seminar",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Section Vice Chief of Training",
      company: "Order of the Arrow — Section E8",
      location: "Hybrid, NC",
      period: "2025 — Present",
      description: [
        "Direct and manage sectional training initiatives and leadership development across multiple lodges in North Carolina.",
        "Oversee the Order of the Arrow Experience (OAX) and training syllabi delivery at regional conclaves for hundreds of attendees.",
        "Collaborate with youth leadership and adult advisors to maintain high-impact curriculum standards and communications.",
      ],
      skills: ["Leadership Development", "Public Speaking", "Instructional Design", "Event Operations"],
    },
    {
      id: "exp-2",
      role: "National Subcommittee Member",
      company: "Order of the Arrow, Scouting America",
      location: "US",
      period: "2024 — Present",
      description: [
        "Provide year-round support for brand strategy for all of the Order of the Arrow's subbrands, releasing to 90,000+ members.",
        "Served on communications and technical staff for the National Order of the Arrow Conference (NOAC) and Operation Arrow.",
        "Supported media operations, digital content distribution, and national attendee engagement systems.",
      ],
      skills: ["Digital Communications", "Event Tech", "Technical Writing", "Team Coordination"],
    },
    {
      id: "exp-3",
      role: "Cybersecurity Student",
      company: "Independent Projects & Hackathons",
      location: "Raleigh, NC",
      period: "2026 — Present",
      description: [
        "Developed full-stack web applications, real-time multiplayer canvases, and privacy-preserving tools.",
        "Participated in collegiate hackathon initiatives such as Hack Days & AI development competitions.",
        "Conducted security analysis, local AI inference experiments, and secure web interface development.",
      ],
      skills: ["TypeScript", "Next.js", "Python", "C#", "Network Security", "Cybersecurity", "AI"],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "AI Club Secretary",
      institution: "Wake Technical Community College",
      period: "Enrolled",
      details: "Study in network defense, ethical hacking, digital forensics, operating system security, and scripting.",
    },
    {
      id: "edu-2",
      degree: "Associate in Arts (AA)",
      institution: "Wake Technical Community College",
      period: "CCP Program via Dual Enrollment",
      details: "Completing collegiate general education core curriculum concurrently while graduating high school",
    },
  ],
  blogPosts: [
    {
      id: "post-1",
      title: "Building Privacy-First AI on Local Hardware",
      snippet: "Architectural patterns for running on-device inference with zero cloud data leaks, telemetry isolation, and local vector retrieval.",
      date: "Nov 2026",
      readTime: "5 min read",
      tags: ["AI", "Security", "Privacy"],
      url: "#",
    },
    {
      id: "post-2",
      title: "Real-Time Canvas Collaboration with CRDTs & Yjs",
      snippet: "Lessons learned while building ScribblBoard: handling latency compensation, conflict-free state resolution, and local-first persistence.",
      date: "Aug 2026",
      readTime: "7 min read",
      tags: ["WebSockets", "CRDT", "React"],
      url: "#",
    },
    {
      id: "post-3",
      title: "Essential Defensive Tactics for Modern Web Applications",
      snippet: "A practical breakdown of Content Security Policy (CSP), sanitize pipelines, and header hardening in Next.js App Router applications.",
      date: "Apr 2026",
      readTime: "6 min read",
      tags: ["Cybersecurity", "Next.js", "AppSec"],
      url: "#",
    },
  ],
};

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
  credentialId?: string;
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
    bio: "My background is in project management, public relations, and stakeholder communications within a national youth development organization. I’ve led large-scale projects, coordinated outreach campaigns, and worked across teams to improve operations and meet shared goals. Those experiences have shaped my approach to leadership: support the people around me, communicate clearly, and follow through. I’m currently pursuing an Associate in Arts at Wake Technical Community College and plan to continue toward a bachelor’s degree in cybersecurity. My goal is to bring my leadership and risk management experience into information security, with a focus on security awareness, compliance, and protecting organizational systems and data. I bring experience in public speaking, technical communication, and operational planning. I’m also building hands-on skills in networking, systems security, and security compliance as I prepare for a career in cybersecurity.",
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
        { name: "Next.js (App Router)" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Konva / Canvas" },
        { name: "Three.js / 3D Web" },
        { name: "Framer Motion" },
      ],
    },
    {
      title: "Tools, Systems & DevOps",
      skills: [
        { name: "Git & GitHub Actions" },
        { name: "Linux / Bash" },
        { name: "Docker" },
        { name: "Wireshark / Nmap" },
        { name: "Yjs / WebSockets" },
        { name: "Vercel" },
        { name: "Antigravity / Codex" },
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "AeroLookup — Aviation Intelligence & Flight Tracking",
      description: "High-performance aviation lookup application built with Next.js App Router, React, Tailwind CSS, TypeScript, and interactive Leaflet maps for live aircraft search and route tracking.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "React"],
      featured: false,
      demoUrl: "https://aerolookup.vercel.app",
      githubUrl: "https://github.com/austinhttps/aerolookup",
      metrics: "Live Aviation Data",
    },
    {
      id: "project-2",
      title: "MiteAI — On-Device Private Intelligence",
      description: "Native Windows assistant engineered to execute local language models and an on-device private knowledge base with zero telemetry and complete data isolation.",
      tags: ["C#", ".NET", "Local LLMs", "Windows", "Privacy AI"],
      featured: true,
      demoUrl: "https://github.com/austinhttps/miteai",
      githubUrl: "https://github.com/austinhttps/miteai",
      metrics: "100% On-Device",
    },
    {
      id: "project-3",
      title: "ScribblBoard — Real-Time Collaborative Canvas",
      description: "Multiplayer-ready collaborative whiteboard utilizing React, Konva, and Yjs CRDT synchronization with local persistence and low-latency drawing capabilities.",
      tags: ["TypeScript", "React", "Konva", "Yjs", "WebSockets"],
      featured: true,
      demoUrl: "https://scribblboard.vercel.app",
      githubUrl: "https://github.com/austinhttps/scribblboard",
      metrics: "CRDT Sync",
    },
    {
      id: "project-4",
      title: "Sweet Tooth Lemon Pie — Interactive 3D Fragrance Experience",
      description: "Interactive 3D web experience built with TypeScript, Three.js, and custom shaders celebrating the aesthetic and sensory notes of Sabrina Carpenter's perfume.",
      tags: ["TypeScript", "Three.js", "WebGL", "Interactive UI"],
      featured: false,
      demoUrl: "https://sweettoothlemonpie.vercel.app",
      githubUrl: "https://github.com/austinhttps/sweettoothlemonpie",
    },
    {
      id: "project-5",
      title: "Kitchen Rush — Cooperative Multiplayer Simulator",
      description: "Fast-paced cooperative cooking game featuring an asynchronous Python game server communicating with browser-based interactive client sessions.",
      tags: ["Python", "JavaScript", "WebSockets", "Game Design"],
      featured: false,
      demoUrl: "https://kitchen-rush-one.vercel.app",
      githubUrl: "https://github.com/austinhttps/kitchenrush",
    },
    {
      id: "project-6",
      title: "Nightly Discography — Immersive Web Audio Player",
      description: "Atmospheric, sound-reactive discography browser and web audio player tailored for the musical releases of the alternative-pop band Nightly.",
      tags: ["JavaScript", "Web Audio API", "Tailwind CSS", "UI/UX"],
      featured: false,
      demoUrl: "https://nightlydiscography.vercel.app",
      githubUrl: "https://github.com/austinhttps/nightlydiscography",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Eagle Scout Award",
      issuer: "Scouting America (BSA)",
      issueDate: "Earned",
      credentialId: "EAGLE-RANK",
      credentialUrl: "https://www.scouting.org",
      badgeIcon: "security",
    },
    {
      id: "cert-2",
      name: "Vigil Honor Member",
      issuer: "Order of the Arrow",
      issueDate: "Conferred",
      credentialId: "VIGIL-HONOR",
      credentialUrl: "https://oa-scouting.org",
      badgeIcon: "code",
    },
    {
      id: "cert-4",
      name: "National Leadership Seminar (NLS)",
      issuer: "Order of the Arrow, Scouting America",
      issueDate: "Completed",
      credentialId: "NLS-GRAD",
      credentialUrl: "https://oa-scouting.org/training/national-leadership-seminar",
      badgeIcon: "cloud",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Section Vice Chief of Training",
      company: "Order of the Arrow — Section E8",
      location: "North Carolina",
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
      role: "National Communications Staff",
      company: "Order of the Arrow, Scouting America",
      location: "Remote / National Conferences",
      period: "2024 — Present",
      description: [
        "Served on communications and technical staff for the National Order of the Arrow Conference (NOAC) and Operation Arrow.",
        "Supported media operations, digital content distribution, and national attendee engagement systems.",
      ],
      skills: ["Digital Communications", "Event Tech", "Technical Writing", "Team Coordination"],
    },
    {
      id: "exp-3",
      role: "Cybersecurity & Software Developer",
      company: "Independent Projects & Hackathons",
      location: "Raleigh, NC",
      period: "2026 — Present",
      description: [
        "Developed full-stack web applications, real-time multiplayer canvases, and privacy-preserving tools.",
        "Participated in collegiate hackathon initiatives such as Hack Days (Thinking Machines Club / Hack_NCState).",
        "Conducted security analysis, local AI inference experiments, and secure web interface development.",
      ],
      skills: ["TypeScript", "Next.js", "Python", "C#", "Network Security"],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "AI Club Secretary",
      institution: "Wake Technical Community College",
      period: "Enrolled",
      details: "Comprehensive study in network defense, ethical hacking, digital forensics, operating system security, and scripting.",
    },
    {
      id: "edu-2",
      degree: "Associate in Arts (AA)",
      institution: "Wake Technical Community College",
      period: "CCP Program via Dual Enrollment",
      details: "Completing collegiate general education core curriculum concurrently while graduating high school.",
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

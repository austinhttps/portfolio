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
  badgeIcon?: string; // e.g. "cloud", "security", "ai", "code"
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
    name: "Alex Rivera",
    headline: "Full-Stack Software Engineer & Cloud Architect",
    location: "Seattle, WA • Open to Remote",
    bio: "Passionate software craftsman building resilient distributed systems, intuitive user interfaces, and scalable cloud solutions. Guided by clean design, meticulous engineering, and continuous learning.",
    resumeUrl: "#",
    contactEmail: "alex.rivera@example.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "mailto:alex.rivera@example.com",
    },
  },
  skills: [
    {
      title: "Languages & Runtimes",
      skills: [
        { name: "TypeScript" },
        { name: "Python" },
        { name: "Go" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "Rust (Beginner)" },
      ],
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React 19" },
        { name: "Next.js (App Router)" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
        { name: "HTML5 / CSS3 / Web APIs" },
        { name: "React Native" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js" },
        { name: "FastAPI" },
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "GraphQL" },
        { name: "gRPC" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Amazon Web Services (AWS)" },
        { name: "Docker & Containerization" },
        { name: "Kubernetes" },
        { name: "Terraform (IaC)" },
        { name: "CI/CD (GitHub Actions)" },
        { name: "Vercel / Cloudflare" },
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "AuraFlow - Distributed Event Processor",
      description: "High-throughput streaming analytics platform handling over 50,000 events/second with sub-10ms delivery latency.",
      tags: ["Go", "Kafka", "PostgreSQL", "Docker", "Prometheus"],
      featured: true,
      demoUrl: "https://example.com/auraflow",
      githubUrl: "https://github.com/example/auraflow",
      metrics: "50k+ msgs/sec",
    },
    {
      id: "project-2",
      title: "Zenith Cloud Observability Suite",
      description: "Real-time infrastructure health monitor with AI anomaly detection, distributed tracing visualization, and telemetry dashboards.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "AWS"],
      featured: true,
      demoUrl: "https://example.com/zenith",
      githubUrl: "https://github.com/example/zenith",
      metrics: "99.99% Uptime",
    },
    {
      id: "project-3",
      title: "Bloom Docs - Collaborative Knowledge Base",
      description: "Local-first markdown editor with end-to-end encryption, multi-peer real-time CRDT synchronization, and custom plugin system.",
      tags: ["React", "TypeScript", "WebSockets", "IndexedDB", "Tailwind"],
      featured: true,
      demoUrl: "https://example.com/bloom",
      githubUrl: "https://github.com/example/bloom",
      metrics: "12,000+ GitHub Stars",
    },
    {
      id: "project-4",
      title: "Kintsugi AI - Intelligent Incident Post-Mortem",
      description: "Automated root-cause analysis agent correlating microservice logs and GitHub commits during outages.",
      tags: ["Python", "FastAPI", "Gemini API", "Pinecone", "Next.js"],
      featured: false,
      demoUrl: "https://example.com/kintsugi",
      githubUrl: "https://github.com/example/kintsugi",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      issueDate: "Oct 2025",
      expiryDate: "Oct 2028",
      credentialId: "AWS-PSA-920184",
      credentialUrl: "https://aws.amazon.com/verification",
      badgeIcon: "cloud",
    },
    {
      id: "cert-2",
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Linux Foundation / CNCF",
      issueDate: "Jan 2025",
      expiryDate: "Jan 2028",
      credentialId: "CKA-782190",
      credentialUrl: "https://www.cncf.io/certification/cka/",
      badgeIcon: "code",
    },
    {
      id: "cert-3",
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      issueDate: "Aug 2024",
      expiryDate: "Aug 2026",
      credentialId: "HC-TA-104928",
      credentialUrl: "https://www.credly.com",
      badgeIcon: "security",
    },
    {
      id: "cert-4",
      name: "Google Cloud Certified Professional Cloud Architect",
      issuer: "Google Cloud",
      issueDate: "Apr 2024",
      expiryDate: "Apr 2027",
      credentialId: "GCP-PCA-449102",
      credentialUrl: "https://cloud.google.com/certification",
      badgeIcon: "cloud",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Software Engineer",
      company: "Sakura Cloud Systems",
      location: "Seattle, WA",
      period: "2024 — Present",
      description: [
        "Architected and deployed high-performance microservices serving 4M+ daily active enterprise users.",
        "Reduced cloud infrastructure costs by 34% through container rightsizing and dynamic auto-scaling policies.",
        "Mentored junior and mid-level engineers across distributed design patterns and code quality standards.",
      ],
      skills: ["Go", "Next.js", "Kubernetes", "AWS", "PostgreSQL"],
    },
    {
      id: "exp-2",
      role: "Full-Stack Software Engineer",
      company: "Novus Digital Labs",
      location: "San Francisco, CA (Remote)",
      period: "2022 — 2024",
      description: [
        "Engineered full-stack features using Next.js and FastAPI, decreasing page load times (LCP) by 45%.",
        "Implemented end-to-end testing and CI/CD automation pipelines resulting in 99.8% regression-free releases.",
        "Collaborated with product designers to create accessible, WCAG AA compliant design systems.",
      ],
      skills: ["TypeScript", "React", "Python", "Docker", "Tailwind CSS"],
    },
    {
      id: "exp-3",
      role: "Software Engineering Intern",
      company: "Apex Tech Innovations",
      location: "Boston, MA",
      period: "2021 — 2022",
      description: [
        "Developed internal developer tooling and observability dashboards using React and Express.",
        "Refactored legacy REST endpoints to typed GraphQL schemas, improving query execution time.",
      ],
      skills: ["JavaScript", "React", "Node.js", "SQL"],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.S. in Computer Science",
      institution: "University of Washington",
      period: "2018 — 2022",
      details: "Focus on Distributed Systems, Cloud Architecture, and Human-Computer Interaction. Dean's List Honors.",
    },
  ],
  blogPosts: [
    {
      id: "post-1",
      title: "Building Resilient Event-Driven Architectures with Go and Kafka",
      snippet: "Key patterns, dead-letter queues, and idempotency strategies learned from scaling event processing pipelines under extreme load.",
      date: "Feb 14, 2026",
      readTime: "6 min read",
      tags: ["Go", "Architecture", "Kafka"],
      url: "#",
    },
    {
      id: "post-2",
      title: "Mastering Next.js Server Components and Micro-Interactions",
      snippet: "How to combine React Server Components with Framer Motion for buttery-smooth user journeys without payload bloat.",
      date: "Dec 05, 2025",
      readTime: "8 min read",
      tags: ["Next.js", "React", "Design"],
      url: "#",
    },
    {
      id: "post-3",
      title: "The Zero-Downtime Migration Checklist for Postgres",
      snippet: "A practical step-by-step engineering playbook for non-blocking column additions, schema migrations, and index rebuilds in production.",
      date: "Sep 28, 2025",
      readTime: "5 min read",
      tags: ["Databases", "DevOps", "PostgreSQL"],
      url: "#",
    },
  ],
};

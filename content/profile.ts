import type {
  Award,
  Education,
  Experience,
  Profile,
  Project,
  ResearchItem,
  SkillGroup,
} from "@/lib/types";

/**
 * Single source of truth for every piece of content on the site.
 *
 * Synced to the resume dated July 2026. When the resume changes, this is the
 * only file that should need to change — components read from here and never
 * hard-code copy of their own.
 */

export const profile: Profile = {
  name: "Alex Thuruthel",
  role: "Software Engineer",
  headline: "Software Engineer building backend systems and AI infrastructure",
  tagline: "I build backend systems and AI infrastructure.",
  summary:
    "Software engineer at Bridgera, where I build the backend for an enterprise AI-agent platform — event-driven orchestration, multi-tenant data modelling, and validated structured extraction from third-party systems. I care about systems that stay correct and resumable under failure.",
  about: [
    "I'm a software engineer working on backend and distributed systems, currently at Bridgera in Hyderabad. My day-to-day is building the execution layer of an enterprise AI-agent platform: event-driven workflows on AWS Step Functions and Lambda, multi-tenant data models, and extraction pipelines that return validated structured data from systems that have no API at all.",
    "A lot of my work sits where AI meets infrastructure that has to be trustworthy. That means explicit job states and resumable workflows rather than fire-and-forget scripts, configuration-driven onboarding instead of per-customer code, and treating failure as the expected case. I've also built retrieval-augmented services over financial data, and a distributed training system that keeps raw data isolated on client nodes.",
    "I graduated from IIIT Hyderabad with a B.Tech in Computer Science Engineering in July 2026. Outside of work I'm usually reading about distributed systems, mechanism design, or quantitative finance — and occasionally writing C for fun.",
  ],
  resumePath: "/resume.pdf",
  contact: {
    email: "alexthuruthel04@gmail.com",
    phone: "+91 90370 44802",
    location: "Hyderabad, India",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/alext04",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/alex-thuruthel-a2a8b123b",
        external: true,
      },
      {
        label: "Email",
        href: "mailto:alexthuruthel04@gmail.com",
      },
    ],
  },
};

export const experiences: Experience[] = [
  {
    company: "Bridgera",
    title: "Software Engineer",
    location: "Hyderabad, India",
    period: "Jul 2026 – Present",
    startDate: "2026-07",
    highlights: [
      "Build backend components for an enterprise AI-agent platform, combining direct HTTP extraction, browser automation, and visual fallbacks to return validated structured data from third-party API-less portals.",
      "Designed asynchronous, event-driven execution with AWS Step Functions, Lambda, DynamoDB, S3, and Secrets Manager, including explicit job states and resumable workflows.",
      "Developed multi-tenant source-profile APIs and data models for authentication requirements and reusable extraction strategies, enabling configuration-driven onboarding of new data sources.",
    ],
    stack: [
      "AWS Step Functions",
      "Lambda",
      "DynamoDB",
      "S3",
      "Secrets Manager",
      "Browser Automation",
    ],
  },
  {
    company: "Qonfido",
    title: "Founder's Office Intern — Backend & AI Systems",
    location: "Remote, Bengaluru",
    period: "May 2025 – Sep 2025",
    startDate: "2025-05",
    endDate: "2025-09",
    highlights: [
      "Built a financial insights service with FastAPI and PostgreSQL for real-time NSE market-data ingestion and automated user reporting.",
      "Worked directly with founders to develop a RAG-based assistant that retrieved context from financial data and documents for personalized investment insights.",
      "Developed analytics pipelines and RESTful admin endpoints for monitoring system health and downstream processing.",
    ],
    stack: ["FastAPI", "PostgreSQL", "RAG", "REST APIs"],
  },
  {
    company: "Times Of Loans",
    title: "Software Intern",
    location: "Hyderabad, India",
    period: "Jan 2024 – Apr 2024",
    startDate: "2024-01",
    endDate: "2024-04",
    highlights: [
      "Built a cross-platform payments application integrating Firebase Authentication, Firestore, and Razorpay APIs for secure payments and real-time user-data synchronization.",
    ],
    stack: ["Firebase Auth", "Firestore", "Razorpay"],
  },
];

export const research: ResearchItem[] = [
  {
    title: "Custom Federated Learning Framework",
    field: "Distributed Systems · Privacy-Preserving ML",
    status: "Ongoing",
    period: "Sep 2025 – Present",
    problem:
      "Centralised training requires pooling raw data, which is often impossible for privacy or regulatory reasons. Most federated frameworks either leak data through the aggregation path or assume clients are reliable.",
    approach: [
      "Designed a distributed training system with Ray for dynamic client registration, training, aggregation, and fault-tolerant task execution, while keeping raw data isolated on client nodes.",
      "Secured client–server communication with WireGuard and used LoRA adapters to reduce communication overhead during model updates.",
    ],
    techniques: ["Ray", "PyTorch", "WireGuard", "LoRA", "Python"],
  },
  {
    title: "User Adherence to AI Financial Advisors",
    field: "Game Theory · Mechanism Design",
    status: "Ongoing",
    period: "Aug 2025 – Present",
    problem:
      "Robo-advisors optimise for portfolio returns but are frequently abandoned by users. The question is whether advisor strategy can be chosen to maximise adherence, not just utility.",
    approach: [
      "Modelled advisor–user interaction as a Stackelberg game using bounded rationality and Prospect Theory to represent decisions under risk.",
      "Implemented MILP-based optimisation and factorial experiments to compare advisor strategies and statistically evaluate their effect on user adherence.",
    ],
    techniques: ["MILP", "Game Theory", "Prospect Theory", "Statistics"],
  },
];

export const projects: Project[] = [
  {
    title: "Legends of Stonks — Financial Platform",
    summary:
      "Microservices financial platform for accounts, analytics, and simulated market transactions.",
    description:
      "Architected a microservices-based financial platform with a FastAPI REST API and PostgreSQL for user accounts, financial analytics, and simulated market transactions. Designed the relational schemas and containerized services with Docker and Nginx, then integrated CI/CD workflows for consistent deployment.",
    featured: true,
    period: "Mar 2025 – Apr 2025",
    tech: ["FastAPI", "PostgreSQL", "Docker", "Nginx", "CI/CD", "Next.js"],
  },
  {
    title: "Automated Refactoring Pipeline",
    summary:
      "AI-assisted developer tool that detects code smells and opens Git pull requests with fixes.",
    description:
      "Built an AI-assisted developer tool that detected code smells, generated refactoring recommendations, and integrated changes into Git pull-request workflows. The interesting problem was never prompting the model — it was making generated edits reviewable and safely reversible inside an existing review process.",
    featured: true,
    period: "Feb 2025",
    tech: ["Python", "Gemini", "DeepSeek", "Git", "LLM Integration"],
  },
  {
    title: "Custom Unix Shell",
    summary:
      "Command-line interpreter in C with process orchestration, piping, and I/O redirection.",
    description:
      "Implemented a custom command-line interpreter in C, handling low-level process orchestration using fork, exec, and wait system calls, with support for I/O redirection and piping.",
    featured: true,
    period: "Feb 2025",
    tech: ["C", "Linux", "System Calls", "Process Management"],
  },
  {
    title: "Network File System",
    summary:
      "Concurrent NFS in C supporting multi-client access over sockets.",
    description:
      "Implemented a concurrent Network File System in C with low-level data structures for efficient file storage, handling concurrent client requests through multithreading and socket programming.",
    featured: false,
    period: "Nov 2023",
    tech: ["C", "Sockets", "Multithreading", "Linux"],
  },
  {
    title: "TAFEA — AI Teaching Assistant",
    summary:
      "React application helping TFI fellows manage classroom activity, with LLM text generation.",
    description:
      "Developed a responsive web application using React to assist TFI fellows in managing classroom activities, integrating Gemini for real-time text generation and customization.",
    featured: false,
    period: "Sep 2024 – Nov 2024",
    tech: ["React", "MongoDB", "Gemini API", "TypeScript"],
  },
  {
    title: "Multimodal Meme Classifier",
    summary:
      "YOLOv8 + BERT pipeline fusing visual objects with textual sentiment.",
    description:
      "Developed a multimodal pipeline using YOLOv8 for object detection and BERT for text extraction, implementing fusion techniques to analyse visual objects alongside textual sentiment.",
    featured: false,
    period: "Feb 2024",
    tech: ["YOLOv8", "BERT", "PyTorch", "Computer Vision"],
  },
  {
    title: "Smart Medical Query App",
    summary:
      "Grounding Llama 2 on MedQuad for context-aware medical Q&A. Top 5, Megathon '23.",
    description:
      "Engineered a context-aware AI assistant using Llama 2 with domain-specific grounding on the MedQuad dataset. Placed in the top 5 of the Qualcomm-judged Megathon at IIIT Hyderabad.",
    featured: false,
    period: "Oct 2023",
    tech: ["Python", "Llama 2", "NLP", "Quantization"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    note: "Primary implementation languages",
    skills: ["Python", "SQL", "JavaScript / TypeScript", "C / C++"],
  },
  {
    label: "Backend & Data",
    note: "Services, APIs, and the data layer beneath them",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "DynamoDB",
      "Data Modeling",
      "Data Pipelines",
    ],
  },
  {
    label: "Cloud & AI",
    note: "Infrastructure, orchestration, and applied ML",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "CI/CD",
      "Linux",
      "RAG",
      "LLM Integration",
      "PyTorch",
      "Ray",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "International Institute of Information Technology, Hyderabad",
    location: "Hyderabad, India",
    credential: "B.Tech in Computer Science and Engineering",
    period: "Oct 2022 – Jul 2026",
    startDate: "2022-10",
    endDate: "2026-07",
    details: ["Member, Electronics and Robotics Club"],
  },
  {
    institution: "Carmel School Kuwait",
    location: "Kuwait City, Kuwait",
    credential: "High School Diploma",
    period: "Graduated Apr 2022",
    startDate: "2010-04",
    endDate: "2022-04",
    details: ["Member, Student Parliament"],
  },
];

export const awards: Award[] = [
  {
    title: "5th Place, Megathon '23",
    issuer: "ECell IIIT Hyderabad · judged by Qualcomm",
    year: "2023",
  },
];

/**
 * Navigation sections in page order. Section numbers are derived from this
 * array's index, so adding or reordering a section can never desync the
 * "01." / "02." labels.
 */
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

/**
 * 1-based ordinal for a section, derived from its position in `sections`.
 *
 * Components call this instead of hard-coding "01." / "02.", so inserting a
 * section in the middle of the array renumbers everything automatically.
 */
export function sectionIndex(id: SectionId): number {
  const position = sections.findIndex((section) => section.id === id);
  return position === -1 ? 1 : position + 1;
}

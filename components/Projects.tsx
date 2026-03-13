"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "User Adherence to AI Financial Advisors",
    description:
      "Modeled advisor-user interaction as a cooperative Stackelberg game, incorporating bounded rationality and Prospect Theory. Applied MILP optimization to generate portfolio strategies that maximize both utility and user trust.",
    tech: ["Game Theory", "Statistics", "Python", "MILP"],
    period: "Aug 2025 – Present",
  },
  {
    title: "Custom Federated Learning Framework",
    description:
      "Designed a distributed training system using Ray.io for privacy-preserving model updates across decentralized client nodes. Implemented LoRA adapters to optimize fine-tuning efficiency.",
    tech: ["Ray.io", "PyTorch", "Python", "Distributed ML"],
    period: "Sep 2025 – Ongoing",
  },
  {
    title: "Legends of Stonks: Financial Platform",
    description:
      "Architected a scalable REST API using FastAPI to serve real-time market data. Designed complex PostgreSQL schemas and containerized the application using Docker.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "SQL"],
    period: "Mar 2025",
  },
  {
    title: "Custom Unix Shell",
    description:
      "Implemented a custom command-line interpreter in C, handling low-level process orchestration using fork, exec, and wait system calls. Engineered support for I/O redirection and piping.",
    tech: ["C", "Linux", "System Calls", "Process Management"],
    period: "Feb 2025",
  },
  {
    title: "Automated Refactoring Pipeline",
    description:
      "Developed a developer-productivity tool using Python and Gemini/DeepSeek to automate code review and refactoring. Integrated with Git workflows to auto-generate Pull Requests.",
    tech: ["Python", "Gemini", "DeepSeek", "Git"],
    period: "Feb 2025",
  },
  {
    title: "TAFEA: AI Teaching Assistant",
    description:
      "Developed a responsive web application using React to assist TFI fellows in managing classroom activities. Integrated Gemini LLM for real-time text generation and customization.",
    tech: ["React", "MongoDB", "Gemini API", "TypeScript"],
    period: "Sep 2024 – Nov 2024",
  },
  {
    title: "Multimodal Meme Classifier",
    description:
      "Developed a multimodal pipeline using YOLOv8 for object detection and BERT for text extraction. Implemented fusion techniques to analyze visual objects and textual sentiment.",
    tech: ["YOLOv8", "BERT", "Computer Vision", "PyTorch"],
    period: "Feb 2024",
  },
  {
    title: "Smart Medical Query App",
    description:
      "Engineered a context-aware AI assistant using Llama 2 with domain-specific grounding on the MedQuad dataset. Top 5 Finalist in the Qualcomm-judged Megathon IIITH Hackathon.",
    tech: ["Python", "Llama 2", "NLP", "Quantization"],
    period: "Oct 2023",
  },
  {
    title: "Network File System",
    description:
      "Implemented a concurrent Network File System in C, utilizing low-level data structures for efficient file storage. Handled concurrent client requests using multithreading and socket programming.",
    tech: ["C", "Linux", "Socket Programming", "Multithreading"],
    period: "Nov 2023",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="text-red-500">02.</span> Projects
          <span className="h-px bg-gray-700 flex-grow max-w-xs"></span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors border border-gray-700 hover:border-red-500/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <p className="text-gray-500 text-xs mb-3">{project.period}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-red-500 bg-red-500/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL", "C/C++", "Dart"],
  frameworks: [
    "React",
    "FastAPI",
    "Node.js",
    "Django",
    "PyTorch",
    "TensorFlow",
    "Flutter",
    "Next.js",
  ],
  tools: [
    "Docker",
    "PostgreSQL",
    "Git",
    "AWS",
    "Ray.io",
    "Firebase",
    "MongoDB",
    "Linux/Unix",
  ],
  competencies: [
    "Agentic AI",
    "RAG Pipelines",
    "Game Theory",
    "Federated Learning",
    "Statistical Analysis",
    "Hypothesis Testing",
    "Systems Programming",
    "Distributed ML",
    "Computer Vision",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="text-red-500">03.</span> Skills
          <span className="h-px bg-gray-700 flex-grow max-w-xs"></span>
        </h2>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-red-500/20 hover:text-red-500 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-red-500/20 hover:text-red-500 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Tools & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-red-500/20 hover:text-red-500 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.competencies.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-red-500/20 hover:text-red-500 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Founder's Office Intern - Data Engineering & Quantitative Systems",
    company: "Qonfido",
    location: "Bangalore (Remote)",
    period: "May 2025 – Sep 2025",
    description: [
      "Architected a high-velocity ETL pipeline to ingest real-time NSE market data, to drive downstream investment analytics.",
      "Developed automated analytics engines to calculate quantitative metrics, generating financial insights that directly informed user portfolio recommendations and investment strategies.",
      "Optimized data retrieval algorithms within a RAG pipeline, reducing query latency for retrieving complex financial context and ensuring rapid delivery of personalized reports.",
    ],
  },
  {
    title: "Undergraduate Researcher - Data Visualization, Machine Learning",
    company: "Data Science and Analytics Centre, IIITH",
    location: "Hyderabad",
    period: "May 2024 – May 2025",
    description: [
      "Designed an experimental framework using KD-tree and K-NN segmentation to analyze model performance variation, identifying bias in specific data clusters.",
      "Conducted empirical evaluations on benchmark datasets, utilizing Seaborn dashboards to visualize error distributions and guide feature engineering efforts.",
      "Automated data-segmentation workflows to generate performance heatmaps, enabling data-driven refinement of ML architectures.",
    ],
  },
  {
    title: "Software Intern - Flutter Development",
    company: "Times Of Loans",
    location: "Hyderabad",
    period: "Jan 2024 – Apr 2024",
    description: [
      "Built a cross-platform Flutter app integrating Firebase Auth, Firestore & RazorPay API for secure, automated payments.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="text-red-500">01.</span> Experience
          <span className="h-px bg-gray-700 flex-grow max-w-xs"></span>
        </h2>

        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-red-500 font-medium mb-3">
                    {exp.title}
                  </h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-400 flex gap-3 before:content-['▹'] before:text-red-500"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

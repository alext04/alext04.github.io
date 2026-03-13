"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "International Institute of Information Technology",
    location: "Hyderabad, Telangana",
    degree: "B.Tech Computer Science Engineering",
    period: "Oct 2022 – Jul 2026 (Expected)",
    details: ["Member of Electronics and Robotics Club"],
  },
  {
    school: "Carmel School Kuwait",
    location: "Kuwait City, Kuwait",
    degree: "High School Diploma",
    period: "Apr 2006 – Apr 2022",
    details: ["Member of Student Parliament"],
  },
];

const awards = [
  "5th Place in Megathon'23 held by ECell IIIT Hyderabad (Qualcomm-judged)",
  "SAT Score: 1580/1600",
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="text-red-500">04.</span> Education
          <span className="h-px bg-gray-700 flex-grow max-w-xs"></span>
        </h2>

        <div className="mt-12 space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-red-500 pl-6"
            >
              <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
              <p className="text-gray-400 text-sm mt-1">{edu.location}</p>
              <p className="text-red-500 font-medium mt-2">{edu.degree}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
              {edu.details && (
                <ul className="mt-3 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex gap-2 before:content-['▹'] before:text-red-500"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Awards & Certifications
          </h3>
          <ul className="space-y-3">
            {awards.map((award, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-gray-400 flex gap-3"
              >
                <span className="text-red-500 text-xl">🏆</span>
                {award}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

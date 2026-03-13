"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 font-medium mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Alex Thuruthel.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
            I build things for the web.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            I'm a Computer Science Engineering student at IIIT Hyderabad, 
            specializing in AI, distributed systems, and full-stack development. 
            Currently exploring agentic AI, federated learning, and quantitative finance.
          </p>
          
          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/alext04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-thuruthel-a2a8b123b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:alexthuruthel04@gmail.com"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
          </div>

          <a
            href="#experience"
            className="inline-block px-8 py-4 border-2 border-red-500 text-red-500 rounded font-medium 
                       hover:bg-red-500/10 transition-colors"
          >
            Check out my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

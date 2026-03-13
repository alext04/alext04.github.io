"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-red-500 font-medium mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I'm currently looking for new opportunities in software engineering, 
          AI/ML, and quantitative finance. Whether you have a question, want to 
          collaborate, or just want to say hi, feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/alext04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-thuruthel-a2a8b123b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:alexthuruthel04@gmail.com"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        <a
          href="mailto:alexthuruthel04@gmail.com"
          className="inline-block px-8 py-4 border-2 border-red-500 text-red-500 rounded font-medium 
                     hover:bg-red-500/10 transition-colors"
        >
          Say Hello
        </a>
      </motion.div>

      <footer className="mt-20 text-gray-500 text-sm">
        <p>Designed & Built by Alex Thuruthel</p>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "InterviX",
    description: [
      "AI-powered mock interview system using Gemini for question generation.",
      "Voice-based interview experience using Sarvam STT & TTS APIs.",
      "Real-time interview flow with AI-powered evaluation support.",
      "Clean SaaS-style UI for candidates.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "Sarvam TTS/STT",
    ],
    github: "https://github.com/VishalKammari/IntervieX",
    live: "https://interviex.vercel.app/",
  },
  {
    title: "Brainly",
    description: [
      "Organize and manage learning resources in one place.",
      "Create, store, and manage notes, links, and study materials.",
      "Secure authentication and authorization system.",
      "Content sharing and collaboration features.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/VishalKammari/brainly",
    live: "https://braily.netlify.app/",
  },
  {
    title: "Real-Time Chat App",
    description: [
      "One-to-one real-time messaging platform.",
      "WebSocket-based communication using Socket.io.",
      "Persistent chat history with MongoDB.",
      "Responsive UI for mobile and desktop devices.",
    ],
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/VishalKammari/ChatRooms",
    live: "https://chat-rooms-five.vercel.app/",
  },
  
  {
    title: "Quill",
    description: [
      "Full-stack blogging platform for publishing articles.",
      "JWT-based authentication and authorization.",
      "Create, edit, delete, and manage blog posts.",
      "Clean and responsive reading experience.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/VishalKammari/Quill",
    live: "https://quill-tan-nine.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  return (
    <section id="products" className="w-full px-8 md:px-12 scroll-mt-24 sm:scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-3xl  mb-8"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="space-y-4"
      >
        {projects.map((project, index) => (
          // 
          <motion.div
              key={index}
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.1,
  }}
  transition={{
    duration: 0.7,
    delay: index * 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -2,
  }}
  className="border border-black/7 dark:border-zinc-800 rounded-3xl p-6 hover:shadow-lg dark:hover:shadow-zinc-950/30 transition bg-white/50 dark:bg-zinc-900/50"

          >
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <h3 className="text-2xl instrument-serif-regular tracking-wide font-extrabold">{project.title}</h3>

              <div className="flex gap-3">
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors"
                >
                  <FaGithub />
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors"
                >
                  <FiExternalLink />
                  Live
                </motion.a>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-zinc-600 dark:text-zinc-400">
              {project.description.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="px-3 py-1 text-sm border border-black/5 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex justify-center mt-10"
      >
        <motion.a
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          href="https://github.com/VishalKammari"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 border border-black/6 dark:border-zinc-800 rounded-2xl font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-all cursor-pointer"
        >
          View all projects →
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;
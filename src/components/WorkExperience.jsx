import React from "react";
import { motion } from "motion/react";

import infosys from "../assets/infosys.png";
import Swecha from "../assets/Swecha.png";
import Stealth from "../assets/Stealth.png";

const experiences = [
  {
    company: "Infosys Springboard",
    role: "Software Developer Intern",
    duration: "Aug 2025 – Oct 2025",
    description:
      "Built full-stack features for Campus Event Hub using Node.js and MongoDB. Designed UI wireframes in Figma and developed RESTful APIs for event registration.",
    logo: infosys,
  },
  {
    company: "Swecha",
    role: "Tech lead Intern",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Developed and maintained responsive frontend interfaces using React and TailwindCSS. Integrated REST APIs and improved application performance across devices.",
    logo: Swecha,
  },
  {
    company: "Freelance Developer",
    role: "Self Employed",
    duration: "Jun 2024 – Present",
    description:
      "Designed and developed full-stack web applications using React, Node.js, Express, and MongoDB. Improved client website performance and responsiveness.",
    logo: Stealth,
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

const logoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WorkExperience = () => {
  return (
    <section id="experience" className="w-full px-8 md:px-12 py-10 scroll-mt-24 sm:scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-3xl mb-8"
      >
        Work Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="flex flex-col gap-12"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -2,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex gap-5"
          >
            <motion.div
              variants={logoVariants}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.2,
              }}
              className="shrink-0"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-14 h-14 rounded-xl border border-black/10 dark:border-white/10 object-cover bg-white dark:bg-zinc-800"
              />
            </motion.div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg">{exp.role}</p>
                </div>

                <p className="text-zinc-500 dark:text-zinc-500 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;

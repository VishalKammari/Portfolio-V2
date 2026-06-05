import React from "react";
import { motion } from "motion/react";

const achievements = [
  {
    title: "Advanced to Round 3 – AI Hack Day 2025",
    year: "2025",
    description:
      "Qualified to Round 3 of AI Hack Day at IIIT Hyderabad by developing innovative AI-driven solutions and competing against talented teams.",
  },
  {
    title: "Semi-Finalist – Hash It Out 2.0 Hackathon",
    year: "2025",
    description:
      "Reached the semi-final stage by building and presenting a functional project under competitive hackathon conditions.",
  },
  {
    title: "Google Developer Groups Solution Challenge",
    year: "2025",
    description:
      "Participated in the global Solution Challenge, developing technology-driven solutions addressing real-world problems.",
  },
  {
    title: "Open Source Contributor – GSSoC & Hacktoberfest",
    year: "2025",
    description:
      "Contributed to multiple open-source repositories through feature development, bug fixes, authentication systems, and documentation improvements.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const achievementVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="w-full px-8 md:px-12 py-10 scroll-mt-24 sm:scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl  mb-10"
      >
        Achievements.
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-10"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={achievementVariants}
            whileHover={{
              x: -6,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col md:flex-row md:justify-between gap-4"
          >
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 dark:text-zinc-500 md:whitespace-nowrap font-medium"
            >
              {item.year}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
import React from "react";
import { motion } from "motion/react";

const education = [
  {
    institute: "Sreenidhi Institute of Science and Technology",
    duration: "2022 – 2026",
    details:
      "B.Tech in Computer Science & Engineering (AI & ML) • Hyderabad, Telangana",
  },
  {
    institute: "Narayana Junior College",
    duration: "2020 – 2022",
    details:
      "Higher Secondary Education • MPC Stream",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const educationVariants = {
  hidden: {
    opacity: 0,
    x: -60,
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

const Education = () => {
  return (
    <section className="w-full px-8 md:px-12 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl mb-10"
      >
        Education
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={educationVariants}
            whileHover={{
              x: 6,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col md:flex-row md:justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-semibold">
                {item.institute}
              </h3>

              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                {item.details}
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 dark:text-zinc-500 md:whitespace-nowrap font-medium"
            >
              {item.duration}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
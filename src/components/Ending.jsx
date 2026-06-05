import React from "react";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Ending = () => {
  return (
    <section className="w-full px-8 md:px-12 py-14 flex flex-col items-center text-center">
      
      {/* Bottom -> Top */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-6"
      >
        Let's work together.
      </motion.h2>

      {/* Left -> Right */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed"
      >
        I'm always interested in new opportunities and exciting
        projects. Whether you have a project in mind or just want
        to chat about tech, I'd love to hear from you.
      </motion.p>

      {/* Bottom -> Top */}
      <motion.a
        href="mailto:vishalkammari2102@gmail.com"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 flex items-center gap-3 bg-black dark:bg-zinc-100 text-white dark:text-zinc-950 px-4 py-2 rounded-xl font-medium cursor-pointer"
      >
        <MdOutlineMail size={22} />
        Get in touch
      </motion.a>

      {/* Right -> Left */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex gap-4 mt-8"
      >
        {[
          {
            icon: <FaGithub size={20} />,
            href: "https://github.com/VishalKammari",
          },
          {
            icon: <FaTwitter size={20} />,
            href: "https://x.com/vishcodes",
          },
          {
            icon: <MdOutlineMail size={20} />,
            href: "mailto:vishalkammari2102@gmail.com",
          },
          {
            icon: <FaLinkedin size={20} />,
            href: "https://www.linkedin.com/in/vishal-kammari/",
          },
        ].map((item, index) => (
          <motion.a
  key={index}
  href={item.href}
  target={item.href.startsWith("http") ? "_blank" : undefined}
  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
  variants={{
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }}
  whileHover={{
    scale: 1.1,
    y: -4,
  }}
  className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-zinc-900 dark:text-zinc-100"
>
  {item.icon}
</motion.a>
        ))}
      </motion.div>

     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="mt-10 text-zinc-500 dark:text-zinc-400 space-y-1"
>
  <p>
    Currently available for freelance work and full-time opportunities
  </p>
  <p>Response time: Usually within 24 hours</p>
</motion.div>
    </section>
  );
};

export default Ending;
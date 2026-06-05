import React from "react";
import { motion } from "motion/react";

import { IoMailOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Name from './Name'
import Age from "./Age";
import Coinflip from "./Coinflip";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex flex-col scroll-mt-24 sm:scroll-mt-28"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-base sm:text-xl"
      >
        Hey There, I'm
      </motion.h1>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
        <div className="flex flex-col gap-4 sm:gap-5 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl"
          >
            <Name />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center gap-2 text-base sm:text-lg"
          >
            <h2><Age /></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              staggerChildren: 0.1,
            }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black dark:bg-zinc-100 text-white dark:text-zinc-950 px-3 py-2 rounded-md font-semibold cursor-pointer"
            >
              Resume
            </motion.button>

            {[
              { icon: <IoMailOutline />, href: "mailto:vishalkammari2102@gmail.com" },
              { icon: <CiTwitter />, href: "https://x.com/vishcodes" },
              { icon: <FiGithub />, href: "https://github.com/VishalKammari" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vishal-kammari/" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-200 dark:border-zinc-800 rounded-md p-2.5 hover:bg-black/5 dark:hover:bg-white/5 transition-all ease-in-out cursor-pointer text-zinc-900 dark:text-zinc-100 flex items-center justify-center"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className="hidden md:flex self-center lg:self-auto shrink-0">
          <Coinflip />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-3 pl-1.5 text-sm sm:text-md text-black/70 dark:text-zinc-400 leading-relaxed"
      >
        <span className="text-lg sm:text-xl text-black dark:text-white font-bold">tldr;</span><br /> learned programming by building things on the internet. <br />

Usually building with React, Node.js, TypeScript, and MongoDB. and a lot of coffee. <br />

I've built full-stack applications, AI-powered projects, developer tools, and real-time systems while continuously improving my problem-solving skills through DSA. <br />

Currently building, learning, and shipping.
      </motion.div>
    </motion.div>
  );
};

export default Hero;
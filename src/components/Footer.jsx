import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { GoHome } from "react-icons/go";

const Footer = () => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] max-w-sm">
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg">
        
        <a
          href="#hero"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          <GoHome size={18} />
        </a>

        <a
          href="https://x.com/vishcodes"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          <CiTwitter size={20} />
        </a>

        <a
          href="https://github.com/VishalKammari"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          <FiGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/vishal-kammari/"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="mailto:vishalkammari2102@gmail.com"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          <IoMailOutline size={18} />
        </a>

      </div>
    </div>
  );
};

export default Footer;
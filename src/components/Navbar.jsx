import { Moon, Sun } from "lucide-react";
import { CiPause1 } from "react-icons/ci";
import { useContext } from "react";
import { Themecontext } from "../context/Themecontext";

export default function Navbar() {
  const { theme, toggletheme } = useContext(Themecontext);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] max-w-md md:max-w-xl">
      <nav
        className="
          flex items-center justify-between gap-3 sm:gap-8
          px-4 sm:px-6 py-2
          rounded-2xl
          backdrop-blur-xl
          bg-white/20 dark:bg-black/30
          border border-white/30 dark:border-zinc-800
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          text-zinc-900 dark:text-zinc-100
          transition-colors duration-300
        "
      >
        <a href="#hero">  
        <h1 className="text-lg cursor-pointer sm:text-2xl instrument-serif-regular tracking-tight font-extrabold text-black dark:text-white">
          Vishal
        </h1>
        </a>

        {/* <button
          className="
            h-10 w-10
            flex items-center justify-center
            rounded-xl
            bg-white/30 dark:bg-zinc-800/30
            backdrop-blur-md
            border border-white/20 dark:border-zinc-700/50
            hover:bg-white/40 dark:hover:bg-zinc-700/50
            transition
            text-zinc-900 dark:text-zinc-100
          "
        >
          <CiPause1 size={22}/>
        </button> */}

        <div className="flex items-center gap-4 md:gap-8 text-sm md:text-lg">
          <a href="#experience" className="hover:opacity-70 transition">
            Experience
          </a>

          <a href="#products" className="hover:opacity-70 transition">
            Products
          </a>

          <a href="#achievements" className="hover:opacity-70 transition">
            Achievements
          </a>
        </div>

        <button
          onClick={toggletheme}
          className="
            h-9 w-9 sm:h-10 sm:w-10
            flex items-center justify-center
            rounded-full
            bg-zinc-100 dark:bg-zinc-800/30
            backdrop-blur-md
            border border-white/20 dark:border-zinc-700/50
            hover:bg-white/40 dark:hover:bg-zinc-700/50
            transition
            cursor-pointer
            text-zinc-900 dark:text-zinc-100
          "
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </div>
  );
}
import { motion } from "motion/react";
import image from "../assets/image.png";

export default function Coinflip() {
  return (
    <div className="flex justify-center items-center">
      <div
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-25 h-25 md:w-[160px] md:h-[160px] sm:w-[200px] sm:h-[200px] cursor-pointer"
      >
        {/* Front Side */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-full border-2 border-zinc-300 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
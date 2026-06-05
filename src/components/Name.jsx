import { useEffect, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function Name({
  text = "Vishal Kammari",
  speed = 17,
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let frame = 0;

    const interval = setInterval(() => {
      const output = text
        .split("")
        .map((char, index) => {
          if (index < frame) return char;

          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(output);

      frame += 1 / 3;

      if (frame >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="text-5xl md:text-6xl instrument-serif-regular font-bold leading-none break-words">
      {display}
    </div>
  );
}
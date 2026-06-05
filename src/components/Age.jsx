import { useEffect, useState } from "react";
import Typerighter from "./Typerighter";

export default function Age() {
  const startDate = new Date("2005-2-21"); // replace with your DOB

  const [age, setAge] = useState("");

  useEffect(() => {
    const updateAge = () => {
      const now = Date.now();
      const diff = now - startDate.getTime();

      const years = diff / (1000 * 60 * 60 * 24 * 365.2425);

      setAge(years.toFixed(10));
    };

    updateAge();

    const interval = setInterval(updateAge, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-zinc-500 text-lg pl-1 flex gap-1.5">
      i'm {age} year old 
      <div>
      <Typerighter />
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://countapi.mileshilliard.com/api/v1/hit/vish.codes")
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  }, []);

  return (  
  <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed max-w-2xl">
    <div>
       You are #{count.toLocaleString()}th visitor
    </div></p>
  );
}
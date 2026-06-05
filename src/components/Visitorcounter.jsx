import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://countapi.mileshilliard.com/api/v1/hit/vish.codes")
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  }, []);

  return (  
    <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
       You are #{count.toLocaleString()}th visitor
    </div>
  );
}
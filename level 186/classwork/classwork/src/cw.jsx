import { useState, useEffect, useEffectEvent } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const Count = useEffectEvent(() => {
    setCount(prev => prev + 1);
  });

  useEffect(() => {
    window.addEventListener(Count);

    return () => {
      window.removeEventListener(Count);
    };
  }, []);
}

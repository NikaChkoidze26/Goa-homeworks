// Cleanup 1
import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

// Cleanup 2
import { useEffect } from "react";

export default function ResizeWatcher() {
  useEffect(() => {
    const handleResize = () => {
      console.log("resized");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>Resize the window</div>;
}

// dependency array 1

useEffect(() => {
  console.log("123");
}, []);

// dependency array 2

useEffect(() => {
  console.log("123");
}, [count]);

// dependency array 3

useEffect(() => {
  console.log("runs every render");
});
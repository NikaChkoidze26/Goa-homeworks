import { useState, useEffect } from "react";

export default function Counter() {

  useEffect(() => {
    console.log("Effect123");

    return () => {
      console.log("Cleanup123");
    };
  })

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        count
      </button>
    </div>
  );
}
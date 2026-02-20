import { useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl">{on ? "ON" : "OFF"}</h1>

      <button
        onClick={toggle}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Toggle
      </button>
    </div>
  );
}
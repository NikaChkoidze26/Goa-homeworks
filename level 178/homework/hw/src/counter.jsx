import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl">{count}</h1>

      <button
        onClick={increase}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increase
      </button>
    </div>
  );
}
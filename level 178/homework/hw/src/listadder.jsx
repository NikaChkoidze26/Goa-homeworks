import { useState } from "react";

export default function ListAdder() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([...list, text]);
    setText("");
  };

  return (
    <div className="p-10 text-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={addItem}
        className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
      >
        Add
      </button>

      <ul className="mt-4">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
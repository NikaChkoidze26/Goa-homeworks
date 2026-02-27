import { useState } from "react";

export default function NameList() {
  const [names, setNames] = useState([]);

  const addJohn = () => {
    setNames((p) => [...p, "John"]);
  };

  const removeName = (index) => {
    setNames((p) => p.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={addJohn}>Add John</button>

      <ul>
        {names.map((name, i) => (
          <li key={i} onClick={() => removeName(i)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
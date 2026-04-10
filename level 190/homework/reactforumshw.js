//1 
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
}
//2
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="">Choose</option>
        <option value="one">One</option>
        <option value="two">Two</option>
      </select>
      <p>{value}</p>
    </div>
  );}

//3 
const [value, setValue] = useState("");

<select onChange={(e) => setValue(e.target.value)}>
  <option>One</option>
  <option>Two</option>
</select>

//4

const [check, setCheck] = useState(false);

<input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
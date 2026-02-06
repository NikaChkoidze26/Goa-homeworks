import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={increaseCount}>
        Add +1
      </button>
    </div>
  );
}

export default App;

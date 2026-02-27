export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const addFive = () => {
    setCount((p) => p + 1);
    setCount((p) => p + 1);
    setCount((p) => p + 1);
    setCount((p) => p + 1);
    setCount((p) => p + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((p) => p + 1)}>+1</button>
      <button onClick={addFive}>+5</button>
    </div>
  );
}
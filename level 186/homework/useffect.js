function Counter() {
  const [count, setCount] = useState(0);


  const logCount = useEffectEvent(() => {
    console.log(count);
  });

  useEffect(() => {
    const id = setInterval(() => {
      logCount(); 
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
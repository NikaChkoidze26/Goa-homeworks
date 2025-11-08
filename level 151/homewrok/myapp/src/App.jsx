function Example() {
  const name = "Nika";

  const user = { age: 14, hobby: "guitar" };

  const numbers = [1, 2, 3, 4, 5];

  function greet() {
    return "Hello World!";
  }

  return (
    <div>
      <h1>{greet()}</h1>
      <p>user: {name}</p>
      <p>hobby: {user.hobby}</p>
      <p>number quantity: {numbers.length}</p>
      <p>{numbers.map(num => num * 2).join(", ")}</p>
    </div>
  );
}

export default Example;

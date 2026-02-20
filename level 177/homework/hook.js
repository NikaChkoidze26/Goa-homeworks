// კაუჭი არის React-ის ფუნქცია, რომელიც გვაძლევს საშუალებას, რომ გამოვიყენოთ state და სხვა React-ის შესაძლებლობები ფუნქციურ კომპონენტში
// კაუჭები შექმნეს იმისთვის, რომ აღარ დაგვჭირდეს class კომპონენტები და კოდი იყოს უფრო მარტივი და გასაგები
// კაუჭს ვიყენებთ მაშინ, როცა გვინდა ფუნქციურ კომპონენტში შევინახოთ მონაცემი ან კომპონენტის ქცევა ვაკონტროლოთ

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;







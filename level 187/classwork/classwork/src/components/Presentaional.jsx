import React from "react";

function CounterView({ count, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default CounterView;
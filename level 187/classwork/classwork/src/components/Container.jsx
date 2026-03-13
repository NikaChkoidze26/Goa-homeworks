import React, { useState } from "react";
import Presentatonal from "./Presentaional";

function Container() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <Presentational
      count={count}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
}

export default ontainer;
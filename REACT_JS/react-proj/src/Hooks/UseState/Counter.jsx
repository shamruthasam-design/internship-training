
import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }
  

  function decrement() {
    setValue(value - 1);
  }

  return (
    <>
      <h2>Counter: {value}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;

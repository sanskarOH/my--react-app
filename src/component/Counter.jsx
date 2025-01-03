import React, { useState } from "react";
import "../styles/components.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    // if (count == 0) {
    //   resetCount();
    // } else {
    //   setCount(count - 1);
    // } to set that val should not go beyond zero
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="text-center font-sans space-x-2">
      <p className=" text-[10em] mt-0 mb-[50px]">{count}</p>
      <button className="btn" onClick={decrementCount}>
        Decrement
      </button>
      <button className="btn" onClick={resetCount}>
        Reset
      </button>
      <button className="btn" onClick={incrementCount}>
        Increment
      </button>
    </div>
  );
};

export default Counter;

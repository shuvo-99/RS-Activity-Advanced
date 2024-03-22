import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>hello World</h1>
        <p>Count - {count}</p>
        <button onClick={increaseCount}>Click Here</button>
      </div>
    </div>
  );
};

export default UseState;

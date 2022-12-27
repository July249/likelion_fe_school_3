import React, { useState, useEffect } from "react";

const Section5 = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(`렌더링이 되고 있나요? 🤔`);
  }, []);

  useEffect(() => {
    setResult(count * count);
  }, []);

  return (
    <div>
      <h2>클릭한 횟수: {count}</h2>
      <h2>
        {count}배가 되는 즐거움: {result}
      </h2>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Click Me 💛
      </button>
      {/* <button type="button" onClick={() => setCount2((prev) => prev + 1)}>
        Click Me Change count2💛
      </button> */}
      {/* <button type="button">Nothing</button> */}
    </div>
  );
};

export default Section5;

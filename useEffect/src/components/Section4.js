import React, { useEffect, useState } from "react";

const Section4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("렌더링 되고 있나요? 🤔");
  }, []);

  return (
    <div>
      <h2>클릭한 횟수: {count}</h2>
      <button type="button" onClick={(e) => setCount((prev) => prev + 1)}>
        Click Me!
      </button>
    </div>
  );
};

export default Section4;

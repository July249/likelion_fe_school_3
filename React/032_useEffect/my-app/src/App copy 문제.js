import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  // 비어 있는 배열을 인자로 넣은 경우에는 처음 한 번만 실행된다.
  useEffect(() => {
    console.log('실행되었습니다!!');
  }, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

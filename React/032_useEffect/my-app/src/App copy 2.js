import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  let test = 0;

  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  // 일반 변수가 useEffect에 적용되는 것은 아니다
  const handleTestCountUp = (e) => {
    test += 1;
    console.log(test);
  };

  useEffect(() => {
    if (count % 2) {
      console.log('홀수입니다.');
    } else {
      console.log('짝수입니다.');
    }
  });

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      {/* 이벤트가 발생해도 재 렌더링 되지 않습니다. */}
      <div>{test}</div>
      <button onClick={handleTestCountUp}>Up!</button>
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

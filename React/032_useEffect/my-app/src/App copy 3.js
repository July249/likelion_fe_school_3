import { useState, useEffect } from 'react';

function Counter() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  const handleOneCountUp = (e) => {
    setOne(one + 1);
  };
  const handleTwoCountUp = (e) => {
    setTwo(two + 1);
  };
  const handleThreeCountUp = (e) => {
    setThree(three + 1);
  };

  // useState를 사용한 변수에 대해서만 감시하는 Hook!
  useEffect(() => {
    if (one % 2) {
      console.log('홀수입니다.');
    } else {
      console.log('짝수입니다.');
    }
  }, [one, two]);

  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneCountUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoCountUp}>Up!</button>
      {/* three는 재렌더링이 발생하지만 이벤트가 발생하지는 않습니다 */}
      <div>{three}</div>
      <button onClick={handleThreeCountUp}>Up!</button>
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

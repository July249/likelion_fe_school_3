import React, { useState, useEffect } from 'react';

function getName() {
  console.log('오래기다리는 작업');
  return '개리';
}

function App() {
  // getName 함수를 실행하는 과정에서 비효율적인 동작이 일어나고 있습니다.
  // const [name, setName] = useState(getName());
  // 바로 함수 자체를 값으로 넘기고 리액트가 그 함수를 실행하도록 만드는 것 => 비효율 동작 최적화
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);

  return (
    <div>
      안녕하세요! {name}! 현재 숫자는 {num} 입니다!
      <button onClick={() => setNum((p) => p + 1)}>{num}</button>
    </div>
  );
}

export default App;

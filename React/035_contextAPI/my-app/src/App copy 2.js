import React from 'react';

function One(props) {
  // console.log(props);
  return (
    <div>
      <Two value={props.value} />
    </div>
  );
}

function Two({ value }) {
  // console.log(props);

  return (
    <div>
      <Three value={value} />
    </div>
  );
}

function Three({ value }) {
  return <div>가격: {value}</div>;
}

export default function App() {
  const value = 1000; // 이 값을 three에서 출력
  return (
    <div>
      <One value={value} />
    </div>
  );
}

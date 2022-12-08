// useLayoutEffect와 useEffect의 차이
// 깜빡임을 해결하자!
// 커져랏 클릭 => 왜 이런 문제가 발생하는 걸까?
// paint가 이루어진 후에 useEffect가 일어나기 때문이다!  => useLayoutEffect를 사용하면 paint 되기 전에 실행되어 해결된다

import { useState, useEffect, useLayoutEffect } from 'react';

function App() {
  const [value, setValue] = useState(100);

  // useEffect(() => {
  //   if (value >= 1000) {
  //     painting 후에 실행됨
  //     setValue(300);
  //   }
  // }, [value]);

  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: 'blue' }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;

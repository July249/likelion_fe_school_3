import { useState, useRef } from 'react';

// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.

export default function App() {
  const 입력값1 = useRef(null);
  const 입력값2 = useRef(null);
  const 입력값3 = useRef(null);

  const [이름, set이름] = useState('');
  const [성별, set성별] = useState('');
  const [나이, set나이] = useState('');

  let 자기소개글 = `제 이름은 ${이름}입니다. 저는 ${성별}이고요. 나이는 ${나이}살입니다.`;

  const handle자기소개 = (e) => {
    set이름(입력값1.current.value);
    set성별(입력값2.current.value);
    set나이(입력값3.current.value);

    입력값1.current.value = '';
    입력값2.current.value = '';
    입력값3.current.value = '';
  };

  return (
    <div>
      <label>
        이름을 입력하세요 :
        <input type="text" ref={입력값1} />
      </label>
      <br />
      <label>
        성별을 입력하세요 :
        <input type="text" ref={입력값2} />
      </label>
      <br />
      <label>
        나이를 입력하세요 :
        <input type="text" ref={입력값3} />
      </label>
      <br />
      <br />
      <button onClick={handle자기소개}>자기소개서 자동완성!</button>
      <br />
      <br />
      <p>{자기소개글}</p>
    </div>
  );
}

import React, { useState, useRef, useMemo } from 'react';

export default function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);

  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const n = useMemo(() => getNum(userInfo), [userInfo]);

  function handleInputName(e) {
    console.log(e);
    setName(e.target.value);
    console.log('렌더링 - 1');
  }

  function handleInputId(e) {
    console.log(e);
    setId(e.target.value);
    console.log('렌더링 - 2');
  }

  function handleSubmit(e) {
    e.preventDefault();

    // userInfo.push({});

    const newInfo = [...userInfo, { name, id }];

    inputName.current.value = '';
    inputId.current.value = '';
    inputName.current.value = '';

    setUserInfo(newInfo);
    console.log('렌더링 - 3');
  }

  function getNum(li) {
    console.log('렌더링!');
    return li.length;
  }

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>
          회원 명부 작성
        </button>
      </form>
      <ul>
        {userInfo.map((value, idx) => (
          <li key={idx}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </div>
  );
}

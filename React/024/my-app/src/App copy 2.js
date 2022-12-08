import React, { useState } from 'react';

function Resume({ 이름, 취미, 자기소개 }) {
  const [like, setLike] = useState(0);
  // const [like, setLike] = useState(100)
  // const [like, setLike] = useState('hello world')

  function handleClickLike() {
    // like += 1
    setLike(like + 1); // like = like + 1
    // setLike(like + 2); // like = like + 1
    // setLike(like + 'hello' + 'world'); // like = like + 1
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      <button type="button" onClick={handleClickLike}>
        like {like}
      </button>
    </section>
  );
}

function App() {
  return (
    <main>
      <Resume
        이름="jibro"
        취미="코딩"
        자기소개="안녕하세요. 제코베 지브로입니다."
      />
    </main>
  );
}

export default App;

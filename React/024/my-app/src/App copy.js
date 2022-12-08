function Resume({ 이름, 취미, 자기소개 }) {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      <button type="button" onClick={clickLike}>
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

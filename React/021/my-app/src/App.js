function One(props) {
  return (
    <>
      <p>{props.name}님, 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 3}입니다.</p>
    </>
  );
}

function Two({ name, age }) {
  return (
    <>
      <p>{name}님, 안녕하세요!</p>
      <p>당신의 나이는 {age * 3}입니다.</p>
    </>
  );
}

function App() {
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <One name="hojun" age={10} />
      <Two name="hojun" age={10} />
    </>
  );
}

export default App;

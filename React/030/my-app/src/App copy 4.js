function One() {
  return (
    <div>
      <h1 className="oneclass" key="101">
        hello world
      </h1>
      <p>hello world</p>
    </div>
  );
}

function Two(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

/* 
self-closing 태그가 아닌 컴포넌트의 경우에는 props로 children을 받을 수 있다
=> 합성컴포넌트에서 보다 자세히 알아보겠다
*/

function App() {
  return (
    <div>
      <One />
      {console.log(<One />)}
      <Two>
        <h2 className="twoclass" key="102">
          hello world
        </h2>
        <p>hello world</p>
      </Two>
    </div>
  );
}

export default App;

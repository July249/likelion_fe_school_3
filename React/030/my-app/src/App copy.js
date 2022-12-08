/* 
적당히 규모가 있는 웹 서비스의 경우 DOM보다 빠를 수 있다.
*/
function One(props) {
  console.log('// one 시작');
  console.log(props);
  console.log('// one 끝');

  return <div>{props.children}</div>;
}

function Two(props) {
  console.log('// two 시작');
  console.log(props);
  console.log('// two 끝');

  return <div>{props.children}</div>;
}

function Three(props) {
  console.log('// Three 시작');
  console.log(props);
  console.log('// Three 끝');

  return <div>hello</div>;
}

function Four(props) {
  console.log('// Four 시작');
  console.log(props);
  console.log('// Four 끝');

  return <div>hello</div>;
}

// Five 안에 Six가 오브젝트 형태로 존재하지는 않는다
// 아마도 미리 연산이 이루어졌기 때문일지도...
function Five() {
  return (
    <div>
      <p>hello</p>
      <Six />
    </div>
  );
}

function Six() {
  return <div>hello</div>;
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        {/* One의 props의 children으로써 배열로 들어간다 */}
        <h2>app &gt; One - h2</h2>
        <p>app &gt; One - p</p>
        <Two>
          {/* Two의 props의 children으로써 객체로 들어간다 (하나이기 때문에) */}
          <p>app &gt; One &gt; Two - p</p>
        </Two>
        <Three />
        <Four></Four>
        <Five />
      </One>
    </div>
  );
}

/* 
1. 리액트는 요소들을 경량화된 오브젝트(=버츄얼 돔)를 활용한다.
-> 요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 // 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다
-> 이런 특징을 이용해서 프로젝트 규모, 특징을 고려해서 리액트를 적용하는게 장점이 된다면 적용하는 게 좋다
*/
export default App;

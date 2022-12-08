import styled from 'styled-components';

// const CardDiv = styled.div`
//   padding: 20px;
//   border-radius: 10px;
//   border: 1px solid #c4c4c4;
//   margin-bottom: 20px;
//   width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
// `;

/* 
공통되는 사항을 하나의 컴포넌트에 묶어내고
opening, closing tag를 이용하여 그 안에 props.children을 이용하여 각각을 채운다.
*/

function Card(props) {
  console.log(props.children);
  return (
    <section className={props.className}>
      <img
        src="https://mui.com/static/images/cards/contemplative-reptile.jpg​"
        alt=""
      />
      <h2>{props.value}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolores
        optio veniam ipsam, blanditiis minus ipsum. Perferendis velit labore
        praesentium.
      </p>
      {props.children}
    </section>
  );
}

function One() {
  return (
    <>
      <a href="#">SHARE</a>
      <a href="#">LEARN MORE</a>
    </>
  );
}
function Two() {
  return <></>;
}
function Three() {
  return (
    <>
      <a href="#">SHARE</a>
    </>
  );
}

function App() {
  return (
    <>
      <Card className="one" value="One">
        <One />
      </Card>
      <Card className="two" value="Two">
        <Two />
      </Card>
      <Card className="three" value="Three">
        <Three />
      </Card>
    </>
  );
}

export default App;

import styled from 'styled-components';

const One = styled.div`
  color: red;
  /* Sass 문법 사용이 가능하다 */
  &::after {
    content: 'cm';
  }
`;

function App() {
  return (
    <>
      <One>10</One>
    </>
  );
}

export default App;

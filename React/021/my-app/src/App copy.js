import One from './components/One.js';
import Two from './components/Two.js';
import './app.css';

function App() {
  const style = { backgroundColor: 'black', color: 'white' };

  return (
    <div className="App">
      <One />
      <Two />
      <h1 className="hello">Hello</h1>
      <div className="newClass" /> {/* class대신 className=""로 진행! */}
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        hello world 1
      </div>
      <div style={style}>hello world 2</div>
      {/* error */}
      {/* <div style="color:red;">hello world 3</div> */}
    </div>
  );
}

export default App;

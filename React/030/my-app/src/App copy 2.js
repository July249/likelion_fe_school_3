function One() {
  return <h1>hello world</h1>;
}

function App() {
  return (
    <div>
      hello
      {console.log(<One />)}
    </div>
  );
}

export default App;

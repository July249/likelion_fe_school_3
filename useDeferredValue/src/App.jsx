import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const findNumber = (value) => {
    const numberGenerater = Array(1000)
      .fill()
      .map((value, index) => index + 1);
    setSearchResult(numberGenerater.filter((num) => !(num % parseInt(value))));
  };

  useEffect(() => {
    if (value) {
      findNumber(value);
    } else {
      setSearchResult([]);
    }
  }, [value]);

  return (
    <div>
      <p>입력한 숫자의 배수를 찾아보아요~</p>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">입력</label>
        <input
          type="number"
          placeholder="숫자를 입력하세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <ul style={{ listStyle: "none" }}>
        검색 결과
        {searchResult.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

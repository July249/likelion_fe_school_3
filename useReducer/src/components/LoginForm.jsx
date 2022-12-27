import { useState } from "react";

function LoginForm({ setIsLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (event) => {
    event.preventDefault();

    if (id === "licat" && password === "weniv!!") {
      setIsLogin(true);
      console.log("로그인 성공!");
    } else if (id === "licat" && password !== "weniv!!") {
      console.log("로그인 실패!");
      console.log("비밀번호를 다시 한번 기억해보세요~");
    } else if (id !== "licat" && password === "weniv!!") {
      console.log("로그인 실패!");
      console.log("아이디를 다시 한번 기억해보세요~");
    } else {
      console.log("로그인 실패!");
      console.log("아이디랑 비밀번호가 모두 틀렸어요~ ㅠㅠ");
    }
  };

  return (
    <form action="" onSubmit={handleLoginForm}>
      <label htmlFor="">ID</label>{" "}
      <input type="text" placeholder="아이디를 입력해주세요" onChange={(event) => setId(event.target.value)} />
      <br />
      <br />
      <label htmlFor="">Password</label>{" "}
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />
      <button>로그인 하기</button>
    </form>
  );
}

export default LoginForm;

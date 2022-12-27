import { useState } from "react";

function LoginForm({ setIsLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (event) => {
    event.preventDefault();

    if (id === "licat" && password === "weniv!!") {
      setIsLogin(true);
      console.log("로그인 성공!");
    } else {
      console.log("로그인 실패!");
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

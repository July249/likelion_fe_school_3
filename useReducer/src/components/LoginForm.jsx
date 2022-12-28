import { useEffect, useRef } from "react";

function LoginForm({ state, dispatch }) {
  const idRef = useRef();
  const pwdRef = useRef();

  const userInfo = { id: "licat", password: "weniv!!" };

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleLoginForm = (event) => {
    event.preventDefault();

    const idInput = idRef.current.value;
    const passwordInput = pwdRef.current.value;

    if (idInput === userInfo.id && passwordInput === userInfo.password) {
      dispatch({ type: "LOGIN_SUCCESS", payload: userInfo });
    } else if (idInput !== userInfo.id && passwordInput === userInfo.password) {
      dispatch({ type: "MISS_ID" });
    } else if (idInput === userInfo.id && passwordInput !== userInfo.password) {
      dispatch({ type: "MISS_PASSWORD" });
    } else {
      dispatch({ type: "LOGIN_FAILURE" });
    }

    idRef.current.value = "";
    pwdRef.current.value = "";
  };

  return (
    <form action="" onSubmit={handleLoginForm}>
      <label>ID</label> <input ref={idRef} type="text" placeholder="아이디를 입력해주세요" />
      <br />
      <br />
      <label>Password</label> <input ref={pwdRef} type="password" placeholder="비밀번호를 입력해주세요" />
      <br />
      <br />
      <button>로그인 하기</button>
      <br />
      <p>{state.message}</p>
    </form>
  );
}

export default LoginForm;

import { useContext } from "react";
// import Reducer from "./context/Reducer";
import "./app.css";
import LoginForm from "./components/LoginForm";
import Context from "./context/Context";

// const reducer = (state, action) => {
//   console.log("old State: ", action.type, state);
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       console.log(action.type, state);
//       return {
//         user: action.payload,
//         isLogin: true,
//         message: "로그인 성공!",
//       };
//     case "MISS_ID":
//       console.log(action.type, state);
//       return {
//         isLogin: false,
//         message: "아이디를 다시 한번 기억해보세요~",
//       };
//     case "MISS_PASSWORD":
//       console.log(action.type, state);
//       return {
//         isLogin: false,
//         message: "비밀번호를 다시 한번 기억해보세요~",
//       };
//     case "LOGIN_FAILURE":
//       console.log(action.type, state);
//       return {
//         isLogin: false,
//         message: "아이디랑 비밀번호가 모두 틀렸어요~ ㅠㅠ",
//       };
//     case "LOGOUT":
//       console.log(action.type, state);
//       return {
//         isLogin: false,
//         message: "로그아웃!",
//       };
//     default:
//       return state;
//   }
// };

function App() {
  const { state, dispatch } = useContext(Context);
  // const idRef = useRef();
  // const pwdRef = useRef();

  // const userInfo = { id: "licat", password: "weniv!!" };

  // const [state, dispatch] = useReducer(Reducer, { isLogin: false, message: "" });

  // useEffect(() => {
  //   idRef.current.focus();
  // }, []);

  // const handleLoginForm = (event) => {
  //   event.preventDefault();

  //   const idInput = idRef.current.value;
  //   const passwordInput = pwdRef.current.value;

  //   if (idInput === userInfo.id && passwordInput === userInfo.password) {
  //     dispatch({ type: "LOGIN_SUCCESS", payload: userInfo });
  //   } else if (idInput !== userInfo.id && passwordInput === userInfo.password) {
  //     dispatch({ type: "MISS_ID" });
  //   } else if (idInput === userInfo.id && passwordInput !== userInfo.password) {
  //     dispatch({ type: "MISS_PASSWORD" });
  //   } else {
  //     dispatch({ type: "LOGIN_FAILURE" });
  //   }

  //   idRef.current.value = "";
  //   pwdRef.current.value = "";
  // };

  return (
    <div className="main">
      {state.isLogin ? (
        <>
          <strong>환영합니다~ 라이캣님!</strong>
          <img src="https://paullab.co.kr/images/message_licat.png" alt="라이캣" />
          <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;

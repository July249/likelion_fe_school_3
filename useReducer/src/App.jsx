import { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./app.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="main">
      {isLogin ? (
        <>
          <strong>환영합니다~ 라이캣님!</strong>
          <img src="https://paullab.co.kr/images/message_licat.png" alt="라이캣" />
        </>
      ) : (
        <LoginForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;

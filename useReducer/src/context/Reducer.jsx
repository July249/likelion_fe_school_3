const Reducer = (state, action) => {
  console.log("old State: ", action.type, state);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log(action.type, state);
      return {
        user: action.payload,
        isLogin: true,
        message: "로그인 성공!",
      };
    case "MISS_ID":
      console.log(action.type, state);
      return {
        isLogin: false,
        message: "아이디를 다시 한번 기억해보세요~",
      };
    case "MISS_PASSWORD":
      console.log(action.type, state);
      return {
        isLogin: false,
        message: "비밀번호를 다시 한번 기억해보세요~",
      };
    case "LOGIN_FAILURE":
      console.log(action.type, state);
      return {
        isLogin: false,
        message: "아이디랑 비밀번호가 모두 틀렸어요~ ㅠㅠ",
      };
    case "LOGOUT":
      console.log(action.type, state);
      return {
        isLogin: false,
        message: "로그아웃!",
      };
    default:
      return state;
  }
};

export default Reducer;

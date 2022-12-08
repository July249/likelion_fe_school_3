// 전달 받는 action에 따른 state 업데이트를 위한 함수입니다.
export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, error: null, success: false };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        error: null,
        success: true,
      };
    case "error":
      return { isPending: false, document: null, error: true, success: false };
    default:
      return state; // 초기값이 null이기 때문에 null이 반환됨
  }
};

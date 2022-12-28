import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = { isLogin: false, message: "" };

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isLogin: state.isLogin,
        message: state.message,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

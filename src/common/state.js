import { createContext, useReducer } from "react";
import { STATE_UPDATE, STATE_RESET } from "./action";

/**
 * 初始状态
 */
const initialState = {
  nickname: "",
};

/**
 * 状态reducer
 * @param {*} state
 * @param {*} action
 */
const stateReducer = (state, action) => {
  switch (action.type) {
    case STATE_UPDATE:
      return { ...state, ...action.payload };
    case STATE_RESET:
      return { ...initialState };
    default:
      return { ...state };
  }
};

/**
 * 状态context
 */
export const StateContext = createContext({
  state: initialState,
  dispatch: () => {},
});

/**
 * 全局状态组件
 * @param {*} props
 */
export default function StateContextProvider(props) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
}

import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  position: [1, 1],
  hits: 0,
  history: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const up = () => {
    dispatch({ type: "UP" });
  };
  const down = () => {
    dispatch({ type: "DOWN" });
  };
  const left = () => {
    dispatch({ type: "LEFT" });
  };
  const right = () => {
    dispatch({ type: "RIGHT" });
  };

  return (
    <AppContext.Provider value={{ ...state, up, down, left, right }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

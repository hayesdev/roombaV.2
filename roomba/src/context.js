import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  position: [1, 1],
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

export { AppContext, AppProvider };

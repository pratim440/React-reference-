import React, { createContext } from "react";

export const stateContext = createContext();

function ContextProvider(props) {
  return (
    <stateContext.Provider value={props.value}>
      {props.children}
    </stateContext.Provider>
  );
}

export default ContextProvider;

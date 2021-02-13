import React, { useContext } from "react";
import { stateContext } from "./Context";

function CompC() {
  const value = useContext(stateContext);

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default CompC;

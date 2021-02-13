import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset1":
      return { ...state, firstCounter: 0 };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset2":
      return { ...state, secondCounter: 0 };
    default:
      return state;
  }
};

function Complex() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter1 = {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "reset1", value: 1 })}>
        Reset 1
      </button>

      <div>Counter2 = {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset2", value: 5 })}>
        Reset 2
      </button>
    </div>
  );
}

export default Complex;

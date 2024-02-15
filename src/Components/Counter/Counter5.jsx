import React from "react";
import { useReducer } from "react";
const Counter5 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { counter: state.counter + 1 };
        break;
      case "decrease":
        return { counter: state.counter - 1 };
      case "increase5":
        return { counter: state.counter + action.payload.number };
      default:
        return state;
    }
  };

  //   declare useReducer Hook
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const increase = () => {
    dispatch({ type: "increase" });
  };

  const decrease = () => {
    dispatch({ type: "decrease" });
  };

  const increase5 = () => {
    dispatch({ type: "increase5", payload: { number : 5} });
  };
  return (
    <div className="counter">
      <h4>{state.counter}</h4>
      <div className="flex">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase5}>Increase by 5</button>
      </div>
    </div>
  );
};

export default Counter5;

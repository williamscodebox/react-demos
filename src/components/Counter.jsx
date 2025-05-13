import { useReducer, useState } from "react";
import { initialState, reducer } from "../reducerExample/counterReducer";

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div style={{ display: "flex", gap: 15 }}>
        <button
          style={{ padding: 20, marginBottom: 15, marginTop: 15 }}
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <h1>Count: {state.count}</h1>
        <button
          style={{ padding: 20, marginBottom: 15, marginTop: 15 }}
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
      <button
        style={{ marginLeft: 100 }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;

// Using useReducer() hook for state management By thapa technical.

import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const initialState = 0;

  function reducer(state, action) {
    // console.log(state,action);
    if (action.type === "increment") {
      return state + 1;
    }
    if (action.type === "decrement") {
      return state - 1;
    }
  }

  // const [data,setData] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Using useReducer() hook for state management in Simple Counter App </h1>
      <h3>Counter value: {state} </h3>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment value
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement value
      </button>
    </>
  );
}

export default App;

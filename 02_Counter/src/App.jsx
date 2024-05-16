import { useState,useEffect,useRef } from "react";
import "./App.css";

function App() {
   let [counter, setCounter] = useState(0);
   const display = useRef()

  useEffect(()=>{
    display.current.innerHTML ="";
  })

  let addValue = () => {
    if (counter === 10) {
      display.current.innerHTML ="Cant increase value more then 10";
    } 
    else {
      setCounter(counter+1);
    }
  };

  let deleteValue = () => {
    if (counter === 0) {
      display.current.innerHTML ="Cant decrease value less then 0";
    } 
    else {
      setCounter(counter-1);
    }
  };

  return (
    <>
      <h1>Using React Hooks in Simple Counter App </h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={deleteValue}>Remove value</button>
      <p ref={display}>test</p>
    </>
  );


}

export default App;

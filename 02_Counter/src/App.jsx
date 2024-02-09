import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  let addValue = () => {
    if (counter === 10) {
      document.querySelector("#display").innerHTML =
        "Cant increase value more then 10";
    } 
    else {
      setCounter(counter = counter+1);
  document.querySelector("#display").innerHTML ="";

    }
  };

  let deleteValue = () => {
    if (counter === 0) {
      document.querySelector("#display").innerHTML =
        "Cant decrease value less then 0";
    } 
    else {
      setCounter(counter = counter-1);
  document.querySelector("#display").innerHTML ="";

    }
  };

  return (
    <>
      <h1>Using React Hook (useState) in Simple Counter App </h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={deleteValue}>Remove value</button>
      <p id="display"></p>
    </>
  );


}

export default App;

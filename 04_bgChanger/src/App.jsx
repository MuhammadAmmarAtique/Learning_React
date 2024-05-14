import React, { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("cyan")

  
  useEffect(() => {
    document.body.style.backgroundColor = color;
   },[color]);
  
  return (
    <>
   <button onClick={() => setColor("red")}>red</button> <br />
   <button onClick={() => setColor("green")}>green</button>  <br />
   <button onClick={() => setColor("blue")}>blue</button>  <br />
   <button onClick={() => setColor("yellow")}>yellow</button>
   </>  
   )
}

export default App

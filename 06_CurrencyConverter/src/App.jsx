import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  },[])

  return (
   <>
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let dell_info= "Dell Inc. is an American technology company that develops, sells, repairs, and supports computers and related products and services. Dell is owned by its parent company, Dell Technologies";

  let lenovo_info ="Lenovo Group of China is the world's largest maker of personal computers. The company has recently been expanding its business in the peripheral fields, such as smartphones, tablet computers and enterprise servers, focusing on its so-called PC Plus strategy to diversify its product portfolio"

  let apple_info = "Apple Inc., is an American multinational technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services."

  return (
    <>
    
      <h1 className="bg-green-500 mb-4 ">Hello world!</h1>
      <Card username="Dell" laptopInfo={dell_info} btnText="Click me" />
      <Card username="Lenovo"  laptopInfo={lenovo_info} btnText="Check me"/>
      <Card username="Apple" laptopInfo={apple_info}  btnText="Read me"/>

    </>
  )
}

export default App

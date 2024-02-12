import React, { useRef } from 'react';
import { useState,useEffect,useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str+="1234567890"
    }

    if (charAllowed) {
      str+="!@#$%^&*(){}[]\|``~"
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length +1));
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed])

  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,charAllowed])

  //useRef hook
  const passwordRef = useRef(null);

  const handleCopyButtonClick = useCallback(() => {
    //copy karty waqt jo text highligh horaha hai wo isi wajah saay ho raha hai
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,500); //kitny hisaay ko highlight karna hai wo range bta sakty hain
    // Copy the password value to clipboard
    window.navigator.clipboard.writeText(password);
  },[password]);

  return (
   <>

  <div className='mt-8 m-auto max-w-[800px] bg-[#23272f] rounded-md flex flex-col'>

  {/* Flex item-1 */}
  <h1 className="text-3xl mt-2 font-bold text-center">
    Password Generator
  </h1>

 {/*  Flex item-2 (Password and copy button div) */}
  <div className='text-center mt-2  '>
        <input 
        ref={passwordRef}
        type="text"
        placeholder='Password'
        className=' text-black pl-[10px] py-2 rounded-sm w-[600px]'
        value={password}
        />
        <button onClick={handleCopyButtonClick} className='bg-cyan  py-2 rounded w-16 bg-[#1b4add]'>Copy</button>
  </div>

 {/*  Flex item-3 + A Separate Flexbox (remaining) */}
  <div className='mt-2 mb-4 flex justify-center gap-8'>
    {/* a)range */}
    <div>
    <input type="range" 
        id='range'
        min={6}
        max={25}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="range">Length:{length}</label>
    </div>

    {/* b)numbers */}
   <div>
   <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
   </div>

    {/* c)Characters */}
     <div>
     <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="charInput">Characters</label>
     </div>
  </div>



  </div>
  
   </>
  )
}

export default App

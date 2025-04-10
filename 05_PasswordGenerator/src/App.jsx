import React, { useRef } from 'react';
import { useState,useEffect,useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); 
  const [SpecialcharAllowed, setSpecialCharAllowed] = useState(false);   //special characters
  const [password, setPassword] = useState("");

  const PasswordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str+="1234567890"
    }

    if (SpecialcharAllowed) {
      str+="!@#$%^&*(){}[]\|``~"
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length +1));
    }

    setPassword(pass);

  },[length,numberAllowed,SpecialcharAllowed])

  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,SpecialcharAllowed])

  //useRef hook
  const passwordRef = useRef(null);

  const handleCopyButtonClick = useCallback(() => {
    //copy karty waqt jo text highligh horaha hai wo isi wajah saay ho raha hai
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,500); //kitny hisaay ko highlight karna hai wo range bta sakty hain
    // Copy the password value to clipboard
    window.navigator.clipboard.writeText(password);
    
    // Showing message taht text is copied
    document.querySelector('.msg').textContent = "Password Copied!"
    setTimeout(() => {
      document.querySelector('.msg').textContent = ""
    }, 500); 

  },[password]);

  return (
   <>

  <div className='mt-8 m-auto max-w-[800px] bg-[#23272f] rounded-md flex flex-col container'>

  {/* Flex item-1 */}
  <h1 className="text-3xl mt-2 font-bold text-center">
    Password Generator
  </h1>

 {/*  Flex item-2 (Password and copy button div) */}
  <div className='text-center mt-2 w-[100%] '>
        <input 
        ref={passwordRef}
        type="text"
        placeholder='Password'
        className=' text-black pl-[10px] py-2 rounded-sm w-[80%]'
        value={password}
        />
        <button onClick={handleCopyButtonClick}  className='  bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition transform duration-300 focus:outline-none active:scale-90 ;'>Copy</button>
  </div>

 {/*  Flex item-3 + A Separate Flexbox (remaining) */}
  <div className='mt-2 mb-4 flex flex-col sm:flex-row justify-center items-center  sm:gap-8 gap-2'>
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
          defaultChecked={SpecialcharAllowed}
          id="charInput"
          onChange={() => {
            setSpecialCharAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="charInput">Characters</label>
     </div>
  </div>
  </div>
  <p className='msg text-center'></p>
  
   </>
  )
}

export default App

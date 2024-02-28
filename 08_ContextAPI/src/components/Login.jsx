import React, { useState,useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {  
    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    
    //to fetch data(setUser) from "usercontext" we use useContext hook
    const {setUser} = useContext(UserContext);

   const handleSubmit = (e)=>
   {
    e.preventDefault();
    setUser({username,password})  //1) yahan par haam data send kr rahy hain
    
   }

    return ( 
       
        <div>
            <h2>Login to our Web</h2>

            <input 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            type="text" 
            placeholder="username" />

            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="text" 
            placeholder="password" />

            <button onSubmit={handleSubmit} type="button"> Submit </button>
        </div>
        
     );
}

export default Login;
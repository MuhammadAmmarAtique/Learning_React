import React, { useState } from "react";
import UserContext from "./UserContext";

// {children} matlb kaay jo bhi prop aa raha hai usaay as it is agaay use karoo
const UserContextProvider = ({children})=>{

    const [user,setUser] =useState(null);

    return(
        //UserContext will be wrapper here, we will use it with .Provider
        //we will also pass the value to the wrapper as an object
        <UserContext.Provider value={{user , setUser}} >
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;
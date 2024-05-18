import React, { useState } from "react";
import UserContext from "./UserContext";

// UserContextProvider is a functional component that takes children as its prop. children represents the nested components that this provider will wrap , in this app childrens are h1, login and profile
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
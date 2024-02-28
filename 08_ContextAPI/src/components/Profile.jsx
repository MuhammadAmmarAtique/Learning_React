import React, { useState,useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const {user} = useContext(UserContext); 

     if(!user) return <div>Please Login</div>   //It is called as conditional return similar to if-else

     return <div>Welcome {user.username}</div> //2) yahan par haam data laay rahy hain
}

export default Profile;
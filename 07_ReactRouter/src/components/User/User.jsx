import React from "react";
import { useParams } from "react-router-dom";

function User() {

  const {UserData} = useParams();

  return (
        <div className="bg-gray-500 text-white text-3xl"> 
          User: {UserData}
          </div>
  )
}

export default User;

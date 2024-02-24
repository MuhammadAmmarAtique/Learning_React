import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";  

function Github() {
  // way # 1
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/MuhammadAmmarAtique")
    //         .then((resp) => resp.json())
    //         .then((resp) =>  setData(resp))
    //         .catch((error) => console.error("Error fetching data from Ammar Github:", error));
    // }, []);

  const data = useLoaderData(); // using "useLoaderData" hook to get data from GithubInfo function from loader

  return (
  <div className="flex flex-col items-center justify-center ">
    <h1 className="bg-gray-500 text-white text-3xl">Ammar Github Followers : {data.followers}</h1>
    <img src={data.avatar_url} alt="Profile pic" style={{"height":"300px" }}  />
  </div>
  )
}

export default Github ;

  // way # 2 (more optimized)
  export async function GithubInfo() 
  {
   const response = await fetch("https://api.github.com/users/MuhammadAmmarAtique");
   return response.json();   
  }




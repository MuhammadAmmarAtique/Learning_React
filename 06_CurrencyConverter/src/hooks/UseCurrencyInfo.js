// Cutom hook (useCurrencyInfo hook)
import {useEffect,useState}   from 'react'

function UseCurrencyInfo(currency) {

    const [data,setData]=useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp)=> resp.json())
        .then((resp)=> setData(resp[currency]))
        .catch((err)=> console.log("Error (useCurrencyInfo.js):", `${err}`))
    },[currency])
    
    // console.log(data);
    
    return data;     
}

export default UseCurrencyInfo;

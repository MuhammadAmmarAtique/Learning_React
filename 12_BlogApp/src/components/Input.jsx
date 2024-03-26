// Using "forwardRef()" function inside Input Component.
import { React, forwardRef, useId } from "react";

//using arrow function instead of normal function and wrapping it with forwardRef () function
const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {

    const id = useId();

    return (
      <div className="w-full">

        {/* 1)Label for below input tag */}
        {label && (                                 //agar label hai tooh label tag banaay ga.
          <label className="inline-block mb-1 pl-1" htmlFor={id}> {label} </label>
        )}

        {/* 2)input tag */}
        <input 
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        id={id}
        ref={ref}  // The reference we took from user as a prop will be passed here, (It will give refernce to the parent component)
         />

      </div>
    );
  }
);

export default Input;

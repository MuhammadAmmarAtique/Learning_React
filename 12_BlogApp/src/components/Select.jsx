import React from "react";
import { forwardRef, useId } from "react";

function Select(
  {
    options, //Options to be go inside Select Tag (it comes as an Array)
    label,
    className,
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {/* 1)Label */}
      {label && (
        <label htmlFor={id} className="">
          Rename this label inside Select.jsx
        </label>
      )}

      {/* 2)Select Tag */}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        ref={ref}
        id={id}
      >
        {/* This question below will conditionally loop inside array i.e only if there is value inside options only then map function will be called */}
        {options?.map((EachOption) => (
          <option 
          key={EachOption}
          value={EachOption}
          >
            {EachOption}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select); //here wrapping Select component with forwardRef function


import React, { ChangeEvent, useState } from "react";
import  {IInputProps}  from "@/utils/interfaces";

const  Input = ({
  label,
  isRequired = true,
  showLink, name,
  linkTitle,
  linkSlug,
  placeholder,
  value , onChange
}: IInputProps ) => {



  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="flex items-center justify-between">
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {showLink && (
          <div className="text-sm">
            <a
              href={linkSlug}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
            {linkTitle}
            </a>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input placeholder={placeholder}
          id={label}
          value={value}
          onChange={onChange}
          name={name}
          autoComplete={"true"}
          required={isRequired}
          className={`w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
      </div>
    </div>
  );
};

export default Input;

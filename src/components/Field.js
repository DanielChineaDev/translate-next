import { useRef, useState } from "react";

const Field = ({ value, onChange }) => {

const textRef = useRef(' ');

const clearInputText = () => {textRef.current.value = ''; onChange('')};

  return (
    <div className="w-full relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-4 h-4 absolute top-0 right-0 m-1 cursor-pointer"
        onClick={clearInputText}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <textarea
        type="text"
        name="text"
        id="text"
        ref={textRef}
        value={value}
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-slate-50 outline-none resize-none block w-full h-full px-6 py-3 rounded-bl-lg text-gray-900 shadow-xs"
        placeholder="Enter your text here"
      ></textarea>
    </div>
  );
};

export default Field;

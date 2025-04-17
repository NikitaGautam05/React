"use client";
import React, { useState } from "react";

function FormInput({
  type = "text",
  placeholder = "",
  halfWidth = false,
  className = "",
}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const widthClass = halfWidth
    ? "w-[calc(50%_-_11px)] max-sm:w-full"
    : "w-full";

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`border-2 border-cyan-600 border-solid bg-stone-50 h-[42px] rounded-[40px] px-4 ${widthClass} ${className}`}
    />
  );
}

export default FormInput;
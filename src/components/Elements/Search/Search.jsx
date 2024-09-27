import React from "react";

export default function Search(props) {
  // eslint-disable-next-line react/prop-types
  const {className, icon, type, placeholder} = props;
  return (
    <section className={`relative ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none border rounded-md px-3 py-1 w-full"
      />
      <span className="absolute right-2 top-1 cursor-pointer bg-secondary">
        {icon}
      </span>
    </section>
  );
}

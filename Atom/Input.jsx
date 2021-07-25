import React from "react";

function Input({}) {
  const InputStyle = {
    color: "red",
    fontSize: "2rem",
    fontWeight: "100",
  };
  return (
    <>
      <div>
        <input style={InputStyle} type='text' />
      </div>
    </>
  );
}

export default Input;

import React from "react";
import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("Moses");
  const [value, setValue] = useState("");
  const changeName = () => {
    setName(value);
    setValue("");
  };
  return (
    <div className="page">
      <p>{name}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Name;

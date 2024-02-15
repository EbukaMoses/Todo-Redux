import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ link, title }) => {
  return (
    <div>
      <Link to={link}>
        <button>{title}</button>
      </Link>
    </div>
  );
};

export default Button;

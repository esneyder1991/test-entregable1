import React from "react";
import "./styles/Button.css";

const Button = ({ handleNewQuote }) => {
  return (
    <button className="button" onClick={handleNewQuote}>
      See Another Quote
    </button>
  );
};

export default Button;

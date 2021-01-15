import React from "react";
import "./QuoteStyle.css";

const Quote = ({ randomQuote }) => {
  const { text, author } = randomQuote;

  return (
    <div className="prediction-container">
      <h1 className="header">Your prediction for today:</h1>
      {text === "" ? <p>click for prediction</p> : <p>{text}</p>}
      <h2 className="author">{author}</h2>
    </div>
  );
};

export default Quote;

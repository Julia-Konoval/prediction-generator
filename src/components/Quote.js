import React from "react";
import "./QuoteStyle.css";

const Quote = ({ randomQuote }) => {
  const { text, author } = randomQuote;

  return (
    <div className="prediction-container">
      <h1 className="header">Your prediction for today:</h1>
      <h1 className="prediction-body">'{text}'</h1>
      <h2 className="author">{author}</h2>
    </div>
  );
};

export default Quote;

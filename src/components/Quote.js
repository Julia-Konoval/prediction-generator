import React from "react";

const Quote = ({ randomQuote }) => {
  const { text, author } = randomQuote;
  console.log("random" + randomQuote);

  return (
    <div>
      <h1>Hello</h1>
      <h1>{text}</h1>
      <h2>{author}</h2>
    </div>
  );
};

export default Quote;

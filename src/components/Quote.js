import React from "react";

const Quote = ({ quote }) => {
  const { text, author } = quote;
  console.log(quote);

  return (
    <div>
      <h1>Hello</h1>
      <h1>{text}</h1>
      <h2>{author}</h2>
    </div>
  );
};

export default Quote;

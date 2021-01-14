import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./Quote";
import "./QuoteStyle.css";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
  const [backgroundCol, setBackgroundCol] = useState("");

  let colors = ["#F3DCD4", "#D9E3DA", "#D1CFC0", "#ECC9C7"];
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        setQuotes(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function generatePrediction() {
    const randomPrediction = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote(randomPrediction);
  }
  function generateColor() {
    let randomColor = Math.floor(Math.random() * colors.length);
    setBackgroundCol(colors[randomColor]);
  }
  function handleClick() {
    generatePrediction();
    generateColor();
  }
  return (
    <div
      className="container"
      generateColor={generateColor}
      style={{ backgroundColor: backgroundCol }}
    >
      <div className="prediction-container">
        <Quote randomQuote={randomQuote} />
        <button className="btn" onClick={handleClick}>Generate Prediction</button>
      </div>
    </div>
  );
};

export default QuoteList;

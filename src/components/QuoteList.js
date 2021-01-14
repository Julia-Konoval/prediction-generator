import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./Quote";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

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
    console.log("prediction");
    setRandomQuote(randomPrediction);
  }
  return (
    <div>
      <Quote randomQuote={randomQuote} />
      <button onClick={generatePrediction}>Generate Prediction</button>
    </div>
  );
};

export default QuoteList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./Quote";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

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
  console.log(quotes);
  return (
    <div>
      {quotes.map((quote) => (
        <Quote quote={quote} />
      ))}
    </div>
  );
};

export default QuoteList;

import { useState, useEffect } from 'react';
import "./App.css"

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setQuotes(data.slice(0, 10));
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  console.log("quotes:", quotes);

  return (
    <div>
      <h1>Top 10 Quotes</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && quotes.map((quote, index) => {
        console.log("quote:", quote);
        return <p key={index}>{index}: {quote}</p>;
      })}
    </div>
  );
}

export default App;

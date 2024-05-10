import React, {useState, useEffect} from 'react';
import './App.scss';

let apiSrc = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("Quote")
  const [author, setAuthor] = useState("Author")
  const [randomNumber, setNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState(null)

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJson = await response.json()
    setQuotesArray(parsedJson.quotes)
  }

  useEffect(() => {
    fetchQuotes(apiSrc)
  }, [apiSrc])

  //this function updates to a new quote and author at random
  const newQA = () => {
      let randomNum =  Math.floor(Math.random() * quotesArray.length);
      setQuote(quotesArray[randomNum].quote);
      setAuthor(quotesArray[randomNum].author);
  }



  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <h1 id="text">
            "{quote}"
          </h1>
          <h4 id="author">
            "{author}"
          </h4>
          <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -{author}`)}>Tweet Quote</a>
          <button id="new-quote" onClick={() => newQA()}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;

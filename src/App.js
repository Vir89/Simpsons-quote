import './App.css';
import React from 'react';
import axios from 'axios';


function App() {
  const [simpsonQuote, setSimpsonQuote] = React.useState({});
  function getSimpsonQuote() {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then(function(response){
      setSimpsonQuote(response.data[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="App">
      <button onClick={getSimpsonQuote}>Quote Card</button>
      <img src={simpsonQuote.image} alt={simpsonQuote
      .character} />
      <h1>{simpsonQuote.quote}</h1>
      <p>{simpsonQuote.character}</p>

    </div>
  
  );
}

export default App;

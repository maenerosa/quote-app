import "./style.css";

const title = document.getElementById("quote-container");
const quote = document.getElementById("quote-text");
const author = document.getElementById("author");
const btnGenerate = document.getElementById("btn-generate");

async function randomQuote() {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const data = await response.json();

  return data;
}

randomQuote().then((data) => console.log(data));

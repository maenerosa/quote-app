import "./style.css";

const title = document.getElementById("container");
const quote = document.getElementById("quote-text");
const author = document.getElementById("author");
const btnGenerate = document.getElementById("btn-generate");

function randomQuote{
fetch(`https://api.quotable.io/quotes/random`)
  .then((response) => response.json())
  .then((data) => {
    title.textContent = data.content;
  author.textContent = data.author;
  });
 }

import "./style.css";

const title = document.getElementById("container");
const quote = document.getElementById("quote-text");
const author = document.getElementById("author");
const btnGenerate = document.getElementById("btn-generate");

fetch(`https://api.quotable.io/quotes/random`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.content, data.author);
  });

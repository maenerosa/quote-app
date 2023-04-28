import "./style.css";

const quoteText = document.querySelector("quote"),
  quoteBtn = document.querySelector("btn-generator"),
  authorName = document.querySelector("name");

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("http://api.quotable.io/")
    .then((response) => response.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    });
}
quoteBtn.addEventListener("click", randomQuote);

import "./style.css";

const quoteContainer = document.querySelector(".quote"),
  quoteBtn = document.querySelector("#btn-generator"),
  authorName = document.querySelector(".name");

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";

  fetch("http://api.quotable.io/random")
    .then((response) => response.json())
    .then((quote) => {
      quoteContainer.innerText = quote.content;
      authorName.innerText = quote.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    });
}

quoteBtn.addEventListener("click", randomQuote);

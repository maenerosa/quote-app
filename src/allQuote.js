const title = document.getElementById("container");
const quote = document.getElementById("quote-text");
const author = document.getElementById("author");
const btnGenerate = document.getElementById("btn-generate");

export default function getQuote(quoteData) {
  const container = document.getElementById("container");
  container.innerHTML = "";
}

const h1 = document.createElement("h1");
h1.textContent = `${quoteData.content}, ${getQuote.quoteData[0].author}.`;

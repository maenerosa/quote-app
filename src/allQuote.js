const title = document.getElementById("title");
const author = document.getElementById("author");

export default function getQuote(quoteData) {
  const container = document.getElementById("container");
  container.innerHTML = "";
}

const h1 = document.createElement("h1");
h1.textContent = `${quoteData.content}, ${getQuote.quoteData[0].author}.`;

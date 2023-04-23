export default async function allQuote(quoteData) {
  const app = document.getElementById("quote-container");
  app.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.textContent = ` ${quoteData.title}, ${quoteData.content[0].content}.`;

  const main = document.createElement("main");

  const quoteContainer = document.createElement("div");

  main.append(h1);
  app.append(main);
}

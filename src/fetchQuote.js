export default async function fetchAllQuote(content) {
  const randomQuote = `https://api.quotable.io/quotes/random`;

  const response = await fetch(randomQuote);
  const quoteData = await response.json();

  return quoteData;
}

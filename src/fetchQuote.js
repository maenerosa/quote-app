export default async function fetchQuote(content) {
  const RANDOM_QUOTE = `https://api.quotable.io/quotes/random`;

  const response = await fetch(RANDOM_QUOTE);
  const fetchQuote = await response.json();

  return fetchQuote;
}

const quotes = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "Doing this at 10:00pm",
  "9/11 was an inside job",
  "I ate 3 eggs",
  "I ate 3 eggs before bed",
  "I ate 3 eggs at 3am",
  "I ate 3 eggs at 3am before bed",
];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-container").innerHTML = quotes[randomNumber];
}

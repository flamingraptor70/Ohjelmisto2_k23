"use strict";

const form = document.querySelector("form");
const searchTermInput = document.querySelector("#search-term");
const jokesContainer = document.querySelector("#jokes-container");

async function getJoke(term) {
  try {
    const url = term
      ? `https://api.chucknorris.io/jokes/search?query=${term}`
      : "https://api.chucknorris.io/jokes/random";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Joke not found!");
    }

    const jokeData = await response.json();

    if (term && jokeData.result.length === 0) {
      throw new Error("No jokes found with that term!");
    }

    if (term) {
      jokesContainer.innerHTML = "";
      jokeData.result.forEach((joke) => {
        const jokeArticle = document.createElement("article");
        jokeArticle.innerHTML = `<p>${joke.value}</p>`;
        jokesContainer.appendChild(jokeArticle);
      });
    } else {
      console.log(jokeData.value);
    }
  } catch (error) {
    alert(error.message);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchTermInput.value.trim();
  getJoke(searchTerm);
});

getJoke();

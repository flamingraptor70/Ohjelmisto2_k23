"use strict";

async function getJoke() {
    try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if(!response.ok){
        throw new Error ("Joke is not found!")
    }
    const jokeData = await response.json();
    console.log(jokeData.value);
    } catch(error) {
        alert(error.message);
    };
}


getJoke();
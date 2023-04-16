const form = document.querySelector("#search-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const query = document.querySelector("#query").value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
})


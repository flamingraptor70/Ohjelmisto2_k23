const form = document.querySelector('#search-form');
const queryInput = document.querySelector('#query');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = queryInput.value;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();

  resultsContainer.innerHTML = '';
  
  data.forEach(({ show }) => {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = show.name;
    article.appendChild(h2);

    const a = document.createElement('a');
    a.href = show.url;
    a.target = '_blank';
    a.textContent = show.url;
    article.appendChild(a);

    const img = document.createElement('img');
    img.src = show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
    img.alt = show.name;
    article.appendChild(img);

    const div = document.createElement('div');
    div.innerHTML = show.summary;
    article.appendChild(div);
    resultsContainer.appendChild(article);

  });
});

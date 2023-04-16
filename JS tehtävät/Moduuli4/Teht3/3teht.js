const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const query = document.querySelector('#query').value;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();
  
  results.innerHTML = '';
  
  data.forEach(tvShow => {
    const article = document.createElement('article');
    
    const h2 = document.createElement('h2');
    h2.textContent = tvShow.show.name;
    article.appendChild(h2);
    
    const a = document.createElement('a');
    a.href = tvShow.show.url;
    a.target = '_blank';
    a.textContent = tvShow.show.url;
    article.appendChild(a);
    
    const img = document.createElement('img');
    img.src = tvShow.show.image?.medium;
    img.alt = tvShow.show.name;
    article.appendChild(img);
    
    const div = document.createElement('div');
    div.innerHTML = tvShow.show.summary;
    article.appendChild(div);
    
    results.appendChild(article);
  });
});

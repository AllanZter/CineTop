const container = document.getElementById('drama');

fetch("https://api.themoviedb.org/3/discover/movie?api_key=782b88415f3be694e68fe7ff9224f2f4&language=pt-BR&with_genres=18&page=2")
  .then(response => response.json())
  .then(data => {
    const filmesDrama = data.results;
    

    filmesDrama.forEach(filme => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}" />
        <div class="movie-info">
          <h3>${filme.title}</h3>
          <!--<p>${filme.overview}</p>-->
          <a href="#" class="watch-btn">🎬 Assistir Online</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Erro ao carregar filmes de drama:", error));

  // Navegação lateral
const btnEsquerdaDrama = document.getElementById('btn-esquerda-drama');
const btnDireitaDrama = document.getElementById('btn-direita-drama');

btnEsquerdaDrama.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});

btnDireitaDrama.addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});


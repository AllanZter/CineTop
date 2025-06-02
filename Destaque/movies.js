
const containerDestaque = document.getElementById('lista-filmes');

// Buscar filmes populares
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
  .then(res => res.json())
  .then(data => {
    const filmes = data.results;
    filmes.forEach(filme => {
      // Montar URL da imagem
      const imagem = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
      const titulo = filme.title;
      const descricao = filme.overview;

      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.innerHTML = `
        <img src="${imagem}" alt="${titulo}" />
        <div class="movie-info">
          <h3>${titulo}</h3>
          <p>${descricao.substring(0, 80)}...</p>
          <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(titulo + ' trailer')}" class="watch-btn" target="_blank">🎬 Assistir Trailer</a>
        </div>
      `;
      containerDestaque.appendChild(card);
    });
  })
  .catch(err => console.error('Erro ao buscar filmes:', err));

// Navegação lateral
const btnEsquerdaDestaque = document.getElementById('btn-esquerda-destaque');
const btnDireitaDestaque = document.getElementById('btn-direita-destaque');

btnEsquerdaDestaque.addEventListener('click', () => {
  containerDestaque.scrollBy({ left: -300, behavior: 'smooth' });
});

btnDireitaDestaque.addEventListener('click', () => {
  containerDestaque.scrollBy({ left: 300, behavior: 'smooth' });
});

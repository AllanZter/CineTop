function carregarFilmes(containerId, generoId, btnEsqId, btnDirId) {

  const container = document.getElementById(containerId);
  const btnEsquerda = document.getElementById(btnEsqId);
  const btnDireita = document.getElementById(btnDirId);

  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=782b88415f3be694e68fe7ff9224f2f4&language=pt-BR&with_genres=${generoId}&page=1`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(filme => {

        const card = document.createElement('div');

card.className = `
  min-w-[180px]
  bg-gray-800
  rounded-2xl
  overflow-hidden
  shadow-lg
  hover:shadow-2xl
  hover:scale-105
  transition
  duration-300
  cursor-pointer
`;

card.innerHTML = `
  <div class="relative">
    <img 
      src="https://image.tmdb.org/t/p/w500${filme.poster_path}" 
      alt="${filme.title}" 
      class="w-full h-64 object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  </div>

  <div class="p-4">
    <h3 class="text-white text-sm font-semibold truncate mb-3">
      ${filme.title}
    </h3>

    <button 
      class="w-full bg-red-600 hover:bg-red-700 text-white 
      text-sm font-semibold py-2 rounded-lg 
      transition duration-300 
      hover:shadow-red-500/40 hover:shadow-md">
       Assistir
    </button>
  </div>
`;

container.appendChild(card);
      });

    });

  // Scroll lateral
  btnEsquerda.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnDireita.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

carregarFilmes("drama", 18, "btn-esquerda-drama", "btn-direita-drama");
carregarFilmes("acao", 28, "btn-esquerda-acao", "btn-direita-acao");
carregarFilmes("comedia", 35, "btn-esquerda-comedia", "btn-direita-comedia");
carregarFilmes("terror", 27, "btn-esquerda-terror", "btn-direita-terror");
carregarFilmes("animacao", 16, "btn-esquerda-animacao", "btn-direita-animacao");
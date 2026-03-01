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
          rounded-xl 
          overflow-hidden 
          shadow-lg 
          hover:scale-105 
          transition 
          duration-300 
          cursor-pointer
        `;

        card.innerHTML = `
          <img 
            src="https://image.tmdb.org/t/p/w500${filme.poster_path}" 
            alt="${filme.title}" 
            class="w-full h-64 object-cover"
          />
          <div class="p-3">
            <h3 class="text-sm font-semibold truncate">${filme.title}</h3>
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
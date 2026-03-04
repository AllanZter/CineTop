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
      id="btnMais" 
      class="w-full bg-red-600 hover:bg-red-700 text-white 
      text-sm font-semibold py-2 rounded-lg 
      transition duration-300 
      hover:shadow-red-500/40 hover:shadow-md">
       Saiba Mais
    </button>
  </div>
`;

card.querySelector("#btnMais").addEventListener("click", () => {
  abrirModal(filme);
});

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



function abrirTrailer(filmeId) {

  fetch(`https://api.themoviedb.org/3/movie/${filmeId}/videos?api_key=782b88415f3be694e68fe7ff9224f2f4&language=pt-BR`)
    .then(res => res.json())
    .then(data => {

      if (!data.results || data.results.length === 0) {
        alert("Trailer não disponível.");
        return;
      }

      const trailer = data.results.find(
        video => video.type === "Trailer" && video.site === "YouTube"
      );

      if (!trailer) {
        alert("Trailer não encontrado.");
        return;
      }

      const modalTrailer = document.createElement("div");

      modalTrailer.className = `
        fixed inset-0 bg-black/95 
        flex items-center justify-center 
        z-50 p-4
      `;

      modalTrailer.innerHTML = `
        <div class="
          relative 
          w-full 
          max-w-5xl
        ">

          <!-- Botão fechar MOBILE FRIENDLY -->
          <button class="
            absolute top-2 right-2
            bg-black/70
            text-white
            w-10 h-10
            rounded-full
            flex items-center justify-center
            text-xl
            hover:bg-red-600
            transition
          ">
            ✖
          </button>

          <!-- Container responsivo -->
          <div class="w-full aspect-video">
            <iframe 
              class="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/${trailer.key}?autoplay=1"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </div>

        </div>
      `;

      // fechar trailer
      modalTrailer.querySelector("button").addEventListener("click", () => {
        modalTrailer.remove();
      });

      modalTrailer.addEventListener("click", (e) => {
        if (e.target === modalTrailer) {
          modalTrailer.remove();
        }
      });

      document.body.appendChild(modalTrailer);

    });
}


function abrirModal(filme) {

  const modal = document.createElement("div");

  modal.className = `
    fixed inset-0 bg-black/90 backdrop-blur-sm 
    flex items-center justify-center 
    z-50 p-4
  `;

  modal.innerHTML = `
    <div class="
      bg-gray-900 
      rounded-2xl 
      w-full 
      max-w-4xl 
      max-h-[90vh]
      overflow-y-auto
      shadow-2xl 
      relative
    ">

      <!-- Botão fechar -->
      <button id="fechar" class="
        absolute top-3 right-4 
        bg-black/60
        w-10 h-10
        rounded-full
        flex items-center justify-center
        text-white text-xl
        hover:bg-red-600 
        transition
      ">
        ✖
      </button>

      <!-- Layout responsivo -->
      <div class="flex flex-col md:grid md:grid-cols-2">

        <!-- Poster -->
        <img 
          src="https://image.tmdb.org/t/p/w500${filme.poster_path}" 
          alt="${filme.title}" 
          class="w-full h-72 md:h-full object-cover"
        />

        <!-- Informações -->
        <div class="p-6">
          <h2 class="text-xl md:text-2xl font-bold text-white mb-2">
            ${filme.title}
          </h2>

          <p class="text-gray-400 text-sm mb-4">
            ⭐ ${filme.vote_average.toFixed(1)} 
            • 📅 ${filme.release_date?.split("-")[0] || "N/A"}
          </p>

          <p class="text-gray-300 leading-relaxed text-sm">
            ${filme.overview || "Sinopse não disponível."}
          </p>

          <button id="btnTrailer" class="
            mt-6 w-full bg-red-600 hover:bg-red-700 
            text-white font-semibold py-3 
            rounded-xl transition 
            hover:shadow-red-500/40 hover:shadow-md
          ">
            🎬 Assistir Trailer
          </button>

        </div>
      </div>
    </div>
  `;

  // abrir trailer
  modal.querySelector("#btnTrailer").addEventListener("click", () => {
    abrirTrailer(filme.id);
  });

  // fechar
  modal.querySelector("#fechar").addEventListener("click", () => {
    modal.remove();
    document.body.style.overflow = "auto";
  });

  // fechar clicando fora
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.style.overflow = "auto";
    }
  });

  // impedir scroll do fundo
  document.body.style.overflow = "hidden";

  document.body.appendChild(modal);
}



const filmes = [
    {
      titulo: "Matrix",
      descricao: "Um hacker descobre a verdade sobre a realidade.",
      imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      link: "https://exemplo.com/assistir/matrix"
    },
    {
      titulo: "Vingadores: Ultimato",
      descricao: "Os heróis se reúnem para derrotar Thanos.",
      imagem: "https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg"
    },
    {
      titulo: "Homem-Aranha: Sem Volta Para Casa",
      descricao: "Peter Parker enfrenta múltiplos vilões.",
      imagem: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },
    {
      titulo: "Pecadores",
      descricao: "Dispostos a deixar suas vidas conturbadas para trás...",
      imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/a9kYEboW1TQaeilGYUAx1MO0DUp.jpg"
    },
    {
      titulo: "Doctor Who (2024)",
      descricao: "O Doutor e sua companheira Ruby Sunday viajam através do espaço.....",
      imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/2hYT8Sg85f1adGhVhBjT7724lz0.jpg"
    },
    {
        titulo: "Doctor Who (2024)",
        descricao: "O Doutor e sua companheira Ruby Sunday viajam através do espaço.....",
        imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/2hYT8Sg85f1adGhVhBjT7724lz0.jpg"
    },
    {
        titulo: "Doctor Who (2024)",
        descricao: "O Doutor e sua companheira Ruby Sunday viajam através do espaço.....",
        imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/2hYT8Sg85f1adGhVhBjT7724lz0.jpg"
    }
  ];
  
  const containerDestaque = document.getElementById('lista-filmes');
  
  filmes.forEach(filme => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${filme.imagem}" alt="${filme.titulo}" />
      <div class="movie-info">
        
        <a href="${filme.link}" class="watch-btn" target="_blank">🎬 Assistir Online</a>
      </div>
    `;
    containerDestaque.appendChild(card);
  });
  
  // Navegação lateral
  const btnEsquerdaDestaque = document.getElementById('btn-esquerda-destaque');
  const btnDireitaDestaque = document.getElementById('btn-direita-destaque');
  
  btnEsquerdaDestaque.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  btnDireitaDestaque.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
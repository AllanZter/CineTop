const filmesDrama = [
    {
      titulo: "Matrix",
      descricao: "Um hacker descobre a verdade sobre a realidade.",
      imagem: "https://images-01.ottvs.com.br/0452226/0452226_200.jpg?1178165930",
      link: ""
    },
    {
      titulo: "Vingadores: Ultimato",
      descricao: "Os heróis se reúnem para derrotar Thanos.",
      imagem: "https://images-01.ottvs.com.br/0452230/0452230_200.jpg?1004727515"
    },
    {
      titulo: "Homem-Aranha: Sem Volta Para Casa",
      descricao: "Peter Parker enfrenta múltiplos vilões.",
      imagem: "https://images-01.ottvs.com.br/0280432/0280432_200.jpg?1562352997"
    },
    {
      titulo: "Pecadores",
      descricao: "Dispostos a deixar suas vidas conturbadas para trás...",
      imagem: "https://images-01.ottvs.com.br/0457438/0457438_200.jpg?183370119"
    },
    {
      titulo: "Doctor Who (2024)",
      descricao: "O Doutor e sua companheira Ruby Sunday viajam através do espaço.....",
      imagem: "https://images-01.ottvs.com.br/0174373/0174373_200.jpg?1260674422"
    },
    {
        titulo: "Doctor Who (2024)",
        descricao: "O Doutor e sua companheira Ruby Sunday viajam através do espaço.....",
        imagem: "https://images-01.ottvs.com.br/0456756/0456756_127.jpg?1028219294"
    },
    {
        titulo: "Doctor Who (2024)",
        descricao: "O Doutor e sua companheira Ruby Sunday viajam através do espaço.....",
        imagem: "https://images-01.ottvs.com.br/0180256/0180256_127.jpg?161442201"
    }
  ];
  
  const container = document.getElementById('drama');
  
  filmesDrama.forEach(drama => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${drama.imagem}" alt="${drama.titulo}" />
      <div class="movie-info">
        
        <a href="${drama.link}" class="watch-btn" target="_blank">🎬 Assistir Online</a>
      </div>
    `;
    container.appendChild(card);
  });
  
  // Navegação lateral
  const btnEsquerdaDrama = document.getElementById('btn-esquerda-drama');
  const btnDireitaDrama = document.getElementById('btn-direita-drama');
  
  btnEsquerdaDrama.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  btnDireitaDrama.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
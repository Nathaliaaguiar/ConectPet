// Dados exemplo - esses dados podem ser substituídos por dados do localStorage depois
const animaisAdocao = [
  {
    nome: "Luna",
    descricao: "Cachorra dócil e brincalhona, 2 anos, porte médio.",
    local: "Centro Comunitário, Rua das Flores",
    imagem: "img/2.jpg"
  },
  {
    nome: "Tobias",
    descricao: "Gato carinhoso, castrado, 3 anos.",
    local: "Bairro Jardim",
    imagem: "img/gato.jpg"
  }
];

const animaisPerdidos = [
  {
    nome: "Bolt",
    descricao: "Cachorro perdido, porte pequeno, com coleira vermelha.",
    local: "Praça Central",
    imagem: "img/1.jpg"
  },
  {
    nome: "Mimi",
    descricao: "Gata branca com manchas pretas, sumiu no bairro Vista Alegre.",
    local: "Bairro Vista Alegre",
    imagem: "img/mim.jpg"
  }
];

function criarCard(animal) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${animal.imagem}" alt="Foto de ${animal.nome}">
    <div class="card-content">
      <h3>${animal.nome}</h3>
      <p><strong>Descrição:</strong> ${animal.descricao}</p>
      <p><strong>Local:</strong> ${animal.local}</p>
    </div>
  `;

  return card;
}

function carregarAnimais() {
  const containerAdocao = document.getElementById('adocao');
  const containerPerdidos = document.getElementById('perdidos');

  // Limpa containers
  containerAdocao.innerHTML = '';
  containerPerdidos.innerHTML = '';

  // Adiciona cards de adoção
  animaisAdocao.forEach(animal => {
    containerAdocao.appendChild(criarCard(animal));
  });

  // Adiciona cards de perdidos
  animaisPerdidos.forEach(animal => {
    containerPerdidos.appendChild(criarCard(animal));
  });
}

// Executa ao carregar a página
window.addEventListener('DOMContentLoaded', carregarAnimais);


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

const linguagens = [
    {
        tipo: "HTML",
        classeIcon: "fa-brands fa-html5"
    },
    {
        tipo: "CSS",
        classeIcon: "fa-brands fa-css3-alt"
    },
    {
        tipo: "JavaScript",
        classeIcon: "fa-brands fa-square-js"
    }
]

const projetos = [
    {
        nome: "Projeto I - Arcade",
        descricao: "Site fictício de uma loja de conserto de consoles",
        link: "https://carolgonzaga.github.io/projeto-arcade/",
        imagem: "./src/imagens/maquina-de-arcade.png",
        descImagem: "Imagem de uma Máquina de Fliperama",
        linguagem: [linguagens[0], linguagens[1]]

    },
    {
        nome: "Projeto II - Personal Page",
        descricao: "Site currículo pessoal",
        link: "https://carolgonzaga.github.io/projeto-curriculo/",
        imagem: "./src/imagens/carteira-de-identidade.png",
        descImagem: "Imagem de uma Carteira de Identidade",
        linguagem: [linguagens[0], linguagens[1]]
    },
    {
        nome: "Projeto III - Mortal Fight in Turns",
        descricao: "Jogo de luta baseado em turnos",
        link: "https://carolgonzaga.github.io/projeto-mortal-fight/",
        imagem: "./src/imagens/batalha.png",
        descImagem: "Imagem de duas espadas cruzadas",
        linguagem: [linguagens[0], linguagens[1], linguagens[2]]
    },
    {
        nome: "Projeto IV - Final Fantasy VIII",
        descricao: "Site com a ficha dos personagens de Final Fantasy VIII",
        link: "https://carolgonzaga.github.io/projeto-finalfantasy/",
        imagem: "./src/imagens/chocobo.png",
        descImagem: "Imagem de um Chocobo (Criatura dos Jogos Final Fantasy)",
        linguagem: [linguagens[0], linguagens[1], linguagens[2]]
    },
    {
        nome: "Projeto V - PokeGendex",
        descricao: "Site com a listagem de Pokémons Geração I",
        link: "https://carolgonzaga.github.io/projeto-pokedex/",
        imagem: "./src/imagens/cinema.png",
        descImagem: "Imagem de uma Pokebola (Pokémon)",
        linguagem: [linguagens[0], linguagens[1], linguagens[2]]
    },
    {
        nome: "Projeto VI - Ping-Pong",
        descricao: "Jogo de PingPong - Usuário vs Máquina",
        link: "https://carolgonzaga.github.io/projeto-pingpong/",
        imagem: "./src/imagens/ping-pong.png",
        descImagem: "Imagem de uma raquete de ping-pong",
        linguagem: [linguagens[0], linguagens[1], linguagens[2]]
    },
    {
        nome: "Projeto VII - Senhador",
        descricao: "Site gerador de senhas",
        link: "https://carolgonzaga.github.io/projeto-senhador/",
        imagem: "./src/imagens/lock.png",
        descImagem: "Imagem de um cadeado fechado",
        linguagem: [linguagens[0], linguagens[1], linguagens[2]]
    },
]

const lista = document.querySelector("#lista-projetos")

function carregaLista() {
    lista.innerHTML = "";

    projetos.map(function (projeto) {
        lista.innerHTML += `<li class="link">
        <div class="btn">
            <a href="${projeto.link}" target="_blank">
                <img src="${projeto.imagem}" alt="${projeto.descImagem}">
            </a>
        </div>
        <div class="text">
            <h2 class="project-title">${projeto.nome}</h2>
            <p>${projeto.descricao}</p>
            <ul class="badges">
                ${projeto.linguagem.map(function (item) {
                    return `
                    <li>
                        <i class="${item.classeIcon}"></i>
                        <span>${item.tipo}</span>
                    </li> 
                    `
                }).join('')}
            </ul>
        </div>
    </li>`
    })
};

carregaLista();
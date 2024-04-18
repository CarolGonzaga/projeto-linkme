const tecnologias = [
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
    },
    {
        tipo: "TypeScript",
        classeIcon: "fa-solid fa-code"
    },
    {
        tipo: "React",
        classeIcon: "fa-brands fa-react"
    },
    {
        tipo: "Vue",
        classeIcon: "fa-brands fa-vuejs"
    },
    {
        tipo: "APIREST",
        classeIcon: "fa-solid fa-database"
    }
]

const projetos = [
    {
        nome: "Projeto - Arcade",
        descricao: "Site fictício de uma loja de conserto de consoles",
        link: "https://carolgonzaga.github.io/projeto-arcade/",
        imagem: "./src/imagens/maquina-de-arcade.png",
        descImagem: "Imagem de uma Máquina de Fliperama",
        tecnologia: [tecnologias[0], tecnologias[1]]

    },
    {
        nome: "Projeto - Personal Page",
        descricao: "Site currículo pessoal",
        link: "https://carolgonzaga.github.io/projeto-curriculo/",
        imagem: "./src/imagens/carteira-de-identidade.png",
        descImagem: "Imagem de uma Carteira de Identidade",
        tecnologia: [tecnologias[0], tecnologias[1]]
    },
    {
        nome: "Projeto - Mortal Fight in Turns",
        descricao: "Jogo de luta baseado em turnos",
        link: "https://carolgonzaga.github.io/projeto-mortal-fight/",
        imagem: "./src/imagens/batalha.png",
        descImagem: "Imagem de duas espadas cruzadas",
        tecnologia: [tecnologias[0], tecnologias[1], tecnologias[2]]
    },
    {
        nome: "Projeto - Final Fantasy VIII",
        descricao: "Site com a ficha dos personagens de Final Fantasy VIII",
        link: "https://carolgonzaga.github.io/projeto-finalfantasy/",
        imagem: "./src/imagens/chocobo.png",
        descImagem: "Imagem de um Chocobo (Criatura dos Jogos Final Fantasy)",
        tecnologia: [tecnologias[0], tecnologias[1], tecnologias[2]]
    },
    {
        nome: "Projeto - PokeGendex",
        descricao: "Site com a listagem de Pokémons Geração I",
        link: "https://carolgonzaga.github.io/projeto-pokedex/",
        imagem: "./src/imagens/cinema.png",
        descImagem: "Imagem de uma Pokebola (Pokémon)",
        tecnologia: [tecnologias[0], tecnologias[1], tecnologias[2]]
    },
    {
        nome: "Projeto - Ping-Pong",
        descricao: "Jogo de PingPong - Usuário vs Máquina",
        link: "https://carolgonzaga.github.io/projeto-pingpong/",
        imagem: "./src/imagens/ping-pong.png",
        descImagem: "Imagem de uma raquete de ping-pong",
        tecnologia: [tecnologias[0], tecnologias[1], tecnologias[2]]
    },
    {
        nome: "Projeto - Senhador",
        descricao: "Site gerador de senhas",
        link: "https://carolgonzaga.github.io/projeto-senhador/",
        imagem: "./src/imagens/lock.png",
        descImagem: "Imagem de um cadeado fechado",
        tecnologia: [tecnologias[0], tecnologias[1], tecnologias[2]]
    },
    {
        nome: "Projeto - Trunfo do Terror",
        descricao: "Jogo de Cartas com temática de Terror",
        link: "https://carolgonzaga.github.io/projeto-trunfodoterror/",
        imagem: "./src/imagens/ghost.png",
        descImagem: "Imagem de um cadeado fechado",
        tecnologia: [tecnologias[0], tecnologias[1], tecnologias[3]]
    },
    {
        nome: "Projeto - Madame Burguer",
        descricao: "Site para montar e gerenciar pedidos",
        link: "https://projeto-madameburger.vercel.app/",
        imagem: "./src/imagens/burger.png",
        descImagem: "Imagem de um Hambúrguer",
        tecnologia: [tecnologias[2], tecnologias[5], tecnologias[6]]
    },
    {
        nome: "Projeto - Jogo da Velha",
        descricao: "Clássico Jogo da Velha (Tic-Tac-Toe)",
        link: "https://projeto-jogo-da-velha-eight.vercel.app/",
        imagem: "./src/imagens/velha.png",
        descImagem: "Imagem do tabuleiro do Jogo da Velha",
        tecnologia: [tecnologias[1], tecnologias[2], tecnologias[4]]
    }
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
                ${projeto.tecnologia.map(function (item) {
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
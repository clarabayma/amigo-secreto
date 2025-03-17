// Lista de participantes
let participantes = [];

// Selecionando elementos do HTML
const inputNome = document.querySelector("#amigo");
const botaoAdicionar = document.querySelector(".button-add");
const listaParticipantes = document.querySelector("#listaAmigos");
const botaoSortear = document.querySelector(".button-draw");
const resultadoDiv = document.querySelector("#resultado");

// Adicionar nome à lista
function adicionarAmigo() {
    const nome = inputNome.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
    
    if (participantes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    participantes.push(nome);
    atualizarLista();
    inputNome.value = ""; // Limpa o campo após adicionar
}

// Atualizar a lista de participantes na tela
function atualizarLista() {
    listaParticipantes.innerHTML = "";
    
    participantes.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        listaParticipantes.appendChild(item);
    });
}

// Sortear amigo secreto
function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const nomeSorteado = participantes[indiceSorteado];
    
    resultadoDiv.innerHTML = `<li>Amigo Secreto: <strong>${nomeSorteado}</strong></li>`;
}

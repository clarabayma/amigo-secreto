# Jogo do Amigo Secreto 🎉

## Sobre o Projeto
Este é um simples jogo de **Amigo Secreto** desenvolvido em **JavaScript, HTML e CSS**. O projeto permite que os usuários adicionem nomes à lista de participantes e realizem um sorteio aleatório para selecionar um amigo secreto.

## Funcionalidades 🚀
- ✅ **Adicionar nomes**: O usuário digita um nome e adiciona à lista.
- ✅ **Validação de entrada**: Evita nomes vazios e duplicados.
- ✅ **Exibir lista de participantes**: Mostra os nomes adicionados dinamicamente.
- ✅ **Sortear um amigo secreto**: Escolhe aleatoriamente um nome da lista e exibe o resultado.

## Como Usar 🛠️
1. Clone ou faça o download do repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Digite o nome de um participante e clique em "Adicionar".
4. Repita o processo para adicionar mais amigos.
5. Clique no botão "Sortear amigo" para escolher um amigo secreto aleatório.

## Estrutura do Projeto 📂
```
📁 challenge-amigo-secreto
│-- 📄 index.html  # Estrutura da página
│-- 📄 style.css   # Estilização da interface
│-- 📄 app.js      # Lógica do jogo
│-- 📁 assets      # Imagens e ícones
```

## Código-Fonte do `app.js` 📜
O arquivo `app.js` contém a lógica para adicionar nomes, atualizar a lista e sortear um amigo secreto. Confira abaixo um trecho do código:

```javascript
// Lista de participantes
let participantes = [];

// Adicionar nome à lista
function adicionarAmigo() {
    const nome = document.querySelector("#amigo").value.trim();
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
}

// Sortear amigo secreto
function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const nomeSorteado = participantes[indiceSorteado];
    document.querySelector("#resultado").innerHTML = `<li>Amigo Secreto: <strong>${nomeSorteado}</strong></li>`;
}
```

## Tecnologias Utilizadas 🛠️
- **HTML5** para a estrutura da página.
- **CSS3** para a estilização.
- **JavaScript** para a lógica do jogo.

## Contribuição 🤝
Sinta-se à vontade para contribuir com melhorias para este projeto. Basta fazer um **fork**, criar uma **branch** e enviar um **pull request**! 🚀

## Licença 📜
Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e modificá-lo!

---
Criado com ❤️ para ajudar na diversão do Amigo Secreto! 🎁


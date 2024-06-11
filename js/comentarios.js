// Seleciona elementos
var modal = document.getElementById("comentarioModal");
var btn = document.getElementById("comenta");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("comentarioForm");
var cardsContainer = document.getElementById("cardsContainer2");

var isEditing = false;
var currentCard;

// Função para abrir o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Função para fechar o modal
span.onclick = function() {
    modal.style.display = "none";
    form.reset();
    isEditing = false;
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        form.reset();
        isEditing = false;
    }
}

// Função para adicionar o card
form.onsubmit = function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    var nome = document.getElementById("nome").value;
    var comentario = document.getElementById("comentario").value;

    if (isEditing && currentCard) {
        currentCard.querySelector("h4").innerText = nome;
        currentCard.querySelector("p").innerText = comentario;
        isEditing = false;
    } else {
        // Cria um novo elemento div para o card
        var card = document.createElement("div");
        card.className = "card6";
        card.innerHTML = `
            <h4>${nome}</h4>
            <p>${comentario}</p>
            <div class="card-buttons">
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Apagar</button>
            </div>
        `;

        // Adiciona o card ao container
        cardsContainer.appendChild(card);

        // Adiciona eventos aos botões de editar e apagar
        card.querySelector(".edit-btn").onclick = function() {
            editCard(card);
        }
        card.querySelector(".delete-btn").onclick = function() {
            deleteCard(card);
        }
    }

    // Fecha o modal e limpa o formulário
    modal.style.display = "none";
    form.reset();
}

// Função para editar um card
function editCard(card) {
    var nome = card.querySelector("h4").innerText;
    var comentario = card.querySelector("p").innerText;

    document.getElementById("nome").value = nome;
    document.getElementById("comentario").value = comentario;

    modal.style.display = "block";
    isEditing = true;
    currentCard = card;
}

// Função para apagar um card
function deleteCard(card) {
    card.remove();
}

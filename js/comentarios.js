
var modal = document.getElementById("comentarioModal");
var btn = document.getElementById("comenta");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("comentarioForm");
var cardsContainer = document.getElementById("cardsContainer2");

var isEditing = false;
var currentCard;

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    form.reset();
    isEditing = false;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        form.reset();
        isEditing = false;
    }
}

form.onsubmit = function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var comentario = document.getElementById("comentario").value;

    if (isEditing && currentCard) {
        currentCard.querySelector("h4").innerText = nome;
        currentCard.querySelector("p").innerText = comentario;
        isEditing = false;
    } else {
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

        cardsContainer.appendChild(card);


        card.querySelector(".edit-btn").onclick = function() {
            editCard(card);
        }
        card.querySelector(".delete-btn").onclick = function() {
            deleteCard(card);
        }
    }

    modal.style.display = "none";
    form.reset();
}

function editCard(card) {
    var nome = card.querySelector("h4").innerText;
    var comentario = card.querySelector("p").innerText;

    document.getElementById("nome").value = nome;
    document.getElementById("comentario").value = comentario;

    modal.style.display = "block";
    isEditing = true;
    currentCard = card;
}

function deleteCard(card) {
    card.remove();
}

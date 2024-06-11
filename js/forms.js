
document.getElementById('chamadoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;

    const card = document.createElement('div');
    card.classList.add('card2');
    card.innerHTML = `
        <h2>Chamado de ${nome} ${sobrenome}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Descrição:</strong> ${comentario}</p>
        <div class="card-buttons">
            <button onclick="editCard(this)">Editar</button>
            <button onclick="deleteCard(this)">Excluir</button>
        </div>
    `;

    document.getElementById('cardsContainer').appendChild(card);

    const popup = document.getElementById('popup');
        popup.style.display = 'block';

        setTimeout(function() {
            popup.style.display = 'none';
        }, 3000);
    
    document.getElementById('chamadoForm').reset();
});

   function editCard(button) {
        const card = button.parentElement.parentElement;
        const nomeSobrenome = card.querySelector('h2').innerText.split(' ');
        const email = card.querySelector('p strong').nextSibling.textContent;
        const comentario = card.querySelector('p:nth-of-type(2)').innerText.replace('Comentário: ', '');

        document.getElementById('nome').value = nomeSobrenome[2];
        document.getElementById('sobrenome').value = nomeSobrenome.slice(3).join(' ');
        document.getElementById('email').value = email.trim();
        document.getElementById('comentario').value = comentario;

        card.remove();
    }

    function deleteCard(button) {
        const card = button.parentElement.parentElement;
        card.remove();
    }
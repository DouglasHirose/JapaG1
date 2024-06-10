document.addEventListener('DOMContentLoaded', () => {
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
    `;

    document.getElementById('cardsContainer').appendChild(card);

    const popup = document.getElementById('popup');
        popup.style.display = 'block';

        setTimeout(function() {
            popup.style.display = 'none';
        }, 3000);
    
    document.getElementById('chamadoForm').reset();
});
});
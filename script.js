const contatoForm = document.getElementById('contato-form');
const sucessoMsg = document.getElementById('sucesso');

contatoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    sucessoMsg.style.display = 'block';

});


const buttonElement = document.getElementById('checkButton');

// alert('Você clicou no botão!');


buttonElement.addEventListener('click', function () {
    numero = document.getElementById('numeroInput').value;
    if (numero <= 10) {
        buttonElement.classList.remove('button-green')
        buttonElement.classList.add('button-red')

    } else {
        buttonElement.classList.remove('button-red')
        buttonElement.classList.add('button-green')
    }
    console.log(numero);
});



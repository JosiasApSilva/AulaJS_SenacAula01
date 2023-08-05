

// const buttonElement = document.getElementById('checkButton');

// // alert('Você clicou no botão!');


// buttonElement.addEventListener('click', function () {
//     numero = document.getElementById('numeroInput').value;
//     if (numero <= 10) {
//         buttonElement.classList.remove('button-green')
//         buttonElement.classList.add('button-red')

//     } else {
//         buttonElement.classList.remove('button-red')
//         buttonElement.classList.add('button-green')
//     }
//     console.log(numero);
// });

const resultado = $('#resultadoMensagem')
$('#checkButton').click(() => {
    var inputValue = $('#numeroInput').val()
    if (inputValue == '') {
        alert('O Valor digitado não é um número válido!');
        resultado.removeClass('button-red')
        $('#resultadoMensagem').removeClass('button-green')
        $('#resultadoMensagem').html('')
    } else if (inputValue > 10) {
        $('#resultadoMensagem').addClass('button-green')
        $('#resultadoMensagem').removeClass('button-red')
        $('#resultadoMensagem').html('O valor  ' + inputValue + ' é maior que 10!')
    } else {
        $('#resultadoMensagem').removeClass('button-green')
        $('#resultadoMensagem').addClass('button-red')
        $('#resultadoMensagem').html('O valor  ' + inputValue + ' é menor que 10!')
    }
})






const buttonElement = document.getElementById('checkButton');

buttonElement.addEventListener('click', function () {
  const numero = parseInt(document.getElementById('numberInput').value);
  const paragraphElement = document.getElementById('messengerResult');
 
// // Altera o conteúdo do parágrafo

  if (numero <= 10) {
    buttonElement.classList.remove('button-green');
    buttonElement.classList.add('button-red');
    // alert('O número é menor ou igual a 10!');
    paragraphElement.innerHTML = '<strong>O número é menor ou igual a 10</strong>';
  } else {
    buttonElement.classList.remove('button-red');
    buttonElement.classList.add('button-green');
    // alert('O número é maior que 10!');
    paragraphElement.innerHTML = '<strong>O número é maior que 10</strong>';
  }
});
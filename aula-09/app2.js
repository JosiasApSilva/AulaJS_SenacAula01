
const numeroSorteado = 50 


    const numero = document.getElementById('tentativaInput');
    const paragraphElement = document.getElementById('resultMessage');
    buttonElement = document.getElementById('checkButton');

    buttonElement.addEventListener('click', function () {
    
 
  console.log(numero)

  if (numero < numeroSorteado) {
  paragraphElement.classList.add('result-success');  
  document.getElementById('resultMessage').innerHTML = 'O número é maior'
  } else if(numero == numeroSorteado) {
    paragraphElement.classList.add('result-fail');  
   document.getElementById('resultMessage').innerHTML = 'O número é menor'
  } else {
    paragraphElement.classList.add('result-error'); 
    document.getElementById('resultMessage').innerHTML = 'Erro'
  }
})




// maquina_jogada = Math.floor(Math.random() * 100)

// console.log(maquina_jogada)
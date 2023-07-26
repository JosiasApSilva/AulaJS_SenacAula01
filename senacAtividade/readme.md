Verificador Menor ou Maior que 10

Aplicativo web que permite ao usuário inserir um número em um campo de entrada e verificar se o valor é menor ou maior que 10. A proposta inicial em sala de aula era mostrar o resultado alterando a cor do botão, de acordo com o número inserido. nesta versao um alerta é exibido para fornecer ao usuário o resultado da verificação.

O botão mudará sua cor de fundo para vermelho se o número inserido for menor ou igual a 10, e para verde se for maior que 10. Além disso, um alerta informará ao usuário se o número é menor ou maior que 10.

Tecnologias utilizadas
HTML5
CSS3
JavaScript

JavaScript (script.js)

O código JavaScript seleciona o botão e adiciona o evento "click".
Dentro do evento, o código faz o seguinte:
Obtém o valor digitado no campo de entrada "numeroInput" usando document.getElementById('numberInput').value. Esse valor é uma string e, portanto, é convertido em um número inteiro usando parseInt().
Verifica se o número é menor ou igual a 10. Se for, remove a classe "button-green" (caso estivesse presente) do botão e adiciona a classe "button-red" para torná-lo vermelho.
Caso contrário, remove a classe "button-red" (caso estivesse presente) do botão e adiciona a classe "button-green" para torná-lo verde.
Em seguida, exibe um alerta para informar ao usuário se o número é menor ou maior que 10.
O código utiliza buttonElement.classList.remove() e buttonElement.classList.add() para manipular as classes do botão, permitindo alternar entre as cores de fundo vermelho e verde.
A mensagem de aviso também é exibida usando o alert() do JavaScript.
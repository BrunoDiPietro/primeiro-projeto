function arredondar() {
  var n1 = document.getElementById('n1').value
  var resultado = Math.round(n1)
  document.getElementById('resultado1').value = resultado;
}

function potenciação() {
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value
  var resultado = Math.pow(num1, num2);
  document.getElementById('resultado2').value = resultado;
}

function comprimentoCircunferencia() {
  var number1 = document.getElementById('number1').value
  var resultado = 2 * Math.PI * number1;
  document.getElementById('resultado3').value = resultado;
}


function areaCircunferencia() {
  var nume1 = document.getElementById('nume1').value
  var resultado = Math.PI * Math.pow(nume1, 2);
  document.getElementById('resultado4').value = resultado;
}

function areaBase() {
  var nu1 = document.getElementById('nu1').value
  var resultado = Math.pow(nu1, 2);
  document.getElementById('resultado5').value = resultado;
}


function areaTotal() {
  var numeros1 = document.getElementById('numeros1').value
  var resultado = 6 * Math.pow(numeros1, 2);
  document.getElementById('resultado6').value = resultado;
}

function volumeCubo() {
  var numeroo1 = document.getElementById('numeroo1').value
  var resultado = Math.pow(numeroo1, 3);
  document.getElementById('resultado7').value = resultado;
}

const botao = document.getElementById('calcular')

function raizQuadrada() {
  var numero1 = document.getElementById('numero1').value
  var resultado = Math.sqrt(numero1);
  document.getElementById('resultado8').value = resultado;
}

botao.addEventListener('click', raizQuadrada)








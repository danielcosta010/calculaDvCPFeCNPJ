
var cpf = document.getElementById('numCpf');
var cpfDV = document.getElementById('cpfDV');
var buttonCpf = document.getElementById('button');
var erro = document.querySelector('[data-erro]');

function validaPrimeiroDigito(numCpf) {
  erro.innerHTML = ''
  cpf.style.border = '1px solid black' 
  
  if(cpf.value.length < 9) {
    erro.innerHTML = 'Você deve digitar 9 números'
    cpf.style.border = '2px solid red' 
  }

  soma1 = 0;
  let multiplicador = 10;

  for (let i = 0; i < 9; i++) {
      soma1 += numCpf[i] * multiplicador;
      multiplicador--
  }

  soma1 = (soma1 * 10) % 11;


  if (soma1 == 10 || soma1 == 11) {
      soma1 = 0;
  }

  return soma1 != numCpf[9] ; 
  }

  function validaSegundoDigito(cpf) {
  soma2 = 0;
  let multiplicador = 11;

  for (let i = 0; i < 10; i++) {
      soma2 += cpf[i] * multiplicador;
      multiplicador--
  }

  soma2 = (soma2 * 10) % 11;

  if (soma2 == 10 || soma2 == 11) {
      soma2 = 0;
  }

  return soma2 != cpf[10];

}

buttonCpf.addEventListener('click', () => {
  
  validaPrimeiroDigito(cpf.value);
  validaSegundoDigito(cpf.value + soma1);
  cpfDV.value = `${soma1}${soma2}`;

})






var $ = document.querySelector.bind(document)

var erroCnpj = $('[data-erro__cnpj]');
var erroCnpjFiliais = $('[data-erro__cnpjFiliais]');
var cnpjInput = $('[data-cnpj]');
var cnpjFiliais = $('[data-cnpj-fil]')

function cgc(form) {
  erroCnpj.innerHTML = ' ';
  cnpjInput.style.border = '1px solid black'
  let cgcNum = (form.cgcNum.value);

  if (cgcNum.length != 12) {

    erroCnpj.innerHTML = 'Você deve digitar 12 números'
    cnpjInput.style.border = '2px solid red' 

  }
  cgcDig1 = cgcNum.slice(11); b1 = eval(cgcDig1);
  cgcDig2 = cgcNum.slice(10, 11); b2 = eval(cgcDig2);
  cgcDig3 = cgcNum.slice(9, 10); b3 = eval(cgcDig3);
  cgcDig4 = cgcNum.slice(8, 9); b4 = eval(cgcDig4);
  cgcDig5 = cgcNum.slice(7, 8); b5 = eval(cgcDig5);
  cgcDig6 = cgcNum.slice(6, 7); b6 = eval(cgcDig6);
  cgcDig7 = cgcNum.slice(5, 6); b7 = eval(cgcDig7);
  cgcDig8 = cgcNum.slice(4, 5); b8 = eval(cgcDig8);
  cgcDig9 = cgcNum.slice(3, 4); b9 = eval(cgcDig9);
  cgcDig10 = cgcNum.slice(2, 3); b10 = eval(cgcDig10);
  cgcDig11 = cgcNum.slice(1, 2); b11 = eval(cgcDig11);
  cgcDig12 = cgcNum.slice(0, 1); b12 = eval(cgcDig12);
  cgcPriDig = (b1 * 9 + b2 * 8 + b3 * 7 + b4 * 6 + b5 * 5 + b6 * 4 + b7 * 3 + b8 * 2 + b9 * 9 + b10 * 8 + b11 * 7 + b12 * 6) % 11;
  if (cgcPriDig == 10) { cgcPriDig = 0; }
  cgcSegDig = (cgcPriDig * 9 + b1 * 8 + b2 * 7 + b3 * 6 + b4 * 5 + b5 * 4 + b6 * 3 + b7 * 2 + b8 * 9 + b9 * 8 + b10 * 7 + b11 * 6 + b12 * 5) % 11;
  if (cgcSegDig == 10) { cgcSegDig = 0; }
  cgcDV = cgcPriDig * 10 + cgcSegDig;
  if (cgcDV == 0) { cgcDV = "00"; }
  if (cgcDV > 0 && cgcDV < 10) { cgcDV = "0" + cgcDV; }
  trap = Math.random();
  
  form.cgcDV.value = cgcDV;
}

function cnpj(form) {
  erroCnpjFiliais.innerHTML = ' ';
  cnpjFiliais.style.border = '1px solid black'

  let cgcNum = (form.cgcNum.value);
  let cgcFil = (form.cgcFil.value);

  if (cgcNum.length != 12) {

    erroCnpjFiliais.innerHTML = 'Você deve digitar 12 números'
    cnpjFiliais.style.border = '2px solid red'

  }
  if (cgcNum.length != 12) {
    cgcNum = 000000000000
  }
  if (cgcFil.length > 4) {

    alert("O nº de filiais deve ficar \nna faixa de 1 a 9999.")
  }
  if (cgcFil.length > 4) {
    cgcFil = 0
  }
  cgcDig1 = cgcNum.slice(11);     b1 = eval(cgcDig1);
  cgcDig2 = cgcNum.slice(10, 11); b2 = eval(cgcDig2);
  cgcDig3 = cgcNum.slice(9, 10);  b3 = eval(cgcDig3);
  cgcDig4 = cgcNum.slice(8, 9);   b4 = eval(cgcDig4);
  cgcDig5 = cgcNum.slice(7, 8);   b5 = eval(cgcDig5);
  cgcDig6 = cgcNum.slice(6, 7);   b6 = eval(cgcDig6);
  cgcDig7 = cgcNum.slice(5, 6);   b7 = eval(cgcDig7);
  cgcDig8 = cgcNum.slice(4, 5);   b8 = eval(cgcDig8);
  cgcDig9 = cgcNum.slice(3, 4);   b9 = eval(cgcDig9);
  cgcDig10 = cgcNum.slice(2, 3);  b10 = eval(cgcDig10);
  cgcDig11 = cgcNum.slice(1, 2);  b11 = eval(cgcDig11);
  cgcDig12 = cgcNum.slice(0, 1);  b12 = eval(cgcDig12);
  trap = Math.random();

  cgcPriDig = (b1 * 9 + b2 * 8 + b3 * 7 + b4 * 6 + b5 * 5 + b6 * 4 + b7 * 3 + b8 * 2 + b9 * 9 + b10 * 8 + b11 * 7 + b12 * 6) % 11;

  if (cgcPriDig == 10) {
    cgcPriDig = 0
  }
  cgcSegDig = (cgcPriDig * 9 + b1 * 8 + b2 * 7 + b3 * 6 + b4 * 5 + b5 * 4 + b6 * 3 + b7 * 2 + b8 * 9 + b9 * 8 + b10 * 7 + b11 * 6 + b12 * 5) % 11;

  if (cgcSegDig == 10) {
    cgcSegDig = 0
  }
  cgcDV = cgcPriDig * 10 + cgcSegDig;
  if (cgcDV == 0) { cgcDV = "00"; }
  if (cgcDV > 0 && cgcDV < 10) { cgcDV = "0" + cgcDV; }
  cgcList = cgcNum + cgcDV + " ";
  index = 1; while (index < cgcFil) {
    cgcNum = cgcNum - 0;                        /* converter a string em número */
    cgcNum = cgcNum + 1;                        /* somar 1 no looping */
    cgcNum = cgcNum.toString();               /* reverter o número para string */
    cgcNum = "00000000000" + cgcNum;          /* recuperar os zeros à esquerda, */
    cgcNum = cgcNum.slice(cgcNum.length - 12);  /* que foram perdidos na 1ª linha */

    cgcDig1 = cgcNum.slice(11); b1 = eval(cgcDig1);
    cgcDig2 = cgcNum.slice(10, 11); b2 = eval(cgcDig2);
    cgcDig3 = cgcNum.slice(9, 10); b3 = eval(cgcDig3);
    cgcDig4 = cgcNum.slice(8, 9); b4 = eval(cgcDig4);
    cgcDig5 = cgcNum.slice(7, 8); b5 = eval(cgcDig5);
    cgcDig6 = cgcNum.slice(6, 7); b6 = eval(cgcDig6);
    cgcDig7 = cgcNum.slice(5, 6); b7 = eval(cgcDig7);
    cgcDig8 = cgcNum.slice(4, 5); b8 = eval(cgcDig8);
    cgcDig9 = cgcNum.slice(3, 4); b9 = eval(cgcDig9);
    cgcDig10 = cgcNum.slice(2, 3); b10 = eval(cgcDig10);
    cgcDig11 = cgcNum.slice(1, 2); b11 = eval(cgcDig11);
    cgcDig12 = cgcNum.slice(0, 1); b12 = eval(cgcDig12);
    cgcPriDig = (b1 * 9 + b2 * 8 + b3 * 7 + b4 * 6 + b5 * 5 + b6 * 4 + b7 * 3 + b8 * 2 + b9 * 9 + b10 * 8 + b11 * 7 + b12 * 6) % 11;
    if (cgcPriDig == 10) { 
      cgcPriDig = 0
    }
    cgcSegDig = (cgcPriDig * 9 + b1 * 8 + b2 * 7 + b3 * 6 + b4 * 5 + b5 * 4 + b6 * 3 + b7 * 2 + b8 * 9 + b9 * 8 + b10 * 7 + b11 * 6 + b12 * 5) % 11;
    if (cgcSegDig == 10) { 
      cgcSegDig = 0
    }
    cgcDV = cgcPriDig * 10 + cgcSegDig;
    if (cgcDV == 0) { 
      cgcDV = "00"
    }
    if (cgcDV > 0 && cgcDV < 10) { 
      cgcDV = "0" + cgcDV
    }
    cgcList = cgcList + cgcNum + cgcDV + " ";
    index = index + 1;
  }
  form.cgcList.value = cgcList;
}


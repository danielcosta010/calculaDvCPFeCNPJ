window.onload = setInterval(horario, 1000);

function horario() {
  var relogio = document.querySelector(".relogio");
  var d = new Date();
  var seg = addZero(d.getSeconds());
  var min = addZero(d.getMinutes());
  var hr = addZero(d.getHours());
  var dia = d.getDate();
  var mes = d.getMonth();
  var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var diaSem = d.getDay();
  var diasSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

  if ((hr >= 5) && (hr < 12)) {
    let bomDia = 'Bom dia!'
    relogio.innerHTML = ` ${diasSemana[diaSem]},  ${dia}  de ${meses[mes]}, ${bomDia} ${hr}:${min}:${seg}`;
  }

  if((hr >= 12) && (hr < 18)) {
    let boaTarde = 'Boa tarde!'
    relogio.innerHTML = ` ${diasSemana[diaSem]},  ${dia}  de ${meses[mes]}, ${boaTarde} ${hr}:${min}:${seg}`;
  }
  if((hr >= 18) && (hr < 24)) {
    let boaNoite = 'Boa Noite!'
    relogio.innerHTML = ` ${diasSemana[diaSem]},  ${dia}  de ${meses[mes]}, ${boaNoite} ${hr}:${min}:${seg}`;
  }
  if((hr >= 0) && (hr < 5)) {
    let boaMadrugada = 'Boa Madrugada!'
    relogio.innerHTML = ` ${diasSemana[diaSem]},  ${dia}  de ${meses[mes]}, ${boaMadrugada} ${hr}:${min}:${seg}`;
  }
    
}

function addZero(i) {
  if (i < 10) {
      i = '0' + i;
  }
  return i;
}

var tabela = document.querySelector('.table');

function table() {
  tabela.DataTable( {
    scrollX: true
  })

  return
}

//////////////////////////////////////////
//                                      //
//   FUNCIONES PARA BOTONES             //
//                                      //
//////////////////////////////////////////

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("bajustes");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("bprejuego");
let sonido1 = new Audio();
let espera;
sonido1.src = "../media/click/mouse-click.wav";

boton1.addEventListener("click", function uno() {
  sonido1.play();
  espera = setTimeout(redireccionar1, 400);
});
boton2.addEventListener("click", function dos() {
  sonido1.play();
  espera = setTimeout(redireccionar2, 400);
});
boton4.addEventListener("click", function cuatro() {
  sonido1.play();
  espera = setTimeout(redireccionar4, 400);
});
boton5.addEventListener("click", function cinco() {
  sonido1.play();
  espera = setTimeout(redireccionar5, 400);
});
boton6.addEventListener("click", function seis() {
  sonido1.play();
  espera = setTimeout(redireccionar6, 400);
});
boton8.addEventListener("click", function ocho() {
  sonido1.play();
  espera = setTimeout(redireccionar8, 400);
});
boton9.addEventListener("click", function nueve() {
  sonido1.play();
  espera = setTimeout(redireccionar9, 400);
});

function redireccionar1() {
  location.replace("../html/portada.html");
}
function redireccionar2() {
  location.replace("../html/autores.html");
}
function redireccionar4() {
  location.replace("../html/desarrollo.html");
}
function redireccionar5() {
  location.replace("../html/referencias.html");
}
function redireccionar6() {
  location.replace("../html/ajustes.html");
}
function redireccionar8() {
  location.replace("../html/Comojugar.html");
}
function redireccionar9() {
  location.replace("../html/prejuego.html");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//      VOLUNEN Y MUSICA DEL JUEGO      //
//                                      //
//////////////////////////////////////////

var volumenGeneral;
var volgen;
let sonido2 = new Audio();
sonido2.src = "../media/cancion1.mp3";
const suena = document.getElementById("logo_prin");

suena.addEventListener("click", function a() {
  volumenGeneral = Number(localStorage.getItem("miVolumen"));
  sonido2.volume = volumenGeneral;
  if (sonido2.paused) {
    sonido2.play();
  } else {
    sonido2.pause();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//        FUNCION PARA LA HORA          //
//                                      //
//////////////////////////////////////////

var udateTime = function () {
  let currentDate = new Date(),
    hours = currentDate.getHours(),
    minutes = currentDate.getMinutes(),
    seconds = currentDate.getSeconds(),
    weekDay = currentDate.getDay(),
    day = currentDate.getDate(),
    month = currentDate.getMonth(),
    year = currentDate.getFullYear();

  const weekDays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Mi\u00E9rcoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  document.getElementById("weekDay").textContent = weekDays[weekDay];
  document.getElementById("day").textContent = day;

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  document.getElementById("month").textContent = months[month];
  document.getElementById("year").textContent = year;

  document.getElementById("hours").textContent = hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

udateTime();

setInterval(udateTime, 1000);

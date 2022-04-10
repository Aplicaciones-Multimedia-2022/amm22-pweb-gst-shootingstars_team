var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var ctx1 = canvas1.getContext("2d");
var contador = 0;
/*const botonmenos = document.getElementById("botonmenos");
const botonmas = document.getElementById("botonmas");*/

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton7 = document.getElementById("bjuego");
const boton8 = document.getElementById("boton8");

let sonido1 = new Audio();
let espera;
sonido1.src = "../audio/click/39562__the-bizniss__mouse-click.wav";

/*var imagen2 = new Image();
imagen2.src = "../images/vol1.png";*/

var canvas2 = document.getElementById("personalizacion");
var ctx2 = canvas2.getContext("2d");


/*miNave1 = getBase64Image(nave1);
localStorage.setItem("miNave", miNave1);*/






boton1.addEventListener("click", function uno() {
  sonido1.play();
  espera = setTimeout(redireccionar1, 400);
});
boton2.addEventListener("click", function dos() {
  sonido1.play();
  espera = setTimeout(redireccionar2, 400);
});
boton3.addEventListener("click", function tres() {
  sonido1.play();
  espera = setTimeout(redireccionar3, 400);
});
boton4.addEventListener("click", function cuatro() {
  sonido1.play();
  espera = setTimeout(redireccionar4, 400);
});
boton5.addEventListener("click", function cinco() {
  sonido1.play();
  espera = setTimeout(redireccionar5, 400);
});
boton8.addEventListener("click", function ocho() {
  sonido1.play();
  espera = setTimeout(redireccionar8, 400);
});
boton7.addEventListener("click", function siete() {
  sonido1.play();
  espera = setTimeout(redireccionar7, 400);
});


//para la parte de personalizacion

nave1.addEventListener("click", function() {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
  var nave1 = document.getElementById("imagen5");
  ctx2.drawImage(nave1, 70, 30, 150, 100);
  /*localStorage.removeItem("miNave");
  localStorage.setItem("miNave", nave1);*/
});
nave2.addEventListener("click", function() {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
  var nave2 = document.getElementById("imagen6");
  ctx2.drawImage(nave2, 70, 0, 170, 120);
  localStorage.removeItem("miNave");
  // miNave2 = getBase64Image(nave2);
  // localStorage.setItem("miNave", miNave2);
});
nave3.addEventListener("click", function() {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
  var nave3 = document.getElementById("imagen7");
  ctx2.drawImage(nave3, 70, 20, 150, 100);
  // miNave3 = getBase64Image(nave3);
  // localStorage.setItem("miNave", miNave3);
});
nave4.addEventListener("click", function() {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
var nave4 = document.getElementById("imagen8");
  ctx2.drawImage(nave4, 50, 10, 170, 120);
  // miNave4 = getBase64Image(nave4);
  // localStorage.setItem("miNave", miNave4);
});

/*function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}*/


function redireccionar1() {
  location.replace("../html/ComoJugar.html");
}

function redireccionar2() {
  location.replace("../html/autores.html");
}

function redireccionar3() {
  location.replace("../html/multimedia.html");
}

function redireccionar4() {
  location.replace("../html/desarrollo.html");
}

function redireccionar5() {
  location.replace("../html/referencias.html");
}

function redireccionar8() {
  location.replace("../html/portada.html");
}

function redireccionar7() {
  location.replace("../html/prejuego.html");
}


/*barra.addEventListener("change", function(ev) {}, true);
ev.currentTarget.value;
var reproductor = document.getElementById("reproductor");
barra.addEventListener(
  "change",
  function(ev) {
    reproductor.volume = ev.currentTarget.value;
  },
  true
);*/

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

var ruta;
var vol;
var volu;
let sonido2 = new Audio();
sonido2.src = "../audio/cancion1.mp3";

const barra= document.getElementById("mislider");

// htmele.addEventListener("mouseover", function rep(event) {
//   event.sonido2.play();
// });
// play.addEventListener("click", function(){
//   sonido2.play();
// });

//barra.addEventListener("change", function(ev) {}, true);
barra.addEventListener(
  "change",
  function (ev) {
    sonido2.volume = ev.currentTarget.value;
    vol = sonido2.volume;
    volu = vol.toString();
    localStorage.setItem("miVolumen", volu);
  },
  true
);

/*var imagen2 = new Image();
imagen2.src = "../images/vol1.png";*/





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

var canvas2 = document.getElementById("personalizacion");
var ctx2 = canvas2.getContext("2d");

nave1.addEventListener("click", function () {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
  var nave1 = document.getElementById("imagen5");
  ctx2.drawImage(nave1, 70, 30, 150, 100);
  ruta = "nave3.png";
  localStorage.setItem("miNave", ruta);
});
nave2.addEventListener("click", function () {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
  var nave2 = document.getElementById("imagen6");
  ctx2.drawImage(nave2, 70, 0, 170, 120);
  ruta = "Ship2.png";

  localStorage.setItem("miNave", ruta);
});
nave3.addEventListener("click", function () {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
  var nave3 = document.getElementById("imagen7");
  ctx2.drawImage(nave3, 70, 20, 150, 100);
  ruta = "Ship1.png";
  localStorage.setItem("miNave", ruta);
});
nave4.addEventListener("click", function () {
  sonido1.play();
  ctx2.clearRect(0, 0, 500, 390);
  var nave4 = document.getElementById("imagen8");
  ctx2.drawImage(nave4, 50, 10, 170, 120);
  ruta = "Ship4.png";

  localStorage.setItem("miNave", ruta);
});

/*function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
} NO FUNCIONAAAA*/

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


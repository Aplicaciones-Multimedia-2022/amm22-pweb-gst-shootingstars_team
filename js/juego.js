var mycanvas = document.getElementById("game");
var ctx = mycanvas.getContext("2d");
var naveX = 0;
var naveY = 0;
var nave_dispara = false;
var nave_UP = false;
var nave_DOWN = false;
const borde = 10;
var dy = 2;
var alturanave = 70;
var bol_disparoX = 20;
var bol_disparoY;
var dx = 3;
var enemigoLlega = false;

window.onload = init;
var final_nave;
var posEnemigoY;
var posEnemigoX;
var dx;
var balas = new Array();
var Enemigo = new Image();
var Nave = new Image();
var imagenBala = new Image();
var shoots = [];
var enemies = [];

//Funcion para inicializar el programa
function init() {

  posEnemigoY = mycanvas.height / 2;
  posEnemigoX = mycanvas.width;
  pintarBala();
  pintarNave(); //llamamos a la funcion pintarNave
  final_nave = game.height - borde - alturanave;
}

function enemigo(naveX, naveY) {

  this.posEnemigoX = posEnemigoX;
  this.posEnemigoY = posEnemigoY;
}

function nave(posEnemigoX, posEnemigoY, dy) {
  this.naveX = naveX;
  this.naveY = naveY;
}

function Bala(bol_disparoX, bol_disparoY, imagenBala) {
  this.bol_disparoX = Nave.width;
  this.bol_disparoY = naveY + (Nave.height / 2) - 9;
  this.imagenBala = imagenBala;
}

//funcion pintar enemigo
function pintarEnemigo() {
  for (var j = 0; j < enemies.length; j++) {
    ctx.drawImage(Enemigo, enemies[j].posEnemigoX, enemies[j].posEnemigoY);
    enemies[j].posEnemigoX -= 5;
    if (enemies[j].posEnemigoX < 0) {
      enemies.splice(j, 1);

    }

  }
}


function generarEnemigo() {
  var en = new enemigo(posEnemigoX, posEnemigoY);
  Enemigo.src = "../images/Ship2.png";
  en.posEnemigoX = game.width;
  en.posEnemigoY = Math.floor(Math.random() * (game.height-Enemigo.height));
  enemies.push(en);
}

//Ahora hacemos la funcion de pintar la nave
function pintarNave() {
  var naveAux = new nave(posEnemigoX, posEnemigoY);
  Nave.src = "../images/Ship1.png";
  ctx.drawImage(Nave, naveAux.naveX, naveAux.naveY);
}

//Pintamos la bala con la que dispara
function pintarBala() {

  imagenBala.src = "../images/bala.png";

  for (var i = 0; i < shoots.length; i++) {
    if (shoots[i].bol_disparoX < game.width) {
      ctx.drawImage(imagenBala, shoots[i].bol_disparoX, shoots[i].bol_disparoY);
      shoots[i].bol_disparoX += 5;
    } else {
      shoots.splice(i, 1);
      if (shoots.length == 0) {
        nave_dispara = false;
        i = 0;
      }



    }
  }

}

//Utilizamos esta funcion para dibujar el movimiento
function draw() {
  ctx.clearRect(0, 0, game.width, game.height); // limpiar canvas
  pintarNave(); //llamamos a la funcion pintarNave
  if (enemies.length != 0) {
    pintarEnemigo();
    j = 0;


  }

  if (nave_dispara) {
    pintarBala();

  }


  if (nave_UP) {
    this.naveY -= this.dy;
  }
  if (nave_DOWN) {
    this.naveY += this.dy;
  }

  if (this.naveY < borde) {
    this.naveY = borde;
  } else if (this.naveY > final_nave) {
    this.naveY = final_nave;
  }




}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(event) {
  if (event.keyCode == '38') { //si la tecla presionada es direccional arriba
    nave_UP = true;
  }
  if (event.keyCode == '40') { //si la tecla presionada es direccional abajo
    nave_DOWN = true;
  }
  if (event.keyCode == '32') { //si la tecla presionada es espacio para disparar
    disparar = true;
  }

}


function keyUpHandler(event) {
  if (event.keyCode == '38') { //si la tecla presionada es direccional derecho
    nave_UP = false;
  }
  if (event.keyCode == '40') { //si la tecla presionada es direccional derecho
    nave_DOWN = false;
  }
  if (event.keyCode == '32') { //si la tecla presionada es espacio para disparar
    disparar = false;

  }
}

//Funcion para que no haga scroll cuando se pulsa tecla de arriba, abajo, izquierda y derecha
window.addEventListener("keydown", function(e) {
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
  if (event.keyCode == "38") {
    //si la tecla presionada es direccional arriba
    nave_UP = true;
  }
  if (event.keyCode == "40") {
    //si la tecla presionada es direccional abajo
    nave_DOWN = true;
  }
  if (event.keyCode == "32") {
    //si la tecla presionada es espacio para disparar
    nave_dispara = true;
    bala = new Bala(bol_disparoX, bol_disparoY);
    shoots.push(bala);
  }
}



function keyUpHandler(event) {
  if (event.keyCode == "38") {
    //si la tecla presionada es direccional derecho
    nave_UP = false;
  }
  if (event.keyCode == "40") {
    //si la tecla presionada es direccional derecho
    nave_DOWN = false;
  }
  if (event.keyCode == "32") {
    //si la tecla presionada es espacio para disparar


  }
}

//Funcion para que no haga scroll cuando se pulsa tecla de arriba, abajo, izquierda y derecha
window.addEventListener(
  "keydown",
  function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);

setInterval(draw, 10);
setInterval(generarEnemigo, 2000);

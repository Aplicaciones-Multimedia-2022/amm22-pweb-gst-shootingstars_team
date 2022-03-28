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
var disparar = false;
window.onload = init;
const final_nave = game.height - borde - alturanave;
var posEnemigoY;
var posEnemigoX;
var dx;
var balas = new Array();
var Enemigo = new Image();
var Nave = new Image();
//var shoot = new Image();

//Funcion para inicializar el programa
function init() {

  posEnemigoY = mycanvas.height / 2;
  posEnemigoX = mycanvas.width;
  pintarBola();
  pintarNave(); //llamamos a la funcion pintarNave
}

function enemigo(naveX, naveY) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f
=======
>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f
  this.posEnemigoX = posEnemigoX;
  this.posEnemigoY = posEnemigoY;
}

function nave(posEnemigoX, posEnemigoY, dy) {
  this.naveX = naveX;
  this.naveY = naveY;
}

//funcion pintar enemigo
function pintarEnemigo() {
  var en = new enemigo(posEnemigoX, posEnemigoY);
  Enemigo.src = "../images/Ship1.png";
  ctx.drawImage(Enemigo, en.posEnemigoX, en.posEnemigoY);
}

//Ahora hacemos la funcion de pintar la nave
function pintarNave() {
  var na = new nave(posEnemigoX, posEnemigoY);
  Nave.src = "../images/Ship1.png";
  ctx.drawImage(Nave, na.naveX, na.naveY);
}

//Pintamos la bala con la que dispara
function pintarBola() {
  /*  var b = new Image(shoot);
    b.x = this.naveX;
    b.y = this.naveY;
    balas.push(b);*/

  ctx.beginPath();
  ctx.arc(bol_disparoX, bol_disparoY, borde, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

//Utilizamos esta funcion para dibujar el movimiento
function draw() {
  ctx.clearRect(0, 0, game.width, game.height); // limpiar canvas
  pintarNave(); //llamamos a la funcion pintarNave
  pintarEnemigo();

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

  if (this.posEnemigoX < 0) {
    this.posEnemigoY = Math.random() * (mycanvas.width - 40) + 0;
    this.posEnemigoX = mycanvas.width;
  } else {
    this.posEnemigoX -= 5;
<<<<<<< HEAD
  }

  if (disparar) {
    c = 1;
<<<<<<< HEAD
    m = this.naveY + Enemigo.height / 2;
    bol_disparoX = Enemigo.width;

=======
>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f
  }
  if (c == 1) {
    pintarBola();

<<<<<<< HEAD
    bol_disparoY = m;
    bol_disparoX += dx;



=======
=======
  if (disparar) {
    c = 1;
>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f
    m = this.naveY;
    bol_disparoX = 20;
    //bol_disparoY = naveY + (alturanave / 2);
  }
  if (c == 1) {
    pintarBola();
<<<<<<< HEAD
>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f

    bol_disparoY = m;
    bol_disparoX += dx;
  }
}

<<<<<<< HEAD
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
=======
=======

    bol_disparoY = m;
    bol_disparoX += dx;
  }
}

>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f
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
    disparar = true;
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
    disparar = false;
  }
}

//Funcion para que no haga scroll cuando se pulsa tecla de arriba, abajo, izquierda y derecha
window.addEventListener(
  "keydown",
  function (e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
<<<<<<< HEAD
>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f

  setInterval(draw, 10);
=======

setInterval(draw, 10);
>>>>>>> e9a1e3196af24dec32b506d36faf8e2f9a29739f

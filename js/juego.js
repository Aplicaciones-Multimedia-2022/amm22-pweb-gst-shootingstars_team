var mycanvas = document.getElementById("game");
var ctx = mycanvas.getContext("2d");
var naveX = 0;
var naveY = 0;
var nave_dispara = false;
var nave_UP = false;
var nave_DOWN = false;
const borde = 10;
var velocidad_nave = 5;
var alturanave = 70;
var bol_disparoX = 20;
var bol_disparoY;
var posExpX;
var posExpY;
var bol_disparoY;
var enemigoLlega = false;
var contador = 0;
var vidas_nave = 0;
var overlay_go = document.getElementById("overlay_go");
var sonido_disparo = new Audio();
sonido_disparo.src = '../audio/SonidoDisparos/disparoNave.wav';
var final_nave;
var posEnemigoY;
var posEnemigoX;
var balas = new Array();
var Enemigo = new Image();
var Nave = new Image();
var imagenBala = new Image();
var exp = new Image();
var shoots = [];
var enemies = [];
var velocidad_enemigos = 5;
var generar_enemigo = 1500;
var dificultad= 2;
window.onload = init;
//document.getElementById("dificultad").innerHTML = dificultad;

//Funcion para inicializar el programa{}
function init() {
  elegirDifificultad(dificultad);

  posEnemigoY = mycanvas.height / 2;
  posEnemigoX = mycanvas.width;
  pintarBala();
  pintarNave(); //llamamos a la funcion pintarNave
  final_nave = game.height - borde - alturanave;


}




function enemigo(posEnemigoX, posEnemigoY) {
  this.posEnemigoX = posEnemigoX;
  this.posEnemigoY = posEnemigoY;
}

function nave(naveX, naveY) {
  this.naveX = naveX;
  this.naveY = naveY;
}

function Bala(bol_disparoX, bol_disparoY, imagenBala) {
  this.bol_disparoX = Nave.width;
  this.bol_disparoY = naveY + Nave.height / 2 - 9;
  this.imagenBala = imagenBala;
}

function Explosion(posExpX, posExpY) {
  this.posExpX = posExpX;
  this.posExpY = posExpY;
}

//funcion pintar enemigo
function pintarEnemigo() {
  for (var j = 0; j < enemies.length; j++) {
    ctx.drawImage(Enemigo, enemies[j].posEnemigoX, enemies[j].posEnemigoY);
    enemies[j].posEnemigoX -= 5;
    if (enemies[j].posEnemigoX < -1) {
      enemies.splice(j, 1);
    }
  }
}

function detectarColision() {
  for (var k = 0; k < shoots.length; k++) {
    for (var l = 0; l < enemies.length; l++) {


      if (shoots[k].bol_disparoX > enemies[l].posEnemigoX) {
        if (
          shoots[k].bol_disparoY > enemies[l].posEnemigoY &&
          shoots[k].bol_disparoY < enemies[l].posEnemigoY + 74
        ) {
          pintarExp(shoots[k].bol_disparoX, shoots[k].bol_disparoY);
          contador++;

          enemies.splice(l, 1);
          shoots.splice(k, 1);

        }
      }
    }
  }
  document.getElementById("contador").innerHTML = contador;

}

function elegirDifificultad(dificultad) {
  switch (dificultad) {
    case 1:
      velocidad_enemigos = 4;
      generar_enemigo = 1500;
      break;
    case 2:
      velocidad_enemigos = 5;
      generarEnemigo = 1000;
      break;
    case 3:
      velocidad_enemigos = 5;
      generar_enemigo = 800;
      break;


  }

}

function generarEnemigo() {
  var en = new enemigo(posEnemigoX, posEnemigoY);
  Enemigo.src = "../images/Ship2.png";
  en.posEnemigoX = game.width;
  en.posEnemigoY = Math.floor(Math.random() * (game.height - Enemigo.height - 10));
  enemies.push(en);
}


//Ahora hacemos la funcion de pintar la nave
function pintarNave() {
  naveAux = new nave(naveX, naveY);
  Nave.src = "../images/Ship1.png";
  ctx.drawImage(Nave, naveAux.naveX, naveAux.naveY);
}

function pintarExp(x, y) {
  expAux = new Explosion(x, y);
  exp.src = "../images/explosion_p.png";
  ctx.drawImage(exp, expAux.posExpX, expAux.posExpY);
}

//Pintamos la bala con la que dispara
function pintarBala() {
  imagenBala.src = "../images/bala.png";

  for (var i = 0; i < shoots.length; i++) {
    if (shoots[i].bol_disparoX < game.width) {
      ctx.drawImage(imagenBala, shoots[i].bol_disparoX, shoots[i].bol_disparoY);
      shoots[i].bol_disparoX += 8;
    } else {
      shoots.splice(i, 1);
      if (shoots.length == 0) {
        nave_dispara = false;

      }
    }
  }
}





function muerte() {
  for (var l = 0; l < enemies.length; l++) {
    if (enemies[l].posEnemigoX < 5) {

      vidas_nave++;

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
  detectarColision();
  muerte();

  if (nave_dispara) {
    pintarBala();
  }

  if (nave_UP) {
    this.naveY -= this.velocidad_nave;
  }
  if (nave_DOWN) {
    this.naveY += this.velocidad_nave;
  }

  if (this.naveY < 0) {
    this.naveY = 0;
  } else if (this.naveY > 340) {
    this.naveY = 340;
  }

  if (vidas_nave == 3) {
    overlay_go.classList.add("active");
  }


}

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
  function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);

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
    sonido_disparo.load();
    nave_dispara = true;
    bala = new Bala(bol_disparoX, bol_disparoY);
    shoots.push(bala);
    sonido_disparo.play();
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
setInterval(generarEnemigo, generar_enemigo);

var mycanvas = document.getElementById("game");
var ctx = mycanvas.getContext("2d");
var mycanvas_dos = document.getElementById("vidas");
var ctx_2 = mycanvas_dos.getContext("2d");
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
var contador1 = 0;
var puntmax = 0;
var vidas_nave = 0;
var overlay_go = document.getElementById("overlay_go");
var sonido_disparo = new Audio();
sonido_disparo.src = "../audio/SonidoDisparos/disparoNave.wav";
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
var contador2 = 0;
var sonido_explosion = new Audio();
var fin_juego = false;
var sonido_gameover = new Audio('../audio/sonidoGO.wav');
var sonido_explosion_canvas = new Audio('../audio/explosion_contra_canvas.wav');
var estX;
var estY;
var Estrella = new Image();

var df = localStorage.getItem('dificultad');



window.onload = init;


//Funcion para inicializar el programa{}
function init() {
  posEnemigoY = mycanvas.height / 2;
  posEnemigoX = mycanvas.width;
  pintarBala();
  pintarNave(); //llamamos a la funcion pintarNave
  final_nave = game.height - borde - alturanave;
  
  //if(muerte==1){
  //ctx_2.clearRect(0, 0); 
  //}


}
elegir_dificultad(df);
////////////////////////////


function estrella(estX, estY) {
  this.estX = estX;
  this.estY = estY;
}

function pintarEst() {
  est1 = new estrella(-10,-15);
  est2 = new estrella(60,-15);
  est3 = new estrella(130,-15);
  
  Estrella.src = "../images/estrella.png"
  
  ctx_2.drawImage(Estrella, est1.estX, est1.estY,80,80);
  ctx_2.drawImage(Estrella, est2.estX, est2.estY,80,80);
  ctx_2.drawImage(Estrella, est3.estX, est3.estY,80,80);

  
}

function borrar_estrella(){
  if(vidas_nave==1){

    ctx_2.clearRect(130, 0, vidas.width, vidas.height);
  }else if(vidas_nave==2){
    ctx_2.clearRect(60, 0, vidas.width, vidas.height);
    
  }else if(vidas_nave==3){
    ctx_2.clearRect(0, 0, vidas.width, vidas.height);
  }
  
}
  



////////////////////////////

function elegir_dificultad(dificultad) {

  if (dificultad == 1) {

    velocidad_enemigos = 4;
    generar_enemigo = 1500;
  } else if (dificultad == 2) {

    velocidad_enemigos = 5;
    generar_enemigo = 1000;
  } else if (dificultad == 3) {

    velocidad_enemigos = 10;
    generar_enemigo = 500;
  }
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
    enemies[j].posEnemigoX -= velocidad_enemigos;
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
          sonido_explosion.src = "../audio/sonidoExplosion.wav";
          sonido_explosion.load();
          pintarExp(shoots[k].bol_disparoX, shoots[k].bol_disparoY);
          contador++;
          contador1 = contador;

          enemies.splice(l, 1);
          shoots.splice(k, 1);
          sonido_explosion.play();
        }
      }
    }
    if (contador > puntmax) {
      puntmax = contador;
    }
  }
  document.getElementById("contador").innerHTML = contador;
  document.getElementById("contador1").innerHTML = contador1;
  document.getElementById("puntmax").innerHTML = puntmax;
}

function generarEnemigo() {
  var en = new enemigo(posEnemigoX, posEnemigoY);
  Enemigo.src = "../images/Ship2.png";
  en.posEnemigoX = game.width;
  en.posEnemigoY = Math.floor(
    Math.random() * (game.height - Enemigo.height - 10)
  );
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
  exp.src = "../images/explosion_m.png";
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
    if (fin_juego == false) {
      if (enemies[l].posEnemigoX < 5) {
        vidas_nave ++;
        sonido_explosion_canvas.pause();
        
        sonido_explosion_canvas.play();
        

      }
    }
  }
}

function pausajuego() {
  fin_juego = true;
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
  //muerte();
  if (fin_juego == false) {
    if (nave_dispara) {
      pintarBala();
    }
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

  /*if (vidas_nave == 3) {
    if (fin_juego == false) {
      sonido_gameover.play();
      pausajuego();
    }
    
    overlay_go.classList.add("active");

  }*/
  pintarEst();
  borrar_estrella();
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
    if (fin_juego == false) {
      sonido_disparo.load();
      nave_dispara = true;
      bala = new Bala(bol_disparoX, bol_disparoY);
      shoots.push(bala);
      sonido_disparo.play();
    }
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
if (fin_juego == false) {
  setInterval(generarEnemigo, generar_enemigo);
}


/*
Estrella.onload = function(){
  ctx_2.drawImage(Estrella, 20, 0, 60, 60);
  if(contador==1){
    ctx_2.clearRect(0, 0, vidas.width, vidas.height); // limpiar canvas
  }
}
function dibujar_estrella(){
  ctx_2.drawImage(Estrella, 20, 0, 60, 60);
  if(contador==1){
    ctx_2.clearRect(20, 0, vidas.width, vidas.height); // limpiar canvas
  }
}
*/
var mycanvas = document.getElementById("game");
var ctx = mycanvas.getContext("2d");
var mycanvas_dos = document.getElementById("vidas");
var ctx_2 = mycanvas_dos.getContext("2d");
var naveX = 0; //Coordenada en el eje X de la nave que manejamos
var naveY = 0; //Coordenada en el eje Y de la nave que manejamos
var nave_dispara = false;
var nave_UP = false;
var nave_DOWN = false;
const borde = 10;
var velocidad_nave = 10;
var alturanave = 70;
var bol_disparoX = 30;
var bol_disparoY;
var bol_disparoY;
var enemigoLlega = false;
var contador = 0; //Contador que incrementa segun los puntos que consigamos, es decir, cada vez que una bala choque un enemigo
var contador1 = 0; //Copia contador anterior
var puntmax = localStorage.getItem("max"); //Variable donde guardamos la puntuacion maima que registra el contador anterior
var vidas_nave = 0; //Contador que evalua cuantas veces una nave enemiga choca contra el canvas, para saber las vidas que tenemos
var overlay_go = document.getElementById("overlay_go"); //Variable para controlar la ventana emergente de GAME OVER
var sonido_disparo = new Audio(); //Sonido del disparo, es decir, cada vez que disparamos una bala
sonido_disparo.volume = 0.2;
var tiempo = 0;
var final_nave;
var posEnemigoY; //Coordenada en el eje X de la nave enemiga
var posEnemigoX; //Coordenada en el eje Y de la nave enemiga
var preMax;
var balas = new Array(); //Array en el que guardaremos los disparos, es un array de objetos (imagenes)
var Enemigo = new Image(); //Array en el que guardaremos los enemigos, es un array de objetos (imagenes)
var ruta_nave;
elegir_nave();
var Nave = new Image();
Nave.src = ruta_nave;
var fondo = new Image();
fondo.src = "../img/FondoCanvas2.png";
var stop;
var imagenBala = new Image();
var shoots = [];
var enemies = [];
var velocidad_enemigos = 5;
var generar_enemigo = 1500;
var contador2 = 0;
var sonido_explosion = new Audio();
sonido_explosion.volume = 0.2;
var fin_juego = false;
var sonido_gameover = new Audio();
sonido_gameover.volume = 0.2;
var sonido_explosion_canvas = new Audio();
sonido_explosion_canvas.volume = 0.2;
var estX;
var estY;
var Estrella = new Image();
var exp = new Image();
exp.src = "../img/explosion_m.png";

var df = localStorage.getItem("dificultad");
var namep = localStorage.getItem("nombre"); // Variable donde guardamos el nombre que hemos introducido en la pagina anterior

document.getElementById("usuario").innerHTML = namep; //Llamaremos a el contenido de la variable namep en el html con un id = usuario
localStorage.removeItem("namep"); //Borramos el contenido de esta variable

naveAux = new nave(naveX, naveY, Nave);
window.onload = init;

//Funcion para inicializar el programa{}
function init() {
  Enemigo.src = "../img/Ship2.png";

  sonido_disparo.src = "../media/SonidoDisparos/disparoNave.wav";
  sonido_gameover.src = "../media/sonidoGO.wav";
  sonido_explosion_canvas.src = "../media/explosion_contra_canvas.wav";

  posEnemigoY = mycanvas.height / 2;
  posEnemigoX = mycanvas.width;
  final_nave = game.height - borde - alturanave;
  elegir_dificultad(df);
  //comenzar_fondo();
}

function elegir_nave() {
  ruta_nave = "../img/" + localStorage.getItem("miNave");
}

//////////////////////////////////////////
//                                      //
//    FUNCIONES PARA LAS ESTRELLAS      //
//                                      //
//////////////////////////////////////////

function estrella(estX, estY) {
  //CONSTRUCTOR DE ESTRELLAS
  this.estX = estX;
  this.estY = estY;
}

function pintarEst() {
  // PINTAMOS LAS TRES ESTRELLAS QUE SIMBOLIZAN LAS VIDAS QUE TENEMOS
  est1 = new estrella(-10, -15);
  est2 = new estrella(60, -15);
  est3 = new estrella(130, -15);

  Estrella.src = "../img/estrella.png";

  ctx_2.drawImage(Estrella, est1.estX, est1.estY, 80, 80);
  ctx_2.drawImage(Estrella, est2.estX, est2.estY, 80, 80);
  ctx_2.drawImage(Estrella, est3.estX, est3.estY, 80, 80);
}

function borrar_estrella() {
  // SE IRAN BORRANDO LAS ENTRELLAS A MEDIDA QUE LAS NAVES ENEMIGAS CHOQUEN CONTRA EN CANVAS (VIDAS_NAVE SE INCREMENTA CADA VEZ QUE OCURRE)
  if (vidas_nave == 1) {
    ctx_2.clearRect(130, 0, vidas.width, vidas.height);
  } else if (vidas_nave == 2) {
    ctx_2.clearRect(60, 0, vidas.width, vidas.height);
  } else if (vidas_nave == 3) {
    ctx_2.clearRect(0, 0, vidas.width, vidas.height);
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//    FUNCION PARA CAMBIAR VARIABLES    //
//     SEGUN EL NIVEL QUE SE ESCOJA     //
//                                      //
//////////////////////////////////////////

function elegir_dificultad(dificultad) {
  //EN ESTA FUNCION SE CAMBIAN LAS VARIABLES VELOCIDAD ENEMIGOS Y EL TIEMPO QUE TARDAN EN GENERARSE DEPENDIENDO DE LA DIFICULTAD QUE HALLAMOS ELEGIDO.
  if (dificultad == 1) {
    velocidad_enemigos = 9;
    generar_enemigo = 1500;
  } else if (dificultad == 2) {
    velocidad_enemigos = 10;
    generar_enemigo = 1000;
  } else if (dificultad == 3) {
    velocidad_enemigos = 15;
    generar_enemigo = 500;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//           CONSTRUCTORES              //
//                                      //
//////////////////////////////////////////

function enemigo(posEnemigoX, posEnemigoY, imagenEnemigo) {
  this.posEnemigoX = posEnemigoX;
  this.posEnemigoY = posEnemigoY;
  this.imagenEnemigo = imagenEnemigo;
}

function nave(naveX, naveY, imagenNave, velocidad_nave) {
  this.naveX = naveX;
  this.naveY = naveY;
  this.imagenNave = imagenNave;
  this.velocidad_nave = 10;
}

function Bala(bol_disparoX, bol_disparoY, imagenBala) {
  this.bol_disparoX = naveAux.imagenNave.width;
  this.bol_disparoY = naveAux.naveY + naveAux.imagenNave.height / 2 - 9;
  this.imagenBala = imagenBala;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//           PINTAR IMAGENES            //
//                                      //
//////////////////////////////////////////

function pintarEnemigo() {
  // PINTAMOS LAS NAVES ENEMIGAS
  for (var j = 0; j < enemies.length; j++) {
    ctx.drawImage(
      enemies[j].imagenEnemigo,
      enemies[j].posEnemigoX,
      enemies[j].posEnemigoY
    );
    enemies[j].posEnemigoX -= velocidad_enemigos;
    if (enemies[j].posEnemigoX < -1) {
      enemies.splice(j, 1);
    }
  }
}

function pintarNave() {
  // PINTAMOS NUESTRA NAVE, LA QUE MANEJAMOS
  ctx.drawImage(naveAux.imagenNave, naveAux.naveX, naveAux.naveY);
}

function pintarBala() {
  // PINTAMOS Y ADEMAS ALMACENAMOS LAS BALAS O BOLAS CON LAS QUE DISPARAMOS
  imagenBala.src = "../img/bala.png";
  for (var i = 0; i < shoots.length; i++) {
    if (shoots[i].bol_disparoX < game.width) {
      ctx.drawImage(imagenBala, shoots[i].bol_disparoX, shoots[i].bol_disparoY);
      shoots[i].bol_disparoX += 10;
    } else {
      shoots.splice(i, 1);
      if (shoots.length == 0) {
        nave_dispara = false;
      }
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////
//                                    //
// FUNCION PARA DIBUJAR FONDO ANIMADO //
//                                    //
////////////////////////////////////////

function dibujar_fondo() {
  ctx.drawImage(fondo, tiempo, 0);
  ctx.drawImage(fondo, tiempo - 900, 0);

  tiempo--;
  if (tiempo < 0) {
    tiempo = tiempo + 900;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//    FUNCION PARA CREAR ENEMIGOS       //
//                                      //
//////////////////////////////////////////

function generarEnemigo() {
  var en = new enemigo(posEnemigoX, posEnemigoY, Enemigo);
  en.posEnemigoX = game.width;
  en.posEnemigoY = Math.floor(
    Math.random() * (game.height - en.imagenEnemigo.height - 10)
  );
  enemies.push(en);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//    FUNCION PARA DETECTAR CUANDO UNA  //
//    BALA CHOCA CONTRA UNA NAVE        //
//                                      //
//////////////////////////////////////////

function detectarColision() {
  for (var k = 0; k < shoots.length; k++) {
    // RECORREMOS EL ARRAY DE OBJETOS DONDE ESTAN ALMACENADOS LOS DIPAROS
    for (var l = 0; l < enemies.length; l++) {
      // RECORREMOS EL ARRAY DE OBJETOS DONDE ESTAN ALMACENADOS LOS ENEMIGOS
      if (shoots[k].bol_disparoX > enemies[l].posEnemigoX) {
        // COMPROBAMOS SI COINCIDEN EN EL EJE X LAS COORDENADAS X DE LOS DISPAROS Y ENEMIGOS
        if (
          shoots[k].bol_disparoY > enemies[l].posEnemigoY &&
          shoots[k].bol_disparoY < enemies[l].posEnemigoY + 74
        ) {
          // COMPROBAMOS SI COINCIDEN EN EL EJE Y, EL DISPARO ENTRE LA ALTURA DE LA NAVE
          ctx.drawImage(exp, enemies[l].posEnemigoX, enemies[l].posEnemigoY);
          //pintarExp(shoots[k].bol_disparoX, enemies[l].posEnemigoY); // SI COINCIBE, ENTONCES PINTAMOS UNA EPLOSION QUE SIMULA LA DESTRUCCION DE LA NAVE
          sonido_explosion.src = "../media/sonidoExplosion.wav"; // AÑADIMOS LA RUTRA DEL SONIDO DE LA EPLOSION
          sonido_explosion.load(); // CARGAMOS EL SONIDO PARA QUE ESTE PUEDA SONAR
          contador++; // CONTADOR QUE SUMA PUNTOS SE INCREMENTA
          contador1 = contador; // CCOPIAMOS EL VALOR DE ESTE
          enemies.splice(l, 1); // BORRAMOS EL ENEMIGO EL CUAL HA SIDO CHOCADO CONTRA EL DISPARO
          shoots.splice(k, 1); // BORRAMOS EL DISPARO EL CUAL HA SIDO CHOCADO CONTRA EL ENEMIGO
          sonido_explosion.play(); // SUENA EL SONIDO DE LA EPLOSION
        }
      }
    }
    if (contador > puntmax) {
      preMax = contador.toString();
      localStorage.setItem("max", preMax);
      puntmax = localStorage.getItem("max");
    }
  }

  //EN ESTAS TRES LINEAS SIGUIENTES COPIAMOS EL VALOR DE LAS VARIABLES CONTADOR Y PUNTMA PARA ASI PODER LLAMARLAS POR SU ID EN EL HTML
  document.getElementById("contador").innerHTML = contador;
  document.getElementById("contador1").innerHTML = contador1;
  document.getElementById("puntmax").innerHTML = puntmax;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//     FUNCION QUE EVALUA CUANDO MUERES //
//                                      //
//////////////////////////////////////////

function muerte() {
  //LO QUE HACE ESTA FUNCION ES ALMACENAR EN UN CONTADOR LAS VECES QUE LA NAVE ENEMIGA CHOCA CONTRA EL CANVAS,
  //ADEMAS AÑADE SONIDO DE UNA EPLOSION PARA CUANDO ESTO PASE.
  for (var l = 0; l < enemies.length; l++) {
    //RECORREMOS TODO EL ARRAY DE ENEMIGOS
    if (fin_juego == false) {
      if (enemies[l].posEnemigoX < 1) {
        //COMPROBAMOS SI ALGUNA NAVE ENEMIGA TOCA EL FONDO DEL CANVAS
        vidas_nave++; // SI ESTO PASA, PERDEMOS UN AVIDA, POR LO QUE SE INCREMENTA EL CONTADOR DE VIDAS_NAVE
        sonido_explosion_canvas.pause(); //
        sonido_explosion_canvas.load(); // CARGAMOS EL SONIDO DE EXPLOSION CONTRA EL CANVAS PARA QUE SUENE EN ESTA SITUACION
        sonido_explosion_canvas.play(); // SUENA EL SONIDO
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
function pausajuego() {
  fin_juego = true;
}

//////////////////////////////////////////
//                                      //
//           DRAW Y MOVIMIENTO          //
//                                      //
//////////////////////////////////////////

function draw() {
  //UTILIZAMOS ESTA FUNCION PARA DIBUJAR EL MOVIMIENTO

  ctx.clearRect(0, 0, game.width, game.height); // LIMPIAMOS EL LIENZO EN EL CUAL SE DESARROLLA EL JUEGO
  dibujar_fondo();
  pintarNave(); //llamamos a la funcion pintarNave
  if (enemies.length != 0) {
    pintarEnemigo();
    j = 0;
  }
  detectarColision();
  muerte();
  if (fin_juego == false) {
    if (nave_dispara) {
      pintarBala();
    }
  }
  //Movimiento de arriba o abajo de la nave
  if (nave_UP && naveAux.naveY > 0) {
    naveAux.naveY -= naveAux.velocidad_nave;
  }
  if (nave_DOWN && naveAux.naveY < game.height - naveAux.imagenNave.height) {
    naveAux.naveY += naveAux.velocidad_nave;
  }
  //Comprueba si se han acabado las vidas de la nave
  if (vidas_nave == 3) {
    if (fin_juego == false) {
      sonido2.pause();
      sonido_gameover.play();
      pausajuego();
    }

    overlay_go.classList.add("active");
  }
  pintarEst();
  borrar_estrella();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

setInterval(draw, 20);
if (fin_juego == false) {
  setInterval(generarEnemigo, generar_enemigo);
}

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("bajustes");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("bvolver");
const boton10 = document.getElementById("bportada");
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
boton10.addEventListener("click", function diez() {
  sonido1.play();
  espera = setTimeout(redireccionar10, 400);
});

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

function redireccionar6() {
  location.replace("../html/ajustes.html");
}

function redireccionar8() {
  location.replace("../html/portada.html");
}

function redireccionar9() {
  location.replace("../html/juego.html");
}

function redireccionar10() {
  location.replace("../html/portada.html");
}

var volumenGeneral;
var volgen;
let sonido2 = new Audio();
sonido2.src = "../media/cancion2.mp3";

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

////////// Código para mostrar la hora

var udateTime = function() {
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
    "Miércoles",
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

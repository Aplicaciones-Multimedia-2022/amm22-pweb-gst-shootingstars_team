//////////////////////////////////////////
//                                      //
//         CANVAS DE BABY YODA          //
//                                      //
//////////////////////////////////////////

// CANVAS LONGITUDINALES EN LAS QUE APARECE EL AVATAR DE BABY YODA PARA DARLE DINAMISMO A LA PAGINA CON LA TEMATICA SEGUIDA

var mycanvas = document.getElementById("div_izq");
var ctx = mycanvas.getContext("2d");
var mycanvas2 = document.getElementById("div_drch");
var ctx2 = mycanvas2.getContext("2d");
var Grogu1 = new Image(); // IMAGEN DE BABY YODA PARA EL CANVAS IZQ
var Grogu2 = new Image(); // IMAGEN DE BABY YODA PARA EL CANVAS DRCHA
var metX_izq = 0; // COORDENADA X DE BABY YODA PARA EL CANVAS IZQ
var metY = 1400; // COORDENADA X DE BABY YODA PARA EL CANVAS DRCHA
var dy = -2; // VELOCIDAD DE LOS BABY YODA

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////
//                                      //
//       VENTANA EMERGENTE INFO         //
//                                      //
//////////////////////////////////////////

// VENTANA EMERGENTE QUE TE INDICA INFORMACION DE LOS NIVELES

var btn_abrir_easy = document.getElementById("btn"); // REFERENCIAMOS EN UNA VARIABLE EL BOTON ABRIR LA VENTANA EMERGENTE
var overlay = document.getElementById("overlay");
var ventana_easy = document.getElementById("ventana_easy");
var btn_cerrar = document.getElementById("btn_cerrar"); // REFERENCIAMOS EN UNA VARIABLE EL BOTON CERRAR LA VENTANA EMERGENTE


btn_abrir_easy.addEventListener("click", function () { // FUNCIONALIDAD DEL BOTON PARA ABRIR LA VENTANA EMERGENTE
  overlay.classList.add("active");
});

btn_cerrar.addEventListener("click", function () { // FUNCIONALIDAD DEL BOTON PARA CERRAR LA VENTANA EMERGENTE
  overlay.classList.remove("active");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//               BOTONES                //
//                                      //
//////////////////////////////////////////

const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4= document.getElementById("boton4");
const boton5= document.getElementById("boton5");
const boton6= document.getElementById("bajustes");
const boton8= document.getElementById("boton8");
const botonFacil = document.getElementById("botonFacil");
const botonMedio = document.getElementById("botonMedio");
const botonDificil = document.getElementById("botonDificil");
let sonido1 = new Audio();
let espera;
sonido1.src="../audio/click/39562_the-bizniss_mouse-click.wav";

boton1.addEventListener("click",function uno(){
  sonido1.play();
  espera = setTimeout(redireccionar1, 400);
});
boton2.addEventListener("click",function dos(){
sonido1.play();
espera = setTimeout(redireccionar2, 400);
});
boton3.addEventListener('click',function tres(){
sonido1.play();
espera = setTimeout(redireccionar3, 400);
});
boton4.addEventListener('click',function cuatro(){
sonido1.play();
espera = setTimeout(redireccionar4, 400);
});
boton5.addEventListener('click',function cinco(){
sonido1.play();
espera = setTimeout(redireccionar5, 400);
});
boton6.addEventListener('click',function seis(){
sonido1.play();
espera = setTimeout(redireccionar6, 400);
});
boton8.addEventListener('click',function ocho(){
sonido1.play();
espera = setTimeout(redireccionar8, 400);
});
botonFacil.addEventListener('click',function facil(){
sonido1.play();
espera = setTimeout(redireccionarFacil, 400);
});
botonMedio.addEventListener('click',function medio(){
sonido1.play();
espera = setTimeout(redireccionarMedio, 400);
});
botonDificil.addEventListener('click',function dificil(){
sonido1.play();
espera = setTimeout(redireccionarDificil, 400);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//     PINTAR LOS BABY YODA             //
//                                      //
//////////////////////////////////////////

// GENERAMOS LAS IMAGENES QUE QUEREMOS REPRESENTAR
function pintar_cosa_izq() { 
  Grogu1.src = "../images/grogu.png";
  ctx.drawImage(Grogu1, metX_izq, metY);
}
function pintar_cosa_drch() {
  Grogu2.src = "../images/grogu.png";
  ctx2.drawImage(Grogu2, metX_izq, metY);
}

// CON LAS FUNCIONES DRAW DIBUJAMOS EL MOVIMIENTOS DE NUESTROS BABY YODAS
function draw_izq() {
  ctx.clearRect(0, 0, div_izq.width, div_izq.height);
  pintar_cosa_izq();

  metY += dy;

  if (metY + 150 < 0) {
    metY = 1400;
  }
}
function draw_dcha() {
  ctx2.clearRect(0, 0, div_drch.width, div_drch.height);
  pintar_cosa_drch();

  metY += dy;

  if (metY + 150 < 0) {
    metY = 1400;
  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//    FUNCIONES PARA REDIRECIONAR       //
//                                      //
//////////////////////////////////////////

function redireccionar1(){
  location.replace("../html/ComoJugar.html")
}
function redireccionar2(){
  location.replace("../html/autores.html")
}
function redireccionar3(){
  location.replace("../html/multimedia.html")
}
function redireccionar4(){
  location.replace("../html/desarrollo.html")
}
function redireccionar5(){
  location.replace("../html/referencias.html")
}
function redireccionar6(){
  location.replace("../html/ajustes.html")
}
function redireccionar8(){
  location.replace("../html/portada.html")
}
function redireccionarFacil(){
  location.replace("../html/juego.html")
  localStorage.setItem('dificultad', '1');
}
function redireccionarMedio(){
  location.replace("../html/juego.html")
  localStorage.setItem('dificultad', '2');
}
function redireccionarDificil(){
  location.replace("../html/juego.html")
  localStorage.setItem('dificultad', '3');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//   FUNCIONES PARA GUARDAR EL NOMBRE   //
//                                      //
//////////////////////////////////////////

function sub(){
  var n = document.getElementById("nombreuser").value; // GUARDAMOS EN LA VARIABLE N EL NOMBRE QUE HEMOS INTRODUCIDO EN EL FORMULARIO
  localStorage.setItem('nombre' , n); // UTILIZAMOS LOCAL STORAGE PARA PODER GUARDAR LA VARIABLE Y UTILIZARLA EN OTRO JS
}



setInterval(draw_izq, 10);
setInterval(draw_dcha, 10);
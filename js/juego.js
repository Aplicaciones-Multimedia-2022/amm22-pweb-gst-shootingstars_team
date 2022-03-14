var mycanvas = document.getElementById("nave");
var ctx = mycanvas.getContext("2d");
var x, y;
var w, h;
var posN;
var downPressed;
var upPressed;
var posEnemigoY;
var posEnemigoX;
var dx;
var Nave = new Image();
var Enemigo = new Image();
var disparo = new Array();
var i;
var ruta;
window.onload = init;
var dispaux = new Image();
//document.body.style.overflow = 'hidden';
function init() {
    w = mycanvas.width;
    h = mycanvas.height;
    x = 10;
    y = h / 2;
    posN = h / 2;
    downPressed = false;
    upPressed = false;
    posEnemigoY = h / 2;
    posEnemigoX = w;
    dx = 0;
    Nave.src = "../Ship1.png";
    i = 0;


    pintarNave();
    pintarEnemigo();
}

function pintarNave() {
    ctx.drawImage(Nave, 10, posN);



}

function pintarEnemigo() {

    Enemigo.src = "../Ship2.png";
    ctx.drawImage(Enemigo, posEnemigoX, posEnemigoY);


}

function draw() {
    ctx.clearRect(0, 0, w, h);
    pintarNave();
    pintarEnemigo();


    if (downPressed && posN < mycanvas.height - 40) {
        posN += 5;

    } else if (upPressed && posN > 0) {
        posN -= 5;
    }
    if (posEnemigoX < 0) {
        posEnemigoY = Math.random() * w + 0;
        posEnemigoX = mycanvas.width;

    } else{

        posEnemigoX -= 5;
        

    }

}







document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);




function keyDownHandler(e) {
    if (e.keyCode == 38) {
        upPressed = true;
    } else if (e.keyCode == 40) {
        downPressed = true;
    }

}
window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
 



function keyUpHandler(e) {
    if (e.keyCode == 38) { //ARRIBA
        upPressed = false;
    } else if (e.keyCode == 40) { //ABAJO
        downPressed = false;
    }



}
setInterval(draw, 10);


var canvas= document.getElementById("putafoto");
var ctx= canvas.getContext("2d");
var posEnemigoY=200;
var posEnemigoX = 200;
window.onload = init;
var imagen= new Image();
var Enemigo = new Image();

function init(){
    pintarEnemigo();
    bola();
    pintar();
}

function enemigo(naveX, naveY) {
  
    this.posEnemigoX = posEnemigoX;
    this.posEnemigoY = posEnemigoY;
}


function pintarEnemigo(){
    var en = new enemigo(posEnemigoX, posEnemigoY);
    Enemigo.src = "../images/Ship1.png";
    ctx.drawImage(Enemigo, en.posEnemigoX, en.posEnemigoY);
}


function pintar(){
    imagen.src="../images/Ship1.png";
    ctx.drawImage(imagen,0,0);
}

function bola(){
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}



var canvas= document.getElementById("putafoto");
var ctx= canvas.getContext("2d");
window.onload = init;
var imagen= new Image();



function init(){
pintar();
bola();
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


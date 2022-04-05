var mycanvas = document.getElementById("div_izq");
var ctx = mycanvas.getContext("2d");

var Meteorito1 = new Image();

var metX_izq = 0;
var metY = 2000;
var dy = -2;

function pintar_cosa_izq() {
  Meteorito1.src = "../images/grogu.png";
  ctx.drawImage(Meteorito1, metX_izq, metY);
}

function draw_izq() {
  ctx.clearRect(0, 0, div_izq.width, div_izq.height);
  pintar_cosa_izq();

  metY += dy;

  if (metY + 150 < 0) {
    metY = 2000;
  }
}

setInterval(draw_izq, 10);

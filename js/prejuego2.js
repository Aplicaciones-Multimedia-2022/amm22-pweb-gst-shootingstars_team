var mycanvas2 = document.getElementById("div_drch");
var ctx2 = mycanvas2.getContext("2d");

var Meteorito2 = new Image();

var metX_izq = 0;
var metY = 800;
var dy = -2;

function pintar_cosa_drch() {
  Meteorito2.src = "../images/grogu.png";
  ctx2.drawImage(Meteorito2, metX_izq, metY);
}

function draw_2() {
  ctx2.clearRect(0, 0, div_drch.width, div_drch.height);
  pintar_cosa_drch();

  metY += dy;

  if (metY + 150 < 0) {
    metY = 800;
  }
}

setInterval(draw_2, 10);

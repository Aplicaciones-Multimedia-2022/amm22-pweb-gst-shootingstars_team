var mycanvas = document.getElementById("div_izq");
var ctx = mycanvas.getContext("2d");


var Meteorito1 = new Image();

var metX = 0;
var metY = 0;
var dy = 5;

window.onload = init;


function init() {
    
   
    pintar_cosa();
    setInterval(draw, 10);
    
}

function meteorito(metX, metY) {
    this.met = metX;
    this.met = metY;
  }

function pintar_cosa(){
    Meteorito1.src = "../images/Ship1.png";
    ctx.drawImage(Meteorito1, metX, metY);
}

function draw(){
    ctx.clearRect(0, 0, div_izq.width, div_izq.height);
    
    pintar_cosa();

    metY +=dy;

    if(metY==0 || metY>700){
        if(dy<0){
            dy = -dy;
        }
        if(dy>0){
            dy = -dy;
        }
        
    }
    
    
}






/*function generarEnemigo() {
    var en = new enemigo(posEnemigoX, posEnemigoY);
    Enemigo.src = "../images/Ship2.png";
    en.posEnemigoX = div_izq.width/2;
    en.posEnemigoY = 0;
    enemies.push(en);
}

function pintarEnemigo() {
    for (var j = 0; j < enemies.length; j++) {
      ctx.drawImage(Enemigo, enemies[j].posEnemigoX, enemies[j].posEnemigoY);
      enemies[j].posEnemigoY += 5;
      if (enemies[j].posEnemigoY > div_izq.heigh) {
        enemies.splice(j, 1);
      }
    }
}
function draw() {
    ctx.clearRect(0, 0, game.width, game.height); // limpiar canvas
    if (enemies.length != 0) {
      pintarEnemigo();
      j = 0;
    }
}

setInterval(draw, 10);
setInterval(generarEnemigo, 2000);
*/
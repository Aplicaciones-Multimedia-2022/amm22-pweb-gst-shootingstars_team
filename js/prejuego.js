var mycanvas = document.getElementById("div_izq");
var ctx = mycanvas.getContext("2d");




var Meteorito1 = new Image();


var metX_izq = 0;
var metY = 800;
var dy = -2;

window.onload = init;


function init() {
    
    
    pintar_cosa();
   

    
    setInterval(draw, 10);
    
    
}



function pintar_cosa(){
    
    Meteorito1.src = "../images/grogu.png";
   ctx.drawImage(Meteorito1, metX_izq, metY);
    
}





function draw(){
    ctx.clearRect(0, 0, div_izq.width, div_izq.height);
    pintar_cosa();
    

    metY += dy;

    if(metY+150<0){
        metY=800

        
    }
    
    
}






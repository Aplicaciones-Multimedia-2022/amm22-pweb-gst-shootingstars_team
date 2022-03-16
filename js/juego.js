var mycanvas = document.getElementById('game');
var ctx = mycanvas.getContext("2d");
var naveX = 0;
var naveY = 0;
var nave_dispara = false;
var nave_UP = false;
var nave_DOWN = false;
const borde = 10;
var dy = 2; // movimiento y direccion de la nave
var alturanave = 70;
var bol_disparoX = 20;
var bol_disparoY = naveY+(alturanave/2);
var dx = 3; 
var disparar = false;
window.onload = init;
const final_nave = game.height - borde - alturanave;

function init() {  
    
    pintarBola();
   pintarNave(); //llamamos a la funcion pintarNave
   setInterval(draw,10);
}

function pintarNave() {
    ctx.beginPath();
    ctx.rect(naveX, naveY, 20, alturanave);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function pintarBola(){   
    ctx.beginPath();
    ctx.arc(bol_disparoX, bol_disparoY, borde, 0, 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();    
}


function draw(){
    ctx.clearRect(0, 0, game.width, game.height); // limpiar canvas
    pintarNave(); //llamamos a la funcion pintarNave
    pintarBola();

    if(nave_UP){
        naveY -= dy;
    }
    if(nave_DOWN){
        naveY += dy;
    }

    if(naveY<borde){
        naveY = borde;
    }
    else if(naveY>final_nave){
        naveY = final_nave;
    }

    if(disparar){
        
        bol_disparoX += dx;
        
    }
   


}

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(event){
    if(event.keyCode=='38'){//si la tecla presionada es direccional arriba
        nave_UP= true;
    }
    if(event.keyCode=='40'){//si la tecla presionada es direccional abajo
        nave_DOWN = true;
    }
    if(event.keyCode=='35'){//si la tecla presionada es espacio para disparar
       disparar = true;
    } 

}
function keyUpHandler(event){
    if(event.keyCode=='38'){//si la tecla presionada es direccional derecho
        nave_UP = false;
    }
    if(event.keyCode=='40'){//si la tecla presionada es direccional derecho
        nave_DOWN = false;
    }
    if(event.keyCode=='35'){//si la tecla presionada es espacio para disparar
        disparar = false;
    }
}
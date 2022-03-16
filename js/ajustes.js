var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var canvas2 = document.getElementById("personalizacion");
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var pressed= true;



window.onload=init;

function init(){     
    draw();
}

function draw(){
    ctx2.drawImage(document.getElementById('nave1'), 33, 71, 104, 124, 21, 20, 87, 104);
}
function aumentarVolumen(){

}

function elegirNave(){

}

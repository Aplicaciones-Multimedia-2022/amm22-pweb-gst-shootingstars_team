const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4= document.getElementById("boton4");
const boton5= document.getElementById("boton5");
const boton6= document.getElementById("boton6");
const boton7= document.getElementById("boton7");
let sonido1 = new Audio();
sonido1.src="../audio/click/39562__the-bizniss__mouse-click.wav";

window.onload=init;





function init(){  
    boton1.addEventListener('click',function(){
        sonido1.play();
    }); 
    boton2.addEventListener('click',function(){
      sonido1.play();
    }); 
    boton3.addEventListener('click',function(){
      sonido1.play();
    }); 
    boton4.addEventListener('click',function(){
      sonido1.play();
    }); 

}
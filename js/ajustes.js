var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var ctx1 = canvas1.getContext("2d");
var contador=0;
const botonmenos= document.getElementById("botonmenos");
const botonmas= document.getElementById("botonmas");

const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4= document.getElementById("boton4");
const boton5= document.getElementById("boton5");
const boton7= document.getElementById("bjuego");
const boton8= document.getElementById("boton8");

let sonido1 = new Audio();
let espera;
sonido1.src="../audio/click/39562__the-bizniss__mouse-click.wav";

/*var imagen2 = new Image();
imagen2.src = "../images/vol1.png";*/




var canvas2 = document.getElementById("personalizacion");
var ctx2 = canvas2.getContext("2d");

const nave1= document.getElementById("nave1");
const nave2= document.getElementById("nave2");
const nave3= document.getElementById("nave3");
const nave4= document.getElementById("nave4");




window.onload=init;

function init(){  
    boton1.addEventListener("click",function uno(){
        sonido1.play();
        espera = setTimeout(redireccionar1, 400);
    }); 
    boton2.addEventListener("click",function dos(){
      sonido1.play();
      espera = setTimeout(redireccionar2, 400);
    }); 
    boton3.addEventListener('click',function tres(){
      sonido1.play();
      espera = setTimeout(redireccionar3, 400);
    }); 
    boton4.addEventListener('click',function cuatro(){
      sonido1.play();
      espera = setTimeout(redireccionar4, 400);
    }); 
    boton5.addEventListener('click',function cinco(){
      sonido1.play();
      espera = setTimeout(redireccionar5, 400);
    });
    boton8.addEventListener('click',function ocho(){
      sonido1.play();
      espera = setTimeout(redireccionar8, 400);
    });
    boton7.addEventListener('click',function siete(){
      sonido1.play();
      espera = setTimeout(redireccionar7, 400);
    });
    botonmenos.addEventListener('click',function(){
      sonido1.play();
      //borrar();
    }); 
    botonmas.addEventListener('click',function(){
      sonido1.play();
      //draw2();
    });
    
    //draw1();


    draw2();




   //para la parte de personalizacion

  nave1.addEventListener("click",function(){
    sonido1.play();
    ctx2.clearRect(0, 0, 500,390 ); 
    var nave1 = document.getElementById("imagen5"); 
    ctx2.drawImage(nave1, 70, 30, 150, 100); 

   }); 
  
   nave2.addEventListener("click",function(){
    sonido1.play();
    ctx2.clearRect(0, 0, 500, 390); 
    var nave2 = document.getElementById("imagen6");
    ctx2.drawImage(nave2, 70, 0, 170, 120); 

   }); 
   nave3.addEventListener("click",function(){
    sonido1.play();  
    ctx2.clearRect(0, 0, 500, 390); 
    var nave3 = document.getElementById("imagen7");
    ctx2.drawImage(nave3,  70, 20, 150, 100); 

   }); 
   nave4.addEventListener("click",function(){
    sonido1.play();
    ctx2.clearRect(0, 0, 500, 390); 
    var nave4 = document.getElementById("imagen8");
    ctx2.drawImage(nave4,  50, 10, 170, 120); 

   }); 

}



function redireccionar1(){
  location.replace("../html/ComoJugar.html")
}
function redireccionar2(){
  location.replace("../html/autores.html")
}
function redireccionar3(){
  location.replace("../html/multimedia.html")
}
function redireccionar4(){
  location.replace("../html/desarrollo.html")
}
function redireccionar5(){
  location.replace("../html/referencias.html")
}
function redireccionar8(){
  location.replace("../html/portada.html")
}
function redireccionar7(){
  location.replace("../html/prejuego.html")
}

/*function draw1() {
  var imagen1 = document.getElementById("imagen1"); 
	ctx1.drawImage(imagen1, 20, 30, 100, 100); 

}*/



/*problema:como saber en cual estas para saber cual añadir y cual borrar de
vulumen
posibles solucione: usar arrays para poner cada uno en una posicion*/ 
/*function draw2(){//para dibujar las lineas del volumen
  //onClickMas();
  //onClickMenos();
  //document.getElementById("demo").innerHTML = contador;
  botonmas.addEventListener("click", onClickMas);
  botonmenos.addEventListener("click", onClickMenos);
  var imagen2 = document.getElementById("imagen2");
  var imagen3 = document.getElementById("imagen3");
  var imagen4 = document.getElementById("imagen4");

  if(contador==1){
    ctx1.clearRect(0, 0, 300, 150); 
    ctx1.drawImage(imagen2, 130, 27, 25, 100);
  }else if(contador==2){
    ctx1.clearRect(0, 0, 300, 150); 
    ctx1.drawImage(imagen2, 130, 27, 25, 100);
    ctx1.drawImage(imagen3, 180, 27, 25, 100);
  }else if(contador==3){
    ctx1.clearRect(0, 0, 300, 150); 
    ctx1.drawImage(imagen2, 130, 27, 25, 100);
    ctx1.drawImage(imagen3, 180, 27, 25, 100);
    ctx1.drawImage(imagen4, 230, 27, 25, 100);
  }else{
    ctx1.clearRect(0, 0, 300, 150); 

  }
  

}*/


// Select increment and decrement buttons


// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  if(count<3){
    count++;
  }else{
    
  }
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
  if(count>0){
    count--;
  }else{

  }
  totalCount.innerHTML = count;
};

// Add click event to buttons


function draw2(){//para dibujar las lineas del volumen
  var imagen1 = document.getElementById("imagen1"); 
  var imagen2 = document.getElementById("imagen2");
  var imagen3 = document.getElementById("imagen3");
  var imagen4 = document.getElementById("imagen4");
  botonmas.addEventListener("click", handleIncrement);
  botonmenos.addEventListener("click", handleDecrement);
  count2=document.getElementById("total-count");
  //me la sy¡uda ya si me funciona el contador y se me imprime
  //el microfono porque coño no se encienden las imagenes
  //de moemnto unica hipotesis es que considera el resultado de la
  //comparacion como false y el unico que son false todas imprime eso
  //hipotesis comprobada, su puta madre
  //si pones distinto de solo te sale la primera comprobado
  //con menores e iguales sale igual que en el de iguales
  //da igual como haga la logica siempre me sale lo mismo intercalo entre 
  //la de 0 y la de 3 cuenta
  /*if(count==1){
    ctx1.clearRect(0, 0, 300, 150); 
    ctx1.drawImage(imagen1, 20, 30, 100, 100); 
    ctx1.drawImage(imagen2, 130, 27, 25, 100);
  }else if(count==2){
    ctx1.clearRect(0, 0, 300, 150); 
    ctx1.drawImage(imagen1, 20, 30, 100, 100); 
    ctx1.drawImage(imagen2, 130, 27, 25, 100);
    ctx1.drawImage(imagen3, 180, 27, 25, 100);
  }else if(count==3){
    ctx1.clearRect(0, 0, 300, 150); 
    ctx1.drawImage(imagen1, 20, 30, 100, 100); 
    ctx1.drawImage(imagen2, 130, 27, 25, 100);
    ctx1.drawImage(imagen3, 180, 27, 25, 100);
    ctx1.drawImage(imagen4, 230, 27, 25, 100);
  }else{
    ctx1.clearRect(0, 0, 300, 150);
    ctx1.drawImage(imagen1, 20, 30, 100, 100);  
  }*/
  switch(count2){
    case 1:
      ctx1.clearRect(0, 0, 300, 150); 
      ctx1.drawImage(imagen1, 20, 30, 100, 100); 
      ctx1.drawImage(imagen2, 130, 27, 25, 100);

    case 2:
      ctx1.clearRect(0, 0, 300, 150); 
      ctx1.drawImage(imagen1, 20, 30, 100, 100); 
      ctx1.drawImage(imagen2, 130, 27, 25, 100);
      ctx1.drawImage(imagen3, 180, 27, 25, 100);
    
    case 3:
      ctx1.clearRect(0, 0, 300, 150); 
      ctx1.drawImage(imagen1, 20, 30, 100, 100); 
      ctx1.drawImage(imagen2, 130, 27, 25, 100);
      ctx1.drawImage(imagen3, 180, 27, 25, 100);
      ctx1.drawImage(imagen4, 230, 27, 25, 100);

    default:
      ctx1.clearRect(0, 0, 300, 150);
      ctx1.drawImage(imagen1, 20, 30, 100, 100);


  }
  

}

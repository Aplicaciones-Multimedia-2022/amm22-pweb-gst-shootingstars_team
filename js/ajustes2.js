var canvas2 = document.getElementById("personalizacion");
var ctx2 = canvas2.getContext("2d");

const nave1= document.getElementById("nave1");
const nave2= document.getElementById("nave2");
const nave3= document.getElementById("nave3");
const nave4= document.getElementById("nave4");

window.onload=init;

function init(){ 
    nave1.addEventListener("click",function(){
        var nave1 = document.getElementById("imagen5"); 
	    ctx2.drawImage(nave1, 40, 20, 200, 150); 

    }); 
    nave2.addEventListener("click",function(){
        var nave2 = document.getElementById("imagen6"); 
	    ctx2.drawImage(nave2, 40, 20, 200, 150); 

    }); 
    nave3.addEventListener("click",function(){
        var nave3 = document.getElementById("imagen5"); 
	    ctx2.drawImage(nave3, 40, 20, 200, 150); 

    }); 
    nave4.addEventListener("click",function(){
        var nave4 = document.getElementById("imagen5"); 
	    ctx2.drawImage(nave4, 40, 20, 200, 150); 

    }); 

}


//esto es del query de lo de hide and show para enseñar y oculta cosas s
//segun preferencia, usarlo tmbn para el icono de voulmen
/*
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });*/
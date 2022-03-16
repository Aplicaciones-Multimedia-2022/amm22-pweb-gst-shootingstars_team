var canvas = document.getElementById("micanvas"); //invocar a mi canvas
var ctx = canvas.getContext("2d");
var x,y,dx, dy;
var downPressed= false;
var upPressed= false;
var raqy= 30;

window.onload=init;
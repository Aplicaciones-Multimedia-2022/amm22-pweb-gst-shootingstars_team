var volumenGeneral;
var volgen;
let sonido2 = new Audio();
sonido2.src = "../media/cancion1.mp3";

// botones.addEventListener('mouseenter', e => {
//   sonido2.play();
// });

document.body.addEventListener("click", function a() {
  volumenGeneral = Number(localStorage.getItem("miVolumen"));
  sonido2.volume = volumenGeneral;
  // volgen=parseInt(volumenGeneral);
  // sonido2.volume= Math.floor(volgen);
  sonido2.play();
});


const botones = document.getElementById('boton1');
const controles = document.getElementById('unorderedList');

var volumenGeneral;
let sonido2= new Audio();
sonido2.src="../audio/cancion1.mp3";

// botones.addEventListener('mouseenter', e => {
//   sonido2.play();
// });

document.body.addEventListener('click', function a(){
  volumenGeneral = parseInt(localStorage.getItem("miVolumen"));
  sonido2.volume= volumenGeneral;
  sonido2.play();
});
// document.body.addEventListener('click', function b(){
//   sonido2.pause();
// });


// mouseTarget.addEventListener('mouseleave', e => {
//   mouseTarget.style.border = '1px solid #333';
//   leaveEventCount++;
//   addListItem('This is mouseleave event ' + leaveEventCount + '.');
// });

// function addListItem(text) {
//   // Create a new text node using the supplied text
//   var newTextNode = document.createTextNode(text);

//   // Create a new li element
//   var newListItem = document.createElement("li");

//   // Add the text node to the li element
//   newListItem.appendChild(newTextNode);

//   // Add the newly created list item to list
//   unorderedList.appendChild(newListItem);
// }
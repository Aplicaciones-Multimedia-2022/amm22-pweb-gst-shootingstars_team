window.onload = function() {

  var ctx = document.getElementById('canvas').getContext('2d');
  
  
  
  function draw() {
    var img = new Image();
    img.src = 'img/fondo.jpg';
    img.onload = function() {
      ctx.drawImage(img, 10, 10);
    };
  }
  
  function draw2() {
    var img = document.getElementById("imagen"); 
    ctx.drawImage(img, 100, 100, 200, 140); 
  
  }
  
  draw();
  
  draw2();
  
  }
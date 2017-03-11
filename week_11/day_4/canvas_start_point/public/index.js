window.onload = function (){
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  var currentLocation = [200, 200];


  var doKeyDown = function(event) {
   switch (event.keyCode) {
     case 37:
       context.beginPath();
       context.moveTo(currentLocation[0], currentLocation[1]);
       context.lineTo(currentLocation[0] -= 2, currentLocation[1]);
       context.stroke();
     break;
     case 38:
     context.beginPath();
     context.moveTo(currentLocation[0], currentLocation[1]);
       context.lineTo(currentLocation[0], currentLocation[1] -= 2);
       context.stroke();
     break;
     case 39:
     context.beginPath();
     context.moveTo(currentLocation[0], currentLocation[1]);
       context.lineTo(currentLocation[0] += 2, currentLocation[1]);
       context.stroke();
     break;
     case 40:
     context.beginPath();
     context.moveTo(currentLocation[0], currentLocation[1]);
       context.lineTo(currentLocation[0], currentLocation[1] += 2);
       context.stroke();
     break;
     case 87:
     clearCanvas();
     break
   }
  }

  window.addEventListener("keydown", doKeyDown, true);

  var clearCanvas = function() {
   canvas.width = canvas.width;
  }
  
  var colourPicker = document.querySelector('input');
   colourPicker.onchange = function(){
     context.strokeStyle = this.value;
   }



//draw image
  // var img = document.createElement('img');
  // img.src = "http://4.bp.blogspot.com/-3k8E2K4RtVY/Tpk9O35iN9I/AAAAAAAAAjk/tOkZCMfTJwo/s1600/Funny+Carrot+Pic5.jpg";
  // img.onload = function(){
  //   context.drawImage(img, 0, 0, 500, 506);
  // }



  // var drawCircle = function (x, y) {
  //   context.beginPath();
  //   context.arc(x, y, 20, 0, 2 * Math.PI, true);
  //   context.fill();
  //   context.stroke();
  // }

//   function drawRect = function(x, y) {
//       context.fillRect(25, 25, 100, 100);
//       context.clearRect(45, 45, 60, 60);
//       context.strokeRect(50, 50, 50, 50);
//     }
//   }

//   var drawSmallCircle = function (x, y) {
//     context.beginPath();
//     context.arc(x, y, 10, 0, 2 * Math.PI, true);
//     context.fill();
//     context.stroke();
//   }

// // canvas.onmousemove would draw a circle with the mouse
  // canvas.onclick = function (event) {
  //   drawCircle(event.x, event.y);
  // }

  // canvas.onmousemove = function(event) {
  //   drawCircle(event.x, event.y)
  // }

  // draw a rectangle (x axis, y axis, width, height)
  // context.fillStyle = "deepskyblue";
  // context.fillRect(10, 10, 50, 50);

  // context.fillStyle = "tomato";
  // context.fillRect(60, 60, 50, 50);

  // //Draw a line (moveto = where it starts, x and y. lineto = where it ends x and y)
  // context.beginPath();
  // context.moveTo(100, 150);
  // context.lineTo(100, 200);
  // context.stroke();

  // //draw triangle
  // context.beginPath();
  // context.moveTo(200, 200);
  // context.lineTo(200, 300);
  // context.lineTo(100, 300);
  // context.closePath();
  // context.stroke();

  // //circle
  // context.beginPath();
  // context.arc(350, 350, 20, 0, 2 * Math.PI, false);
  // context.stroke();

  // //semi-circle
  // context.beginPath();
  // context.arc(390, 350, 20, 0, Math.PI, true);
  // context.stroke();

}
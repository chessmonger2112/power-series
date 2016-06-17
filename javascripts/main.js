$(function() {
  console.log("suppppp");
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");


  var tX = 100;
  var tY = 100;
  var magX = 100;
  drawLine = function(point1, point2)
  {
    var x1 = point1.x;
    var y1 = point1.y;
    var x2 = point2.x;
    var y2 = point2.y;
    context.beginPath();
    // context.moveTo(x1 + tX, y1 * 1 + tY);
    // context.lineTo(x2 + tX, y2 * 1 + tY);
    context.moveTo(x1 * magX + tX, y1 + tY);
    context.lineTo(x2 * magX + tX, y2 + tY);
    context.stroke();
    context.closePath();
    console.log(`point1: ${x1}, ${y1}; point2: ${x2}, ${y2}`);
  }

  eX = (x, y) => Math.exp(x);

  var deltaX = .1;
  var minX = -10;
  var maxX = 10;

  var graphFx = function(fX)
  {
    for (let x = minX; x < maxX; x += deltaX)
    {
      let y = fX(x);
      let x2 = x + deltaX;
      let y2 = fX(x + deltaX);
      drawLine({x, y}, {x: x2, y: y2});
    }
  }

  graphFx(eX);






});



$(function() {
  console.log("suppppp");
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var tX = 100;
  var tY = 100;
  var magX = 100;
  drawLine = function(point1, point2, color)
  {
    var x1 = point1.x;
    var y1 = point1.y;
    var x2 = point2.x;
    var y2 = point2.y;
    context.beginPath();
    context.moveTo(x1 * magX + tX, y1 + tY);
    context.lineTo(x2 * magX + tX, y2 + tY);
    context.strokeStyle = color || "black";
    // context.strokeStyle = "green";
    context.stroke();
    context.closePath();
  }

  var eX = (x, y) => Math.exp(x);
  var factorial = x => (x == 0 || x == 1) ? 1: x * factorial(x -1);

  var deltaX = .1;
  var minX = -10;
  var maxX = 10;
  var numOfTerms = 1;

  var graphFx = function(fX, color)
  {
    for (let x = minX; x < maxX; x += deltaX)
    {
      let y = fX(x);
      let x2 = x + deltaX;
      let y2 = fX(x + deltaX);
      drawLine({x, y}, {x: x2, y: y2}, color);

      let yA = approximateEX(numOfTerms, x);
      let yA2 = approximateEX(numOfTerms, x2);
      drawLine({x, y: yA}, {x: x2, y: yA2});
    }
  }

  function makeGraphs(n) {
    for (let i = 0; i < n; i ++)
    {
      graphFx(eX, "red");
      numOfTerms ++;
    }
  }

  function approximateEX(n, x) //where n is the amount of desired terms
  {
    var y = 0;
    for (var i = 0; i < n; i ++)
    {
      let num = Math.pow(x, i);
      let den =   factorial(i);
      let quot = num / den;
      y += quot;
    }
    return y;
  }

  $("#goButton").click(function() {
    var numOfTerms = parseInt($("#numOfTermsInput").val());
    console.log(numOfTerms);
    if (numOfTerms)
    {
      console.log("Sdfsdf");
      makeGraphs(numOfTerms);
    }
  });
});

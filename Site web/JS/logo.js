
var logo_canvas = document.getElementById("logo");
var context = logo_canvas.getContext("2d");

context.fillStyle = "#FF7D17";
context.beginPath();
context.arc(100, 80, 10, 0, 2 * Math.PI);
context.closePath();
context.fill();
context.lineWidth = 1.5;
context.stroke();
context.fillStyle = "#fff";

context.beginPath();
context.arc(99, 79, 7.5, 0.5 * Math.PI, 2 * Math.PI, true);
context.closePath();
context.fill();

context.beginPath();
context.strokeStyle = "#333";
context.ellipse(100, 80, 50, 25, 1.55, 4.71239, 55);
context.stroke();

context.beginPath();
context.strokeStyle = "#333";
context.ellipse(100, 80, 50, 25, -3.8, 4.71239, 55);
context.stroke();

context.beginPath();
context.strokeStyle = "#333";
context.ellipse(100, 80, 50, 25, 3.8, 4.71239, 55);
context.stroke();

context.fillStyle = "#FF7D17";
context.beginPath();
context.arc(58, 50, 5, 0, 2 * Math.PI);
context.closePath();
context.fill();
context.lineWidth = 1.5;
context.stroke();
context.fillStyle = "#fff";

context.fillStyle = "#FF7D17";
context.beginPath();
context.arc(130, 44, 5, 0, 2 * Math.PI);
context.closePath();
context.fill();
context.lineWidth = 1.5;
context.stroke();
context.fillStyle = "#fff";

context.fillStyle = "#FF7D17";
context.beginPath();
context.arc(113, 124, 5, 0, 2 * Math.PI);
context.closePath();
context.fill();
context.lineWidth = 1.5;
context.stroke();
context.fillStyle = "#fff";

context.fillStyle = "#FAFAFA";
context.beginPath();
context.rect(133, 50, 18, 26);
context.closePath();
context.fill();
context.fillStyle = "#fff";


context.font = "30px Arial";
context.fillStyle = "#3666FF";
context.fillText("Sun", 132, 75);
context.fillStyle = "#E57115";
context.fillText("RISE", 145, 100);
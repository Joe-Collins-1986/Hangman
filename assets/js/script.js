const toggleBar = document.getElementsByClassName("toggle-bar")[0];
const postIt = document.getElementsByClassName("post-it-contents")[0];
let on = true

toggleBar.addEventListener("click", function() {
    postIt.classList.toggle("select");
});


/* Canvas- tutorial video (https://www.youtube.com/watch?v=Yvz_axxWG4Y&t=73s) */
var canvas = document.getElementById("canvas1");
var canvasSize = document.getElementById("test");
const ctx = canvas.getContext("2d");
canvas.width = canvasSize.clientWidth;
canvas.height = canvasSize.clientHeight;

window.addEventListener("resize", function() {
    console.log(canvasSize.clientWidth);
    console.log(canvasSize.clientHeight);
    canvas.width = canvasSize.clientWidth;
    canvas.height = canvasSize.clientHeight;

    ctx.fillRect(canvas.width * 0.2, canvas.height * 0.9, canvas.width * 0.6, 5); //part 1
    ctx.fillRect(canvas.width * 0.6, canvas.height * 0.1, 5, canvas.height * 0.8); //part 2
    ctx.fillRect(canvas.width * 0.4, canvas.height * 0.1, canvas.width * 0.2, 5); //part 3
    ctx.fillRect(canvas.width * 0.4, canvas.height * 0.1, 2, canvas.height * 0.2); //part 4

    
    ctx.beginPath(); //part 5 - head   
    ctx.arc(canvas.width * 0.4, canvas.height * 0.3, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.3);
    ctx.lineTo(canvas.width * 0.4, canvas.height * 0.6); //part 6 - body 

    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.4);
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.35); //part 7 - arm

    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.4);
    ctx.lineTo(canvas.width * 0.3, canvas.height * 0.35); //part 8 - arm

    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.6);
    ctx.lineTo(canvas.width * 0.45, canvas.height * 0.75); //part 9 - leg

    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.6);
    ctx.lineTo(canvas.width * 0.35, canvas.height * 0.75); //part 10 - leg

    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();




    // ctx.fillRect(canvas.width * 0.4, canvas.height * 0.3, 2, canvas.height * 0.3); //part 5




});


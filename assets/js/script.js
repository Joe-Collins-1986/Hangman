const toggleBar = document.getElementsByClassName("toggle-bar")[0];
const postIt = document.getElementsByClassName("post-it-contents")[0];
let on = true

toggleBar.addEventListener("click", function() {
    postIt.classList.toggle("select");
});


/* Canvas- tutorial video (https://www.youtube.com/watch?v=Yvz_axxWG4Y&t=73s) */
var canvas = document.getElementById("canvas");
var canvasSize = document.getElementById("size-canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvasSize.clientWidth;
canvas.height = canvasSize.clientHeight;

drawBase();
    drawPost();
    drawTop();
    drawRope();
    drawHead();
    drawBody();
    drawArm1();
    drawArm2();
    drawLeg1();
    drawLeg2();

window.addEventListener("resize", function() {
    console.log(canvasSize.clientWidth);
    console.log(canvasSize.clientHeight);
    canvas.width = canvasSize.clientWidth;
    canvas.height = canvasSize.clientHeight;

    drawBase();
    drawPost();
    drawTop();
    drawRope();
    drawHead();
    drawBody();
    drawArm1();
    drawArm2();
    drawLeg1();
    drawLeg2();
});

function drawBase() {
    ctx.fillRect(canvas.width * 0.2, canvas.height * 0.9, canvas.width * 0.6, 5);
};

function drawPost() {
    ctx.fillRect(canvas.width * 0.6, canvas.height * 0.1, 5, canvas.height * 0.8);
};

function drawTop() {
    ctx.fillRect(canvas.width * 0.4, canvas.height * 0.1, canvas.width * 0.2, 5);
};

function drawRope() {
    ctx.fillRect(canvas.width * 0.4, canvas.height * 0.1, 2, canvas.height * 0.2);
};

function drawHead() {
    ctx.beginPath();
    ctx.arc(canvas.width * 0.4, canvas.height * 0.3, 10, 0, Math.PI * 2);
    ctx.fill();
};

function drawBody() {
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.3);
    ctx.lineTo(canvas.width * 0.4, canvas.height * 0.6);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
};

function drawArm1() {
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.4);
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.35);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
};

function drawArm2() {
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.4);
    ctx.lineTo(canvas.width * 0.3, canvas.height * 0.35); 
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
};

function drawLeg1() {
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.6);
    ctx.lineTo(canvas.width * 0.45, canvas.height * 0.75) 
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
};

function drawLeg2() {
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.6);
    ctx.lineTo(canvas.width * 0.35, canvas.height * 0.75);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
};
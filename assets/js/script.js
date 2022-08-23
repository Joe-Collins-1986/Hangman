

/* toggle menu */
const toggleBar = document.getElementsByClassName("toggle-bar")[0];
const postIt = document.getElementsByClassName("post-it-contents")[0];

toggleBar.addEventListener("click", function() {
    postIt.classList.toggle("select");
});

/* Canvas */
let canvas = document.getElementById("canvas");
let canvasSize = document.getElementById("size-canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvasSize.clientWidth;
canvas.height = canvasSize.clientHeight;

/* Canvas-rezize on resize of window */
window.addEventListener("resize", function() {
    canvas.width = canvasSize.clientWidth;
    canvas.height = canvasSize.clientHeight;
    hangmanDraw();
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


/* select random word and present as underscores */

// let wordList = ["dog", "cat", "car", "bar", "egg", "bike", "tree", "pony", "chair", "flower", "house", "computer"]
let letterCheck = [];
let lettersGuessed= [];
let shownWord = [];
let wrongAnswers = 10;
let animals = ["dog", "cat", "lion", "tiger", "zebra", "kangaroo", "bear", "eagle", "duck", "snake", "panda"];
let cars = ["audi", "bmw", "bentley", "citroen", "ferrari", "fiat", "ford", "jeep", "mazda", "mini", "skoda"];
let beers = ["budweiser", "brewdog", "carling", "carlsberg", "corona", "coors", "guinness", "heineken", "peroni", "tiger"];
let catagory = cars; //default
let selectedWord = catagory[Math.floor(Math.random() * catagory.length)];
let levelOutput = "";
let scoreTally = 0;



console.log(selectedWord);

/* present catagory */
if (catagory == animals) { // must be a better way of doin this. - MENTOR
    levelOutput = "Animals";}
else if (catagory == beers) {
    levelOutput = "Beers";}
else {
    levelOutput = "Animals";
};
let level = document.getElementById("level");
level.innerHTML = levelOutput;


/* present score */
let score = document.getElementById("score");
score.innerHTML = scoreTally;


/* underscore word */
for (let i = 0; i < selectedWord.length; i++) { 
    shownWord[i] = " _ ";
    };

    let wordOutput = document.getElementById("word-output");
    wordOutput.innerHTML = shownWord.join(" ");


/* check for letter in word and update shownWord */
function updateWord() {
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] == letterCheck) {
            shownWord[i] = letterCheck;
            let wordOutput = document.getElementById("word-output");
            wordOutput.innerHTML = shownWord.join(" ");
    }}
    if (!selectedWord.includes(letterCheck)) {
        wrongAnswers --;
        console.log(wrongAnswers);
        console.log("not a correct letter");
        hangmanDraw();
    }
}

/* hangman draw */
function hangmanDraw() { // must be a better way of doin this. - MENTOR
    if (wrongAnswers <= 9) {
        drawBase();
    }
    if (wrongAnswers <= 8) {
        drawPost();
    }
    if (wrongAnswers <= 7) {
        drawTop();
    }
    if (wrongAnswers <= 6) {
        drawRope();
    }
    if (wrongAnswers <= 5) {
        drawHead();
    }
    if (wrongAnswers <= 4) {
        drawBody();
    }
    if (wrongAnswers <= 3) {
        drawArm1();
    }
    if (wrongAnswers <= 2) {
        drawArm2();
    }
    if (wrongAnswers <= 1) {
        drawLeg1();
    }
    if (wrongAnswers <= 0) {
        drawLeg2();
    }
}

/* button event listener */
document.addEventListener("DOMContentLoaded", function() {
    let selectedButtons = document.getElementsByTagName("button");

    for (i of selectedButtons) {
        i.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "letter") {
                this.style.opacity = 0.3; 
                this.disabled = true;
                letterCheck = this.id;
                lettersGuessed = lettersGuessed + letterCheck;
                updateWord()
            } else {
                console.log("other botton functions not built yet!!!")
            }
        })
    }
});

/* settings button event listener */

/* rules button event listener */


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

/* Canvas-rezize on resize of window */
window.addEventListener("resize", function() {
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

/* select random word and present as underscores */

let wordList = ["dog", "cat", "car", "bar", "egg", "bike", "tree", "pony", "chair", "flower", "house", "computer"]
let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
let letterCheck = [];
let lettersGuessed= [];
let shownWord = [];

console.log(selectedWord);




// let wordOutput = document.getElementById("word-output");
// wordOutput.innerHTML = shownWord;


/* underscore word */
for (let i = 0; i < selectedWord.length; i++) { 
    shownWord[i] = " _ ";
    };


    let wordOutput = document.getElementById("word-output");
    wordOutput.innerHTML = shownWord.join(" ");



function updateWord() {
    for (let j = 0; j < selectedWord.length; j++) {
        if (selectedWord[j] == letterCheck) {
            shownWord[j] = letterCheck;
            let wordOutput = document.getElementById("word-output");
            wordOutput.innerHTML = shownWord.join(" ");
        }
    }
}


/* button event listener */

document.addEventListener("DOMContentLoaded", function() {
    let selectedButtons = document.getElementsByTagName("button");

    for (i of selectedButtons) {
        i.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "letter") {
                this.style.opacity = 0.3; 
                letterCheck = this.id;
                lettersGuessed = lettersGuessed + letterCheck;
                updateWord()
            } else {
                console.log("other botton functions not built yet!!!")
            }
        })
    }
});


    
// /* replace letters */
// function replaceLetters() {
//     console.log(selectedWord);
//     console.log(lettersGuessed)
//     console.log(lettersGuessed.length);
//     for (let i = 0; i < selectedWord.length; i++) {
//         console.log("a");
//         for (let x = 0; x < lettersGuessed.length; x++) {
//             console.log(shownWord[i]);
//             console.log("b");
//             if (lettersGuessed[x] === selectedWord[i]) {
//                 shownWord[i] = lettersGuessed[x];

//             }
//         console.log(shownWord);
//         return shownWord;
//         }
//     }
// }

// replaceLetters();
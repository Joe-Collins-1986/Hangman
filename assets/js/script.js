

/* toggle menu */
const toggleBar = document.getElementsByClassName("toggle-bar")[0];
const postIt = document.getElementsByClassName("post-it-contents")[0];
const rulesPostIt = document.getElementById("rules");
const settingsPostIt = document.getElementById("settings");

toggleBar.addEventListener("click", function() {
    postIt.classList.toggle("select");
    rulesPostIt.className = "rules"; // added to remove post-it when rules shows.
    settingsPostIt.className = "settings";

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

let letterCheck = [];
let shownWord = [];
let wrongAnswers = 10;
let animals = ["dog", "cat", "lion", "tiger", "zebra", "bear", "eagle", "duck", "snake", "panda", "badger", "baboon", "beaver", "bobcat", "cougar", "coyote", "donkey", "ferret", "gopher", "impala", "jackal", "jaguar", "monkey", "possum", "rabbit", "turtle", "mouse", "sheep", "whale", "sloth", "viper", "gecko", "raven", "trout", "boar", "goat", "hare", "lynx", "orca", "wolf", "elk", "fox", "ape", "yak", "bat", "owl"];
let cars = ["audi", "bmw", "bentley", "citroen", "ferrari", "fiat", "ford", "jeep", "mazda", "mini", "skoda"];
let beers = ["budweiser", "brewdog", "carling", "carlsberg", "corona", "coors", "guinness", "heineken", "peroni", "tiger"];
let catagory = animals; //default
let levelOutput = ""; //default
let selectedWord = catagory[Math.floor(Math.random() * catagory.length)];
let scoreTally = 10;
let endGameTally = 0;
let winnerText = "";
let loserText = "";

// CREATE SECTION FOR ALL HTML ELEMENTS ID's
const score = document.getElementById("score");
const wordOutput = document.getElementById("word-output");
const popUp = document.getElementById("pop-up");
const result = document.getElementById("result");
const wordPositioning = document.getElementById("word-positioning");
const openRules = document.getElementById("openRules");
const openSettings = document.getElementById("openSettings");
const animalButton = document.getElementById("animals");
const carsButton = document.getElementById("cars");
const beersButton = document.getElementById("beers");

// CREATE SECTION FOR ALL HTML ELEMENTS CLASSNAME's
const catButtons = document.getElementsByClassName("catagoryButon");

// CREATE SECTION FOR ALL HTML ELEMENTS TAGNAMES's
const selectedButtons = document.getElementsByTagName("button");


console.log(selectedWord);

/* present info at start of game */
checkCatagory();
underscoreWord();
score.innerHTML = endGameTally;


/********* FUNCTIONS **********/
function checkCatagory() {
     if (catagory == animals) { // must be a better way of doin this. - MENTOR
        levelOutput = "Animals";}
    else if (catagory == beers) {
        levelOutput = "Beers";}
    else {
        levelOutput = "Cars";
    };
    console.log(catagory)
    level.innerHTML = levelOutput;
};

function underscoreWord() {
    for (let i = 0; i < selectedWord.length; i++) { 
        shownWord[i] = "_";
        };
    
        wordOutput.innerHTML = shownWord.join(" ");
};

/* check for letter in word and update shownWord */
function updateWord() {
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] == letterCheck) {
            shownWord[i] = letterCheck;
            wordOutput.innerHTML = shownWord.join(" ");
            hangmanDraw();
            winOutcome();
    }}
    if (!selectedWord.includes(letterCheck)) {
        wrongAnswers --;
        console.log(wrongAnswers);
        console.log("not a correct letter");
        hangmanDraw();
        loseOutcome();
}};

/* hangman draw */
function hangmanDraw() { // must be a better way of doin this. - MENTOR
    if (wrongAnswers == 10) {
        scoreTally = 10;
    }
    if (wrongAnswers <= 9) {
        drawBase();
        scoreTally = 9;
    }
    if (wrongAnswers <= 8) {
        drawPost();
        scoreTally = 8;
    }
    if (wrongAnswers <= 7) {
        drawTop();
        scoreTally = 7;
    }
    if (wrongAnswers <= 6) {
        drawRope();
        scoreTally = 6;
    }
    if (wrongAnswers <= 5) {
        drawHead();
        scoreTally = 5;
    }
    if (wrongAnswers <= 4) {
        drawBody();
        scoreTally = 4;
    }
    if (wrongAnswers <= 3) {
        drawArm1();
        scoreTally = 3;
    }
    if (wrongAnswers <= 2) {
        drawArm2();
        scoreTally = 2;
    }
    if (wrongAnswers <= 1) {
        drawLeg1();
        scoreTally = 1;
    }
    if (wrongAnswers <= 0) {
        drawLeg2();
        scoreTally = -5;
    }
    return scoreTally;
};

/* correct guess and game won */
function winOutcome() {
    if (!shownWord.includes("_")) {
        console.log("congratulations");
        endGameTally = endGameTally + scoreTally;
        score.innerHTML = endGameTally;
        popUp.style.display = "inline";
        wordPositioning.innerHTML = ("Wow, you did it!!!");

        winnerText = "<b>Congratulations!!!</b> <br><br> You guessed the word <b><u>" + selectedWord.toUpperCase() + "</u></b> and your score has increased by <b><u>" + scoreTally + "</u></b>."

        result.innerHTML = (winnerText);

    } else {
        wordPositioning.innerHTML = ("Well done you are getting closer!!!");
    }
    return scoreTally;
}

function loseOutcome() {
    if (wrongAnswers <= 0) {
        console.log("Loss");
        endGameTally = endGameTally + scoreTally;
        score.innerHTML = endGameTally;
        popUp.style.display = "inline";
        wordPositioning.innerHTML = ("Don't worry, you'll get it next time!!!");

        loserText = "<b>Unlucky!!!</b> <br><br> The correct word was <b><u>" + selectedWord.toUpperCase() + "</u></b>. Your score has decreased by <b><u>" + scoreTally + "</u></b>."

        result.innerHTML = (loserText);

    } else {
        wordPositioning.innerHTML = ("Oh, no! That's not right.");
    }
    return scoreTally;
}

function newGame() {

    //remove word from word list???

    letterCheck = [];
    shownWord = [];
    wrongAnswers = 10;
    selectedWord = catagory[Math.floor(Math.random() * catagory.length)];
    popUp.style.display = "none";

    ctx.clearRect(0, 0, canvas.width, canvas.height); // https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing

    wordPositioning.innerHTML = ("Let's go again, shall we?");

    let alphButtons = document.getElementsByClassName("alph-button")
    for (i of alphButtons) {
        i.style.opacity = 1;
        i.disabled = false;
    }
    underscoreWord();
    console.log(selectedWord);
};

/* reactivate all cat buttons */ 
function activateCatButtons() {
    for (i of catButtons) {
        i.style.opacity = 1;
        i.disabled = false;
        console.log(i);
    }
};


/********* BUTTON EVENT LISTENER **********/
/* button event listener */
document.addEventListener("DOMContentLoaded", function() {

    for (i of selectedButtons) {
        i.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "letter") {
                this.style.opacity = 0.3; 
                this.disabled = true;
                letterCheck = this.id;
                updateWord();

            } else if (this.getAttribute("data-type") === "cat"){
                settingsPostIt.className = "settings";
                if (this.id == "beers") {
                    catagory = beers;
                } else if (this.id == "animals") {
                    catagory = animals;
                } else {
                    catagory = cars;
                }
                checkCatagory();
                activateCatButtons();
                newGame();

            } else if (this.getAttribute("data-type") === "play-again") {
                newGame();

            } else if (this.getAttribute("data-type") === "reset") {
                window.location.reload();

            } else if (this.getAttribute("data-type") === "leaveRules") {
                rulesPostIt.classList.toggle("open");
                
            } else if (this.getAttribute("data-type") === "leaveSettings") {
                settingsPostIt.classList.toggle("open");

            } else {
                console.log("button not built yet");
            }
        })
    }
});

/* rules button event listener */
openRules.addEventListener("click", function() {
    rulesPostIt.classList.toggle("open");
    if (settingsPostIt.className = "open") {
        settingsPostIt.className = "settings";
    };

    // ADD RULE TO CHECK IF SETTINGS ARE OPEN AND CLOSE IF IT IS
    if (matchMedia("(min-width: 821px)").matches) {
        postIt.className = "post-it-contents";
      }
      else {
        postIt.classList.toggle("select");
      };
});

/* settings button event listener */
openSettings.addEventListener("click", function() { // MUST BE A BETTE WAY ASK MENTOR
    if (catagory == animals) {
        animalButton.style.opacity = 0.3;
        animalButton.disabled = true;
    } else if (catagory == cars) {
        carsButton.style.opacity = 0.3;
        carsButton.disabled = true;
    } else {
        beersButton.style.opacity = 0.3;
        beersButton.disabled = true;
    };


    settingsPostIt.classList.toggle("open");
    if (rulesPostIt.className = "open") {
        rulesPostIt.className = "rules";
    };
    // ADD RULE TO CHECK IF SETTINGS ARE OPEN AND CLOSE IF IT IS
    if (matchMedia("(min-width: 821px)").matches) {
        postIt.className = "post-it-contents";
      }
      else {
        postIt.classList.toggle("select");
      };
});
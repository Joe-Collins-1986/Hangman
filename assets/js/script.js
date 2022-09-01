
// OPTIONAL - TO REMOVE LAST WORD FROM LIST
// REQUIRED IF ABOVE - MESSAGE TO SAY TOPIC COMPLETE IF ARRAY EMPTY
// OPTIONAL - KEYBOARD KEY INPUT


/**
* Wrap game in function to avoid global variables.
* This function will initiallise with the loading of the page.
* Tutorial use to understand methods of limiting global variables used - https://www.youtube.com/watch?v=_4V4yUxGng8
*/
(function() {

    /* toggle menu variables */
    const toggleBar = document.getElementsByClassName("toggle-bar")[0];
    const postIt = document.getElementsByClassName("post-it-contents")[0];
    const rulesPostIt = document.getElementById("rules");
    const settingsPostIt = document.getElementById("settings");

    /* game variables - inital states */
    let letterCheck = [];
    let shownWord = [];
    let wrongAnswers = 10;
    // let animals = ["dog", "cat", "lion", "tiger", "zebra", "bear", "eagle", "duck", "snake", "panda", "badger", "baboon", "beaver", "bobcat", "cougar", "coyote", "donkey", "ferret", "gopher", "impala", "jackal", "jaguar", "monkey", "possum", "rabbit", "turtle", "mouse", "sheep", "whale", "sloth", "viper", "gecko", "raven", "trout", "boar", "goat", "hare", "lynx", "orca", "wolf", "elk", "fox", "ape", "yak", "bat", "owl"];
    let animals = ["dog", "cat", "lion", "tiger"];
    let cars = ["alfa", "audi", "bmw", "fiat", "ford", "jeep", "mazda", "mini", "skoda", "golf", "polo", "saab", "seat", "astra", "civic", "dodge", "honda", "lexus", "micra", "pinto", "prius", "rover", "volvo", "yaris", "austin", "beetle", "camero", "chevvy", "datsun", "lancer", "morgan", "nissan", "passat", "subaru", "suzuki", "toyota"];
    let countries = ["chad", "cuba", "fiji", "iran", "iraq", "laos", "mali", "niue", "oman", "peru", "togo", "benin", "egypt", "gabon", "ghana", "kenya", "libya", "niger", "sudan", "china", "india", "japan", "nepal", "qatar", "syria", "yemen", "nauru", "palau", "samoa", "tonga", "italy", "malta", "spain", "angola", "belize", "bhutan", "brazil", "brunei", "canada", "cyprus", "france", "gambia", "greece", "guinea", "guyana", "israel", "jordan", "kosovo", "kuwait", "latvia", "malawi", "mexico", "monaco", "norway", "panama", "poland", "russia", "rwanda", "serbia", "sweden", "taiwan", "turkey", "tuvalu", "uganda", "zambia"];
    let catagory = animals; //default
    let levelOutput = "";
    let selectedWord = catagory[Math.floor(Math.random() * catagory.length)];
    let scoreTally = 10;
    let endGameTally = 0;
    let resultHeaderText = "";
    let resultText = "";

    // CREATE SECTION FOR ALL HTML ELEMENTS ID's
    const score = document.getElementById("score");
    const wordOutput = document.getElementById("word-output");
    const popUp = document.getElementById("pop-up");
    const result = document.getElementById("result");
    const resultHeader = document.getElementById("result-header");
    const wordPositioning = document.getElementById("word-positioning");
    const openRules = document.getElementById("openRules");
    const openSettings = document.getElementById("openSettings");
    const animalButton = document.getElementById("animals");
    const carsButton = document.getElementById("cars");
    const countriesButton = document.getElementById("countries");

    // CREATE SECTION FOR ALL HTML ELEMENTS CLASS's
    const catButtons = document.getElementsByClassName("catagoryButon");
    const alphButtons = document.getElementsByClassName("alph-button");
    const selectedButtons = document.getElementsByTagName("button");

    /* SOUND EFFECTS */
    const penSound = document.getElementById("penSound");
    const winSound = document.getElementById("winSound");
    const loseSound = document.getElementById("loseSound");
    const ding = document.getElementById("ding");
    const soundEffects = document.getElementsByClassName("soundEffects");
    const toggleMute = document.getElementById("muteButton");

    /* CANVAS */
    let canvas = document.getElementById("canvas");
    let canvasSize = document.getElementById("size-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvasSize.clientWidth;
    canvas.height = canvasSize.clientHeight;

    /* PRESENT INFO AT START OF THE GAME */
    console.log(selectedWord); // REMOVE AFTER TESTING
    checkCatagory();
    underscoreWord();
    score.innerHTML = endGameTally;


    /********* FUNCTIONS **********/

    /**
     * Validates the catagory/topic current selected and pushes it to inner html
    */
    function checkCatagory() {
        if (catagory == animals) { // must be a better way of doin this. - MENTOR
            levelOutput = "Animals";}
        else if (catagory == countries) {
            levelOutput = "Countries";}
        else {
            levelOutput = "Cars";
        };
        level.innerHTML = levelOutput;
    };

    /**
    * Present underscores for letters in shownWord and push to inner
    * HTML at the innitialisation of the game
    */
    function underscoreWord() {
        for (let i = 0; i < selectedWord.length; i++) { 
            shownWord[i] = "_";
            };
        
            wordOutput.innerHTML = shownWord.join(" ");
    };

    /**
    * Check for letter in word and update shownWord.
    * Run required outcomes dependant on if letter is located.
    */
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
            hangmanDraw();
            loseOutcome();
    }};

    /* Functions for drawing hangman parts */
    /**
    * Draw hangman base (part1)
    */
    function drawBase() {
        ctx.fillRect(canvas.width * 0.2, canvas.height * 0.9, canvas.width * 0.6, 5);
    };

    /**
    * Draw hangman post (part2)
    */
    function drawPost() {
        ctx.fillRect(canvas.width * 0.6, canvas.height * 0.1, 5, canvas.height * 0.8);
    };

    /**
    * Draw hangman top-post (part3)
    */
    function drawTop() {
        ctx.fillRect(canvas.width * 0.4, canvas.height * 0.1, canvas.width * 0.2, 5);
    };

    /**
    * Draw hangman rope (part4)
    */
    function drawRope() {
        ctx.fillRect(canvas.width * 0.4, canvas.height * 0.1, 2, canvas.height * 0.2);
    };

    /**
    * Draw hangman head (part5)
    */
    function drawHead() {
        ctx.beginPath();
        ctx.arc(canvas.width * 0.4, canvas.height * 0.3, 10, 0, Math.PI * 2);
        ctx.fill();
    };

    /**
    * Draw hangman body (part6)
    */
    function drawBody() {
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.4, canvas.height * 0.3);
        ctx.lineTo(canvas.width * 0.4, canvas.height * 0.6);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    };

    /**
    * Draw hangman arm1 (part7)
    */
    function drawArm1() {
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.4, canvas.height * 0.4);
        ctx.lineTo(canvas.width * 0.5, canvas.height * 0.35);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    };

    /**
    * Draw hangman arm2 (part8)
    */
    function drawArm2() {
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.4, canvas.height * 0.4);
        ctx.lineTo(canvas.width * 0.3, canvas.height * 0.35); 
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    };

    /**
    * Draw hangman leg1 (part9)
    */
    function drawLeg1() {
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.4, canvas.height * 0.6);
        ctx.lineTo(canvas.width * 0.45, canvas.height * 0.75) 
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    };

    /**
    * Draw hangman leg2 (part10)
    */
    function drawLeg2() {
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.4, canvas.height * 0.6);
        ctx.lineTo(canvas.width * 0.35, canvas.height * 0.75);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    };

    /**
    * Evaluate hangman,
    * update drawing,
    * update score tally
    */
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

    /**
    * function for correct guesses and calling the appropriate functions for game won
    */
    function winOutcome() {
        if (!shownWord.includes("_")) {
            endGameTally = endGameTally + scoreTally;
            score.innerHTML = endGameTally;
            popUp.style.display = "inline";
            wordPositioning.innerHTML = ("Wow, you did it!!!");

            disableAllAlphaButtons();
            winSound.play();
            resultHeaderText = "Congratulations!!!";
            resultText = "You guessed the word <b><u>" + selectedWord.toUpperCase() + "</u></b> and your score has increased by <b><u>" + scoreTally + "</u></b>."

            resultHeader.innerHTML = (resultHeaderText);
            result.innerHTML = (resultText);

        } else {
            wordPositioning.innerHTML = ("Well done you are getting closer!!!");
            ding.play();
        }
        return scoreTally;
    }

    /**
    * function for incorrect guesses and calling the appropriate functions for game lost
    */
    function loseOutcome() {
        if (wrongAnswers <= 0) {
            endGameTally = endGameTally + scoreTally;
            score.innerHTML = endGameTally;
            popUp.style.display = "inline";
            wordPositioning.innerHTML = ("Don't worry, you'll get it next time!!!");

            disableAllAlphaButtons();
            loseSound.play();
            resultHeaderText = "Unlucky!!!";
            resultText = "The correct word was <b><u>" + selectedWord.toUpperCase() + "</u></b>. Your score has decreased by <b><u>" + scoreTally + "</u></b>."

            resultHeader.innerHTML = (resultHeaderText);
            result.innerHTML = (resultText);

        } else {
            wordPositioning.innerHTML = ("Oh, no! That's not right.");
            penSound.play();
        }
        return scoreTally;
    }

    /**
    * Sets up a new game whilst retaining the score from previous games
    */
    function newGame() {
        if(catagory.length >=1) {
            letterCheck = [];
            shownWord = [];
            wrongAnswers = 10;
            selectedWord = catagory[Math.floor(Math.random() * catagory.length)];
            popUp.style.display = "none";

            ctx.clearRect(0, 0, canvas.width, canvas.height); // https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing

            wordPositioning.innerHTML = ("Let's go again, shall we?");

            for (i of alphButtons) {
                i.style.opacity = 1;
                i.disabled = false;
            };
            underscoreWord();
            console.log(selectedWord); // REMOVE AFTER TESTING
            hideReset();
        } else {
            resultHeaderText = "Wow!";
            resultText = "Great Job. <br> You have completed all the options in this catagory. If you wish to continue go to settings to pick another topic."

            resultHeader.innerHTML = (resultHeaderText);
            result.innerHTML = (resultText);
        }

    };

    /**
    * Disable all aphabet buttons on game completion so they can't impact score
    */
    function disableAllAlphaButtons() {
        for (i of alphButtons) {
            i.disabled = true;
        };
    };

    /**
    * Reactivate all catagory buttons to set up for next time setings is opened
    */
    function activateCatButtons() {
        for (i of catButtons) {
            i.style.opacity = 1;
            i.disabled = false;
        }
    };

    /**
    * Turns on or off all sound effects
    */
    function muteButton() {
        for (i of soundEffects) {
            if (i.muted == false) {
                i.muted = true
                toggleMute.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;

            } else {
                i.muted = false;
                toggleMute.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
            };
        };
    };

    /* Remove last word */
    function removeWord() {
        console.log(catagory);

        let remove = catagory.indexOf(selectedWord);
        catagory.splice(remove, 1);
        console.log(catagory);
        console.log(catagory.length)
    };




    /********* EVENT LISTENERS **********/
    
    /* toggle bar button event listener */
    toggleBar.addEventListener("click", function() {
        postIt.classList.toggle("select");
        rulesPostIt.className = "rules"; // added to remove post-it when rules shows.
        settingsPostIt.className = "settings";
    });

    /* Canvas-rezize on resize of window */
    window.addEventListener("resize", function() {
        canvas.width = canvasSize.clientWidth;
        canvas.height = canvasSize.clientHeight;
        hangmanDraw();
    });

    /* game buttons event listener */
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
                    if (this.id == "countries") {
                        catagory = countries;
                    } else if (this.id == "animals") {
                        catagory = animals;
                    } else {
                        catagory = cars;
                    }
                    checkCatagory();
                    activateCatButtons();
                    newGame();

                } else if (this.getAttribute("data-type") === "play-again") {
                    removeWord();
                    hideReset();
                    newGame();

                } else if (this.getAttribute("data-type") === "reset") {
                    window.location.reload();

                } else if (this.getAttribute("data-type") === "leaveRules") {
                    rulesPostIt.classList.toggle("open");
                    
                } else if (this.getAttribute("data-type") === "leaveSettings") {
                    settingsPostIt.classList.toggle("open");

                } else if (this.getAttribute("data-type") === "soundToggle") {
                    muteButton();   
                }
                
            })
        }
    });

    /* rules event listener */
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

    /* settings event listener */
    openSettings.addEventListener("click", function() { // MUST BE A BETTE WAY ASK MENTOR
        if (catagory == animals) {
            animalButton.style.opacity = 0.3;
            animalButton.disabled = true;
        } else if (catagory == cars) {
            carsButton.style.opacity = 0.3;
            carsButton.disabled = true;
        } else {
            countriesButton.style.opacity = 0.3;
            countriesButton.disabled = true;
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

    function hideReset() {
        const resetButtons = document.getElementById("reset-buttons")
    // IF CATAGORY ARRAY EQUALS 0
        if (catagory.length == 0) {
            resetButtons.style.display = "none";
        } else {
            resetButtons.style.display = "flex";
        };
    }


}()); 

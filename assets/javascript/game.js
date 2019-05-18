$(document).ready(function() {

var randomResult;
var win = 0;
var loss = 0;
var score = 0;


randomResult = parseInt(Math.floor(Math.random() * 101 ) + 19); // random # between 19-120
$("#randomNum").html(randomResult);
console.log(randomResult);
    // crystals value # between 1-12
var blue = parseInt(Math.floor(Math.random() * 12) + 1);
var green = parseInt(Math.floor(Math.random() * 12) + 1);
var purple = parseInt(Math.floor(Math.random() * 12) + 1);
var red = parseInt(Math.floor(Math.random() * 12) + 1);

function validateWin() { // losses/wins not displaying (broken....)
    if (score === randomResult) {
        win++;
        $("#win").html("win" + win);
    } else if (score > randomResult) {
        loss++;
        $("#loss").html("loss" + loss);
    }
};

    // crystals functions
$("#blue").on("click", function() {
    score = score + blue;
    $("#score").html(score);
    if (score == randomResult) {
        validateWin();
    } else if (score > randomResult) {
        validateWin();
    }
});
    $("#green").on("click", function() {
        score = score + green;
        $("#score").html(score);
        if (score == randomResult) {
            validateWin();
        } else if (score > randomResult) {
            validateWin();
        }
    });

    $("#purple").on("click", function() {
        score = score + purple;
        $("#score").html(score);
        if (score == randomResult) {
            validateWin();
        } else if (score > randomResult) {
            validateWin();
        }
    });

    $("#red").on("click", function() {
        score = score + red;
        $("#score").html(score);
        if (score == randomResult) {
            validateWin();
        } else if (score > randomResult) {
            validateWin();
        }
    });

    function gameOver () {
        score = 0; 
        $("#score").html(score);
        randomResult = parseInt(Math.floor(Math.random) * 101) + 19;
        $("#randomNum").html(randomResult);
    };

    
});





//Crystals have a new value for player to equal to. User's score resets



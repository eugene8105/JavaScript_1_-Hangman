
$(document).ready(function () {

    // sea creatures
    var theWords = ["fish", "shark", "octopus", "turtle", "whale"];
    var theWordIndex = 0;

    var theWordIndex = Math.floor(Math.random() * theWords.length);


    var numOfSquersToDisplay = theWords[theWordIndex].length;
    var displayedWord = theWords[theWordIndex];
    console.log(displayedWord);

    const totalRows = 1;
    const totalCols = numOfSquersToDisplay;

    var userInput = "";
    var numberOfWrong = 0;

    $("#userInput").click(function () {
        checkUserInput();
        $('input[type="text"]').val('');
    });

    createBoard();
    

    var numberOfLetters = [];
    

    function checkUserInput() {

        userInput = $("#theLetter").val().toLowerCase();

        var tempDisplayedWord = displayedWord.split('');
        console.log(tempDisplayedWord);
        
        numberOfLetters.length = displayedWord.length;

        if (displayedWord.includes(userInput)) {
            for (var i = 0; i < tempDisplayedWord.length; i++) {
                if (tempDisplayedWord[i] === userInput) {
                    numberOfLetters[i] = 1;
                } else {
                    numberOfLetters[i] = 0;
                }
            }
        }
        feelTheSquares();
    }
    // will feel the squares with user input if it's present
    function feelTheSquares(){
        for(var i = 0; i < numberOfLetters.length; i ++) {
            if(numberOfLetters[i] === 1){
                chosenSquare = $(".square").eq(i);
                chosenSquare.html(userInput);
                console.log(userInput);
            }
        }
        numberOfLetters = [];
    }
    var square;
    var chosenSquare;
    var rowOfSquares;

    function createBoard() {
        // How big can each square be?
        // Add 2 to allow for one square's worth of padding on either side
        var squareWidth = Math.round(window.innerWidth / (totalCols + 2));

        var squareHeight = Math.round(window.innerHeight / (totalRows + 2));

        // Choose the smaller of the two dimensions so both height and width
        // will fit in the viewport and still be a square
        var bestDimension = Math.min(squareWidth, squareHeight);

        // store the board div in a variable
        var gameBoardDiv = $("#board");

        // loop to print rows of squares
        for (var rowNum = 1; rowNum <= totalRows; rowNum++) {
            // Create a new row
            rowOfSquares = $("<div>");
            // give the row the class of "row" (for Bootstrap)
            rowOfSquares.addClass("row justify-content-center");
            // add the row to the gameboard
            gameBoardDiv.append(rowOfSquares);

            // loop to print the squares in each row
            for (var colNum = 1; colNum <= totalCols; colNum++) {
                // create an empty element to be a square on the board
                square = $("<span>");
                // give the square its row number as data
                square.data("row", rowNum);
                // give the square its column number as data
                square.data("col", colNum);
                // set the width and height of the square
                square.width(bestDimension);
                square.height(bestDimension);
                // give the square the class of "square" to make it inline-block
                square.addClass("square");
                // add the square to the current row
                rowOfSquares.append(square);
            }
        }
    }

});
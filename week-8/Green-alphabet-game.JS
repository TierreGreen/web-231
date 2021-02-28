/**
;Title: Green-alphabet-game.js Assignment 8.2
;Author: Richard Krasso
;Modified by: Tierre Green
;Date: February 28, 2021
;Description: Assignment 8.2 js script.
*/

/**
;Title: JavaScript Arrays
;Author: https://www.w3schools.com/js/js_arrays.asp
;Modified by: Tierre Green
;Date: February 28, 2021
;Description: javascript arrays, what is an array
*/
/**
;Title: JavaScript for/in statement
;Author: https://www.w3schools.com/jsref/jsref_forin.asp
;Modified by: Tierre Green
;Date: February 28, 2021
;Description: JavaScript for/in statement
*/

//onlcick event to produce results fo the letter position input by the user.
document.getElementById("btnFindLetter").onclick = function() {myFunction()};

//alphabet string variable alphabet
const alphabet = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//alpha output variable declaration
let alphabetOutput = "";

//declare variable for string location of letters
let alphaLocation;

//for/ in loop per assignment instructions.
for (alphaLocation in alphabet) {
    alphabetOutput += alphabet[alphaLocation] + ", ";
};

//binding alphabet to the div alphabet card.
document.getElementById("alphabet").innerHTML = alphabetOutput.slice(1, 78);

function myFunction() {

//binding the input value to variable pos.
    let pos = document.getElementById("txtPosition").value;

//letter variable declaration and position binding
    let letter = alphabet[pos];

//if condition to determine what the results should be
    if (letter == undefined) {
        document.getElementById("alphabet-letter").innerHTML = "There are not " + pos + " letters in the alphabet.";

//else if condition to result the 0 position result to display the same message as any number outside of 1-26.
    } else if (pos == 0) {

        document.getElementById("alphabet-letter").innerHTML = "There are not " + pos + " letters in the alphabet.";

//else condition to show results when the pos falls within the parameters of 1-26
    } else {
        document.getElementById("alphabet-letter").innerHTML = letter + " is at position " + pos + " in the alphabet.";
    };

};
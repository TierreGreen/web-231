/**
=============================================
; Title: Using onclick to create a dropdown button.
;Author: https://www.w3schools.com/jsref/event_onclick.asp
; Date: January 24, 2021
; Modified By: Tierre Green
; Description: onclick event
=============================================
*/

/**
 * random number upon page loading function.
 */

const rnd = Math.floor((Math.random() * 10) + 1);

/**
 * on page load call for random number
 */
 /**
 * onclick button function.
 */
document.getElementById("btnSubmit").onclick = function() {myFunction()};

function myFunction() {
    let myNumber = document.getElementById("txtMyNumber").value;
    let results;

    if (rnd < myNumber <= 10) {
        results = "The number is less than" + " " + myNumber;

    } else if (rnd > myNumber >= 1) {
        results = "The number is greater than" + " " + myNumber;
        
    } else if (myNumber === rnd) {
        results = "Congratulations! You picked the correct number!";

    } else {
        results = "Please pick a number between 1 and 10.";
    }

    document.getElementById("numResult").innerHTML = results;
};



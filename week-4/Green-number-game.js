/**
=============================================
; Title: Using onclick to create a dropdown button.
; Author: https://www.w3schools.com/jsref/event_onclick.asp
; Date: January 31, 2021
; Modified By: Tierre Green
; Description: onclick event
=============================================
*/

/**
=============================================
; Title: Assignment 4.2 Number Guessing Game
; Author: Professor Richard Krasso
; Date: January 31, 2021
; Modified By: Tierre Green
; Description: random number javascript
=============================================
*/

/**
  * random number upon page loading function.
 */
const rnd = Math.floor((Math.random() * 10) + 1);

 /**
  * onclick button function.
 */
document.getElementById("btnSubmit").onclick = function() {myFunction()};

function myFunction() {

//myNumber variable bound to the txtMyNumber element.
    let myNumber = document.getElementById("txtMyNumber").value;

//declared results as a variable.    
    let results;

/**
 * Condition when myNumber is less than the random number;
 * limits the condition to numbers less than or equal to 10;
 * the resulting string.
*/
    if (myNumber > rnd && myNumber <= 10) {
        results = "The number is less than" + " " + myNumber;

/**
 * Condition when myNumber is greater than the random number;
 * limits the condition to numbers greater than or equal to 1;
 * the resulting string.
*/
    } else if (myNumber < rnd && myNumber >= 1) {
        results = "The number is greater than" + " " + myNumber;
        
/**
 * condition for when myNumber is equal to the random number;
 * the resulting string.
*/        
    } else if (myNumber == rnd) {
        results = "Congratulations! You picked the correct number!";

//resulting documentation for all other conditions.
    } else {
        results = "Please pick a number between 1 and 10.";
    } 

/**script returning the resulting string
 * based on current input and random number conditions.
 */
    document.getElementById("numResult").innerHTML = results;
};



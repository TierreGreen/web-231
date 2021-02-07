/**
;Title: Green-sequence-game.js Assignment 5.2
;Author: Tierre Green
;Date: February 5, 2021
;Description: Assignment 5.2 js script.
*/

/**
;Title: Print out only even numbers
;Author: Walter Purvis
;Modified by: Tierre Green
;Date: February 5, 2021
;Description: how to produce even numbers using console log.
*/

/**
;Title: JavaScript While Loop
;Author: https://www.w3schools.com/js/js_loop_while.asp
;Modified by: Tierre Green
;Date: February 5, 2021
;Description: javascript while loop.
*/

/**
;Tips from networking group
;Author: Terrill Edwards
;Modified: Tierre Green
;Date: February 6, 2021
;Description: was given some tips to query my function 
;using console log as opposed to just using choice variable.
*/


// onclick function call for button submission
document.getElementById("btnDisplaySequence").onclick = function() {myFunction()};


//function for results of selected choice
function myFunction() {

// declaration of choice variable anchored to sequence drop down list.
    let choice = document.getElementById("sequenceddl");

//results declaration
    let results = "";

//choice console log to query.
    console.log("choice log", choice);

//declaring lookup as choice variable from options element selected value picked by user interaction
    let lookup = choice.options[choice.selectedIndex].value;

//lookup console log to query.
    console.log("lookup log", lookup)

//if statement for odd numbers under 20 via query
    if (lookup == "odd") {

    //for statement declaring i and setting parameters for adding numbers up to 20.
        for (let i = 0; i < 20; i++) {

        //if statement creating the skip a number result. 
            if(i % 2 != 0) {

            //if statement setting results parameter for under 19.
                if (i < 19) {

                    results += i + ", ";

            //else statement setting all other results to not include comma.
                } else {

                results += i;

                }
            }
        }
    /**results bound to seqResults div to show resulting numbers. 
     * moved inside of overall function because of fibonacci bind being 
     * diff from typical results.
     */
        document.getElementById("seqResults").innerHTML = results;

//if statement for odd numbers under 20 via query.
    } else if (lookup == "even") {

    //for statement declaring i and setting parameters for adding numbers 2 up to 20.
        for (let i = 2; i < 20; i++) {

        //if statement creating the skip a number result. 
           if (i % 2 == 0) {

            //if statement setting results parameter for under 18.    
                if (i < 18) {

                    results += i + ", ";

            //else statement setting all other results to not include comma.
                } else {

                    results += i;
                }
            }
        }

    /**results bound to seqResults div to show resulting numbers. 
     * moved inside of overall function because of fibonacci bind being 
     * diff from typical results.
     */
        document.getElementById("seqResults").innerHTML = results;

//else if fibonacci query to produce fibonacci numbers.
    } else if (lookup == "fibonacci") {
     
    //declaring variable num1, num2, fibonacciSequenceText, and next
        let num1 = 0;

        let num2 = 1;

        let next;

        let fibonacciSequenceText = "";

    //while statement to produce fibonacci numbers under 40.
        while (num1 < 40) {

            //redefining fibonacci sequence with numbers and comma.
                fibonacciSequenceText += num1 + ", ";

            //defining next number added as num1 + num2 up to 40.
                next = num1 + num2;

            //establishing num2 as new num1
                num1 = num2;

            //establishing next as new num2
                num2 = next;
               
        }

    //binding fibonacciSequenceText to seqResults div and removing last comma and space per assignment. 
        document.getElementById("seqResults").innerHTML = fibonacciSequenceText.slice(0, -2);
 
//else statement creating alert when submission happens without changing from default select option.
    } else {

        alert("Invalid selection, please try again!");

    } 
}
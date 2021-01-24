 /**
============================================
; Title: Input get the value of a text field
; Author: https://www.w3schools.com/jsref/jsref_tofixed.asp
; Date: 10 January 2021
; Modified By: Tierre Green
; Description: fixed decimal point js from w3schools.com
;============================================
 */

 /**
; Title: Using onclick to create a dropdown button.
;Author: https://www.w3schools.com/jsref/event_onclick.asp
; Date: January 24, 2021
  */

 /**
  * function to call results of formula which converts fahrenheit to celsius.
  */

/**
 * onclick button function.
 */
document.getElementById("convert-btn").onclick = function() {myFunction()};

/**
 * function establishing conversion formula.
 */

function myFunction() {

/**declaration of fahrenheit variable. */
    let fahrenheit = document.getElementById("txtFahrenheit").value;

/**declaration of formula variable. */

    const conversion = ((parseFloat(fahrenheit) - 32) / 1.8).toFixed(2);

/**Final Calculation. */

    document.getElementById("convert-content").innerHTML = conversion;
}


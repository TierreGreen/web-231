/*
============================================
; Title:  Green-exercise2.js
; Author: Tierre Green
; Date:  17 January 2021
; Description: Displays message to the console window
;===========================================
*/

/**
============================================
; Title: JavaScript toLocaleString() Method
; Author: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
; Date: 10 January 2021
; Modified By: Tierre Green
; Description: Locale date js from w3schools.com
;===========================================
 */

 /**
============================================
; Title: JavaScript toFixed() Method
; Author: https://www.w3schools.com/jsref/jsref_tofixed.asp
; Date: 10 January 2021
; Modified By: Tierre Green
; Description: fixed decimal point js from w3schools.com
;===========================================
 */

 /**
  * Employee 1 variables declared and created to bind each data set
  * to it's individual list item ids' innerHTML.
  */

let firstName1 = "Ludwig";
let lastName1 = "Beethoven";
let address1 = "505 main street";
let hireDate1 = new Date();
let locale1 = hireDate1.toLocaleDateString();  
let payRate1 = 18.9;
let fixed1 = payRate1.toFixed(1);

/**
 * calling bound documents to listed items for execution for employee 1.
*/

document.getElementById("txtFirstNameLud").innerHTML = firstName1;
document.getElementById("txtLastNameBeet").innerHTML = lastName1;
document.getElementById("txtAddressLud").innerHTML = address1;
document.getElementById("txtHireDateLud").innerHTML = locale1;
document.getElementById("txtPayRateLud").innerHTML = fixed1;

/**
  * Employee 2 variables declared and created to bind each data set
  * to it's individual list item ids' innerHTML.
  */

 let firstName2 = "Johann";
 let lastName2 = "Bach";
 let address2 = "512 main street";
 let hireDate2 = new Date();
 let locale2 = hireDate2.toLocaleDateString();  
 let payRate2 = 25.5;
 let fixed2 = payRate2.toFixed(1);

 /**
 * Calling bound documents to listed items for execution for employee 2.
*/
 
 document.getElementById("txtFirstNameJoh").innerHTML = firstName2;
 document.getElementById("txtLastNameBach").innerHTML = lastName2;
 document.getElementById("txtAddressJoh").innerHTML = address2;
 document.getElementById("txtHireDateJoh").innerHTML = locale2;
 document.getElementById("txtPayRateJoh").innerHTML = fixed2;

 /**
  * Employee 2 variables declared and created to bind each data set
  * to it's individual list item ids' innerHTML.
  */

 let firstName3 = "Wolfgang";
 let lastName3 = "Mozart";
 let address3 = "600 main street";
 let hireDate3 = new Date();
 let locale3 = hireDate3.toLocaleDateString();  
 let payRate3 = 50.1;
 let fixed3 = payRate3.toFixed(1);

 /**
 * Calling bound documents to listed items for execution for employee 2.
*/
 
 document.getElementById("txtFirstNameWol").innerHTML = firstName3;
 document.getElementById("txtLastNameMoza").innerHTML = lastName3;
 document.getElementById("txtAddressWol").innerHTML = address3;
 document.getElementById("txtHireDateWol").innerHTML = locale3;
 document.getElementById("txtPayRateWol").innerHTML = fixed3;
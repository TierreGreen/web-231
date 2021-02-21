/**
;Title: Green-javazon.js Assignment 7.2
;Author: Richard Krasso
;Modified by: Tierre Green
;Date: February 19, 2021
;Description: Assignment 7.2 js script.
*/

/**
 ;Title: calculated from other properties in same class
 ; 
 ; Author: https://stackoverflow.com/questions/10282650/property-of-a-javascript-class-calculated-from-other-properties-in-same-class
 ; Modified by: Tierre Green
 ; Date February 21, 2021
 ; Description: creating calculation for total value
 */

 /**
;Title: javaScript Classes
;Author: https://www.w3schools.com/js/js_classes.asp
;Modified by: Tierre Green
;Date: February 20, 2021
;Description: Assignment 7.2 js script classes from w3schools.com.
*/

//onclick function call for button submission
document.getElementById("btnDisplayListing").onclick = function() {myFunction()};

//declaration of products anchoring the products selection and setting it to none onload.
let products = document.getElementById("productsSelect");
document.getElementById("productsSelect").style.display = "none";

//declaration of services anchoring the services selection and setting it to none onload.
let services = document.getElementById("servicesSelect");
document.getElementById("servicesSelect").style.display = "none";

//declaration of employees anchoring the employees selection and setting it to none onload.
let employees = document.getElementById("employeesSelect");
document.getElementById("employeesSelect").style.display = "none";

//function for results for user selection and display button action
function myFunction() {

//Declaration of choice variable for anchoring to the drop down selections.
    let choice = document.getElementById("listing").value;

//if condition showing the products listing and setting all other options to none.
    if (choice == "products") {
        products.style.display = "block";
        services.style.display = "none";
        employees.style.display = "none";

    //if else condition showing the services listing card and setting all others to none. 
    } else if (choice == "services") {
        products.style.display = "none";
        services.style.display = "block";
        employees.style.display = "none"

    //if else condition showing the employees listing card and setting all others to none.
    } else if (choice == "employees") {
        products.style.display = "none";
        services.style.display = "none";
        employees.style.display = "block";

    //else condition setting all to none if --select-- is the option selected.
    } else {
        products.style.display = "none";
        services.style.display = "none";
        employees.style.display = "none";
    }
};

// product class with total value calculation
class Product {
    constructor(id, description, price, quantity) {
        this.id = id;
        this.description = description;
        this.price = price.toFixed(2);
        this.quantity = quantity;
    }

//total value calculation.
    get totalValue () {
        return this.price * this.quantity;
    }
      
};

// service class creation
class Service {
    constructor(id, description, hourlyRate, min) {
        this.id = id;
        this.description = description;
        this.hourlyRate = hourlyRate.toFixed(2);
        this.min = min;
    }
};

//employee class creation
class Employee {
    constructor(id, lastName, firstName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary.toFixed(2)
    }
}

//html product for input into table
const htmlProduct = new Product (9781118008188, "HTML and CSS: Design and Build Websites", 22.26, 10);

document.getElementById("txtHtmlCssID").innerHTML = htmlProduct.id;
document.getElementById("txtHtmlCssDescription").innerHTML = htmlProduct.description;
document.getElementById("txtHtmlCssPrice").innerHTML = htmlProduct.price;
document.getElementById("txtHtmlCssQuantity").innerHTML = htmlProduct.quantity;
document.getElementById("txtHtmlCssTV").innerHTML = htmlProduct.totalValue.toFixed(2);

//js guide product for input into table
const jsProduct = new Product (9781491952023, "JavaScript: The Definitive Guide 7/E", 41.33, 7);

document.getElementById("txtJSGuideID").innerHTML = jsProduct.id;
document.getElementById("txtJSGuideDescription").innerHTML = jsProduct.description;
document.getElementById("txtJSGuidePrice").innerHTML = jsProduct.price;
document.getElementById("txtJSGuideQuantity").innerHTML = jsProduct.quantity;
document.getElementById("txtJSGuideTV").innerHTML = jsProduct.totalValue.toFixed(2);

//learning js product input into table
const jsLearnProduct = new Product (9781449331818, "Learning JavaScript Design Patterns 1/E", 25.99, 3);

document.getElementById("txtLearnJSDesignID").innerHTML = jsLearnProduct.id;
document.getElementById("txtLearnJSDesignDescription").innerHTML = jsLearnProduct.description;
document.getElementById("txtLearnJSDesignPrice").innerHTML = jsLearnProduct.price;
document.getElementById("txtLearnJSDesignQuantity").innerHTML = jsLearnProduct.quantity;
document.getElementById("txtLearnJSDesignTV").innerHTML = jsLearnProduct.totalValue.toFixed(2);

//express product input into table
const expressProduct = new Product (9781617292422, "Express in Action: Writing, building, and testing Node.js applications 1/E", 34.91, 3);

document.getElementById("txtExpressID").innerHTML = expressProduct.id;
document.getElementById("txtExpressDescription").innerHTML = expressProduct.description;
document.getElementById("txtExpressPrice").innerHTML = expressProduct.price;
document.getElementById("txtExpressQuantity").innerHTML = expressProduct.quantity;
document.getElementById("txtExpressTV").innerHTML = expressProduct.totalValue.toFixed(2);

//express product input into table
const mongoProduct = new Product (9781491954461, "MongoDB The Definitive Guide", 33.7, 8);

document.getElementById("txtMongoID").innerHTML = mongoProduct.id;
document.getElementById("txtMongoDescription").innerHTML = mongoProduct.description;
document.getElementById("txtMongoPrice").innerHTML = mongoProduct.price;
document.getElementById("txtMongoQuantity").innerHTML = mongoProduct.quantity;
document.getElementById("txtMongoTV").innerHTML = mongoProduct.totalValue.toFixed(2);

//javazon services input into table website service
const webService = new Service (100, "Website Design", 150, 25);

document.getElementById("txt100ID").innerHTML = webService.id;
document.getElementById("txt100Description").innerHTML = webService.description;
document.getElementById("txt100HR").innerHTML = webService.hourlyRate;
document.getElementById("txt100MBH").innerHTML = webService.min;

//javazon services input into table devops consulting
const devOpsService = new Service (101, "DevOps Consulting", 125, 50);

document.getElementById("txt101ID").innerHTML = devOpsService.id;
document.getElementById("txt101Description").innerHTML = devOpsService.description;
document.getElementById("txt101HR").innerHTML = devOpsService.hourlyRate;
document.getElementById("txt101MBH").innerHTML = devOpsService.min;

//javazon services input into table Database design consulting
const databaseService = new Service (102, "Database Design", 125, 15);

document.getElementById("txt102ID").innerHTML = databaseService.id;
document.getElementById("txt102Description").innerHTML = databaseService.description;
document.getElementById("txt102HR").innerHTML = databaseService.hourlyRate;
document.getElementById("txt102MBH").innerHTML = databaseService.min;

//javazon employees input into the table employee 1007
const beetEmployee = new Employee (1007, "Beethoven", "Ludwig", 13.99);

document.getElementById("txtBeetID").innerHTML = beetEmployee.id;
document.getElementById("txtBeetLastName").innerHTML = beetEmployee.lastName;
document.getElementById("txtBeetFirstName").innerHTML = beetEmployee.firstName;
document.getElementById("txtBeetSalary").innerHTML = beetEmployee.salary;

//javazon employees input into the table employee 1008
const bachEmployee = new Employee (1008, "Bach", "Johann", 22.30);

document.getElementById("txtBachID").innerHTML = bachEmployee.id;
document.getElementById("txtBachLastName").innerHTML = bachEmployee.lastName;
document.getElementById("txtBachFirstName").innerHTML = bachEmployee.firstName;
document.getElementById("txtBachSalary").innerHTML = bachEmployee.salary;

//javazon employees input into the table employee 1009
const mozaEmployee = new Employee (1009, "Mozart", "Wolfgang", 19.50);

document.getElementById("txtMozaID").innerHTML = mozaEmployee.id;
document.getElementById("txtMozaLastName").innerHTML = mozaEmployee.lastName;
document.getElementById("txtMozaFirstName").innerHTML = mozaEmployee.firstName;
document.getElementById("txtMozaSalary").innerHTML = mozaEmployee.salary;

//javazon employees input into the table employee 1010
const brahEmployee = new Employee (1010, "Brahms", "Johannes", 12);

document.getElementById("txtBrahID").innerHTML =brahEmployee.id;
document.getElementById("txtBrahLastName").innerHTML = brahEmployee.lastName;
document.getElementById("txtBrahFirstName").innerHTML = brahEmployee.firstName;
document.getElementById("txtBrahSalary").innerHTML = brahEmployee.salary;

//javazon employees input into the table employee
const haydEmployee = new Employee (1011, "Haydn", "Joseph", 32.50);

document.getElementById("txtHaydID").innerHTML = haydEmployee.id;
document.getElementById("txtHaydLastName").innerHTML = haydEmployee.lastName;
document.getElementById("txtHaydFirstName").innerHTML = haydEmployee.firstName;
document.getElementById("txtHaydSalary").innerHTML = haydEmployee.salary;
/**
;Title: Green-in-n-out-books.js Assignment 6.2
;Author: Richard Krasso
;Modified by: Tierre Green
;Date: February 14, 2021
;Description: Assignment 6.2 js script.
*/

/**
;Title: Real Life Objects, Properties, and Methods
;Author: https://www.w3schools.com/js/js_objects.asp
;Modified by: Tierre Green
;Date: February 14, 2021
;Description: objects examples from w3schools.com
*/

// onclick function call for button submission
document.getElementById("btnDisplayListing").onclick = function() {myFunction()};

//declaration of favorite books anchoring the books variable to favorite books selection and setting the display to automatically be none.
let books = document.getElementById("favBooks");
document.getElementById("favBooks").style.display = "none";

//declaration of favorite authors anchoring the authors variable to favorite authors div selection and setting the display to automatically be none.
let authors = document.getElementById("favAuthors");
document.getElementById("favAuthors").style.display = "none";

//function for results of user selection and display button action.
function myFunction() {

//declaration of choice variable anchored to the drop down selections.
  let choice = document.getElementById("favoriteList").value;

//if condition for books and showing book results.
  if (choice == "books") {
    books.style.display = "block";
    authors.style.display = "none";

//else if statement establishing authors and showing the results for them.
  } else if (choice == "authors") {
    authors.style.display = "block";
    books.style.display = "none";

//else statement establishing all other provisions to not display anything.
  } else {
    authors.style.display = "none";
    books.style.display = "none";
  }
};

//JSON setup for the favorite books and favorite authors with all of their titles, isbns, page amounts, names and genre.

//favorite book Assassin's Apprentice and its stats
  const bookAssassin = {
    isbn: "978-1984817853",
    title: "Assassin's Apprentice",
    pages: "464",
  }
  //favorite book Talon of god and its stats
  const bookTalon = {
    isbn: "978-0062668165",
    title: "Talon of God",
    pages: "368",
  }
  //favorite book the Hobbit and its stats
  const bookHobbit = {
    isbn: "978-0547928227",
    title: "The Hobbit",
    pages: "300",
  }
//favorite Author with name and genre (Robin Hobb)
  const authorRobin = {
    name: "Robin Hobb",
    genre: "Arthurian Fantasy",
  }
//favorite Author with name and genre (Wesley Snipes)
  const authorWesley = {
    name: "Wesley Snipes",
    genre: "Science Fiction & Fantasy",
  }
//favorite Author with name and genre (JRR Tolkien)
  const authorJRR = {
    name: "J.R.R. Tolkien",
    genre: "Classic Literature",
  };

// anchoring all json object literals to the html tables for Assassins Apprentice.
document.getElementById("txtAssassinsApprenticeISBN").innerHTML = bookAssassin.isbn;

document.getElementById("txtAssassinsApprenticeTitle").innerHTML = bookAssassin.title;

document.getElementById("txtAssassinsApprenticePages").innerHTML = bookAssassin.pages;

// anchoring all json object literals to the html tables for Talon of God.
document.getElementById("txtTalonOfGodISBN").innerHTML = bookTalon.isbn;

document.getElementById("txtTalonOfGodTitle").innerHTML = bookTalon.title;

document.getElementById("txtTalonOfGodPages").innerHTML = bookTalon.pages;

// anchoring all json object literals to the html tables for the hobbit.
document.getElementById("txtTheHobbitISBN").innerHTML = bookHobbit.isbn;

document.getElementById("txtTheHobbitTitle").innerHTML = bookHobbit.title;

document.getElementById("txtTheHobbitPages").innerHTML = bookHobbit.pages;

//anchoring all json object literals to the html table for favorite authors starting with Robin Hobb
document.getElementById("txtRobinHobbName").innerHTML = authorRobin.name;

document.getElementById("txtRobinHobbGenre").innerHTML = authorRobin.genre;

//anchoring all json object literals to the html table for favorite author wesley snipes.
document.getElementById("txtWesleySnipesName").innerHTML = authorWesley.name;

document.getElementById("txtWesleySnipesGenre").innerHTML = authorWesley.genre;

//anchoring all json object literals to the html table for favorite author JRR Tolkien.
document.getElementById("txtJRRTolkienName").innerHTML = authorJRR.name;

document.getElementById("txtJRRTolkienGenre").innerHTML = authorJRR.genre;



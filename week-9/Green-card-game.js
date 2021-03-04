/**
;Title: Green-card-game.js Assignment 9.2
;Author: Richard Krasso
;Modified by: Tierre Green
;Date: March 3, 2021
;Description: Assignment 9.2 js project script.
*/

//onclick event to allow button to execute action by dealer.
document.getElementById("btnDealCards").onclick = function() {getDeckOfCards()};

class Card {
    constructor(faces, suits) {
        this.faces = faces;
        this.suits = suits;
    }
}

class Dealer {
    constructor() {

    //creating a card count variable for the 52 cards in the deck.
        let CARD_COUNT = 52;

    //creating variable for cares with empty array
        let cards = [];

    //card deck faces array
        const faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    //suits variabel with all suits Array
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    //get deck of cards function
        function getDeckOfCards() {

        //for loop with 52 iterations. 
            for (let count = 0; count < this.CARD_COUNT.length; count++) {
                this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
            }
        }

    //shuffle function to shuffle the 52 cards
        function shuffle() {
            let firstCard, secondCard, tempCard;
            for (let count = 0; count < this.CARD_COUNT.length; count++) {
                firstCard = Math.floor(Math.random() * this.CARD_COUNT.length);
                secondCard = Math.floor(Math.random() * this.CARD_COUNT.length)
                tempCard = this.cards[firstCard];
                this.cards[firstCard] = this.cards[secondCard];
                this.cards[secondCard] = tempCard
            }

        }
    } 
}


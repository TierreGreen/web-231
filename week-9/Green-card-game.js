/**
;Title: Green-card-game.js Assignment 9.2
;Author: Richard Krasso
;Modified by: Tierre Green
;Date: March 3, 2021
;Description: Assignment 9.2 js project script.
*/


//creating card class object
class Card {
    constructor(faces, suits) {
        this.faces = faces;
        this.suits = suits;
    }
}

//creating dealer class object.
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

            var deck = new Array();


        //for loop with 52 iterations. 
            for (let count = 0; count < this.CARD_COUNT; count++) {

                this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);

                deck.push(Card);
            }
            console.log(`created a deck of ${deck.length}`);
            console.log(deck);

            return deck;
        }

    //shuffle function to shuffle the 52 cards
        function shuffle() {
            let firstCard, secondCard, tempCard;
            
            for (let count = 0; count < this.CARD_COUNT; count++) {
                firstCard = Math.floor((Math.random() * this.CARD_COUNT.length));
                secondCard = Math.floor((Math.random() * this.CARD_COUNT.length));
                tempCard = this.cards[firstCard];
                this.cards[firstCard] = this.cards[secondCard];
                this.cards[secondCard] = tempCard;
            }

        }

        function buildPlayingCard(card, suitIcon, faceColor, suitColor) {

            return `<div class="card player-card">
                        <div class="card-title" style="text-align:left; font-size:20px; padding-left:10px; color:${faceColor};"></div>
                        <span class="${suitIcon}" style="color:${suitColor}>
                            <div class="card-content" style="font-size:28px; padding-bottom:25px"></div>
                        </span>
                    </div>`
        }

        function cardOutput() {

            let cardOutPutWithIcon = "";

            for (i=0; i < CARD_COUNT; i++) {
                for (suits of cards[i]) {

                    let suit;
                    switch(suit) {

                    case "hearts":
                        
                        cardOutputWithIcon += buildPlayingCard('card', "mdi mdi-heart", "red", "red");
                    break;

                    case "diamonds":
                        cardOutputWithIcon += buildPlayingCard('card', "mdi mdi-cards-diamond", "red", "red");
                    break;

                    case "clubs":
                        cardOutputWithIcon += buildPlayingCard('card', "mdi mdi-cards-club", "black", "black");
                    break;

                    case "spades":
                        cardOutputWithIcon += buildPlayingCard('card', "mdi mdi-cards-spade", "black", "black");
                    }
                }

                document.getElementById("player-cards").innerHTML = cardOutputWithIcon; 

                }

            }

           function load () {
                cards = getDeckOfCards();
                shuffle()
            }
        }
    }

            //onclick event to allow button to execute action by dealer.
            document.getElementById("btnDealCards").onclick = function() {shuffle()};
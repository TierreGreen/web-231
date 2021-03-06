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
    this.getDeckOfCards();

    }
    //creating a card count variable for the 52 cards in the deck.
    CARD_COUNT = 52;

    //creating variable for cares with empty array
    cards = [];

    //card deck faces array
    faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    //suits variabel with all suits Array
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    //get deck of cards function
    getDeckOfCards() {


        //for loop with 52 iterations.
        for (let count = 0; count < this.CARD_COUNT; count++) {

            this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
        }
    }

    //shuffle function to shuffle the 52 cards
    shuffle() {
        let secondCard, tempCard;

        for (let firstCard = 0; firstCard < this.CARD_COUNT; firstCard++) {
            secondCard = Math.floor((Math.random() * this.CARD_COUNT));
            tempCard = this.cards[firstCard];
            this.cards[firstCard] = this.cards[secondCard];
            this.cards[secondCard] = tempCard
;
        }
        this.cardOutput();
    }

    buildPlayingCard(card, suitIcon, faceColor, suitColor) {

        return `<div class="card player-card">
                    <div class="card-title" style="text-align:left; font-size:20px; padding-left:10px; color:${faceColor};">
                    ${card.faces}
                       
                     </div>
                     <div class="card-content" style="font-size:28px; padding-bottom:25px">
                       
                            <span class="${suitIcon}" style="color:${suitColor}">
                            </span>
                    </div>
                </div>`
    }

    cardOutput() {

        let cardOutPutWithIcon = "";
        this.cards.forEach((card) =>{
            console.log('card log', card);
            switch(card.suits) {

                case "Hearts":

                    cardOutPutWithIcon += this.buildPlayingCard('card', "mdi mdi-cards-heart", "red", "red");
                    break;

                case "Diamonds":
                    cardOutPutWithIcon += this.buildPlayingCard('card', "mdi mdi-cards-diamond", "red", "red");
                    break;

                case "Clubs":
                    cardOutPutWithIcon += this.buildPlayingCard('card', "mdi mdi-cards-club", "black", "black");
                    break;

                case "Spades":
                    cardOutPutWithIcon += this.buildPlayingCard('card', "mdi mdi-cards-spade", "black", "black");
            }
        });
            document.getElementById("player-cards").innerHTML = cardOutPutWithIcon;



    }


}

//onclick event to allow button to execute action by dealer.
document.getElementById("btnDealCards").onclick = function() {
    console.log('click hit');
    new Dealer().shuffle()
};
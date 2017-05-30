/*jslint node: true */
'use strict';

class Card {
    constructor(value, suit){
        this.value = value;
        this.suit= suit;
    }

    getValue(){
        return this.value;
    }

    getSuit(){
        return this.suit;
    }

    toString(){
        var name = "";
        if(this.value>=11){
            switch(this.value){
                case 11:
                    name = "Jack";
                    break;
                case 12:
                    name = "Queen";
                    break;
                case 13:
                    name = "King";
                    break;
                case 14:
                    name = "Ace";
                    break;
                             }
        }else{
            name += this.value;
        }
        name += " of ";
        switch(this.suit){
            case 1:
                name += "Spades";
                break;
            case 2:
                name += "Diamonds";
                break;
            case 3:
                name += "Hearts";
                break;
            case 4:
                name += "Clubs";
                break;
                        }
        return name;
    }
}

class Deck{
    constructor (){
        this.allMyCards = this.makeDeck();
        this.suffleDeck(2);
    }

    makeDeck(){
        let deck = [];
        for(let value = 2; value <= 14; value++){
            for(let suit = 1; suit <= 4; suit++ ){
                deck.push(new Card(value, suit));
            }
        } return deck;  
    }

    suffleDeck(n){
        let i, j, k;
        let temp;
        // Shuffle the stack 'n' times.
        for (i = 0; i < n; i++)
            for (j = 0; j < this.allMyCards.length; j++) {
                k = Math.floor(Math.random() * this.allMyCards.length);
                temp = this.allMyCards[j];
                this.allMyCards[j] = this.allMyCards[k];
                this.allMyCards[k] = temp;
            }
    }
    dealCard(){
        if(this.allMyCards.length !== 0) {
            return this.allMyCards.pop();
        } else {
            this.allMyCards = this.makeDeck();
            this.suffleDeck(2);
            return this.allMyCards.pop();
        }
    }
}

class Blackjack {
    constructor (){
        this.deck = new Deck();
        this.player = [];
        this.dealer = [];
    } 
    //    makeBet(){
    //        var bet = prompt("Please make your bet: ", "");
    //        return bet;
    //    } 

    dealCards(){
        this.player.push(this.deck.dealCard());
        this.player.push(this.deck.dealCard());
        this.dealer.push(this.deck.dealCard());
        this.dealer.push(this.deck.dealCard());
    }
    
    hit(){
        this.player.push(this.deck.dealCard());
    }
    
    score (){
        var scorePlayer = 0;
    for(var i = 0; i<this.player.length; i++){
        if(this.player[i].getValue()>=11){
            scorePlayer += 10;
        }else{
            scorePlayer += this.player[i].getValue();
        }
    }
    
    var scoreDealer = 0;
    for(var i = 0; i<this.dealer.length; i++){
        if(this.dealer[i].getValue()>=11){
            scoreDealer += 10;
        }else{
            scoreDealer += this.dealer[i].getValue();
        }
    }
    document.getElementById("player score").innerHTML = scorePlayer;
    document.getElementById("dealer score").innerHTML = scoreDealer;
}


//    makeHitOrStay(){}
//
//    dealerPlay(){}
//
//    compareHands(){} 
}

var game = new Blackjack();

function playAgain(){
    game = new Blackjack();
    game.dealCards();
    var stringPlayer="";
    for(var i = 0; i<2; i++){
        stringPlayer += game.player[i].toString() + "<br>";
    }
    var stringDealer="";
    for(var i = 0; i<2; i++){
        stringDealer += game.dealer[i].toString() + "<br>";
    }
    
    game.score();

    document.getElementById("player card").innerHTML = stringPlayer;
    document.getElementById("dealer card").innerHTML = stringDealer;

}


function hit(){
    game.hit();
    var stringPlayer = game.player[game.player.length-1].toString() + "<br>";
    game.score();
    document.getElementById("player card").innerHTML += stringPlayer;
}

function stand(){}

//var myDeck = new Deck();

//var myBlackjack = new Blackjack();
//myBlackjack.makeBet();
//console.log(myDeck.makeDeck());

//console.log(myDeck.suffleDeck(2));
//console.log(myDeck.allMyCards);
//for(let i = 0; i < 53; i++){
//    myDeck.dealCard();
//let n = myDeck.allMyCards.length;
//console.log(n);
//}
//console.log(myDeck.dealCard())
//var n = myDeck.allMyCards.length;
//console.log(n);
//console.log(myDeck);
//console.log("hello it is late");
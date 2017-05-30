/*jslint jasmine: true */
'use strict';

describe("Card", function(){

    beforeEach(function(){

    });

    describe("Card Constructor", function(){
        let card = new Card(2, 1);

        it("Sets value = 2", function(){
            expect(card.getValue()).toEqual(2);
        });

        it("Sets suit = 1", function(){
            expect(card.getSuit()).toEqual(1);
        });

        it("Outputs 2 of Spades", function(){
            expect(card.toString()).toEqual("2 of Spades")
        });
    });
});


describe("Deck", function(){

    describe("Deck Constructor", function(){
        let myDeck = new Deck();    

        it("Number of cards in a deck is 52", function(){
            expect(myDeck.allMyCards.length).toEqual(52);
        });

        it("One deal will leave 51 cards in the deck", function(){
            myDeck.dealCard();
            expect(myDeck.allMyCards.length).toEqual(51);
        });

        it("Two deals will leave 50 cards in the deck", function(){
            let myDeck = new Deck();
            myDeck.dealCard();
            myDeck.dealCard();
            expect(myDeck.allMyCards.length).toEqual(50);
        });

        it("51 cards will remain after deal from a new deck", function(){
            myDeck.allMyCards = [];
            myDeck.dealCard();
            expect(myDeck.allMyCards.length).toEqual(51);
        });

    });

});

describe("Blackjack", function(){

    describe("Blackjack Constructor", function(){
        let myBlackjack = new Blackjack();
        myBlackjack.dealCards();

        it("Player has two cards after initial deal", function(){
            expect(myBlackjack.player.length).toEqual(2);
        });

        it("Dealer has two cards after initial deal", function(){
            expect(myBlackjack.dealer.length).toEqual(2);
        });

        it("Player has three cards after a hit", function(){
            myBlackjack.hit();
            expect(myBlackjack.player.length).toEqual(3);
        });
    });

});



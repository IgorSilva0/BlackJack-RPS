import './game.css';
import React, { useState, useEffect } from 'react';
import firstDrawn from '../../util/firstDrawn.jsx';
import Buttons from '../buttons/buttons.jsx';

// Game component definition
const Game = ({ propsObj }) => {
    // State variables initialization
    const [dealerHand, setDealerHand] = useState([]); // Dealer's hand
    const [playerHand, setPlayerHand] = useState([]); // Player's hand
    const [dealerNewCard, setDealerNewCard] = useState(null); // Dealer's new card
    const [buttons, setButtons] = useState(false); // Button visibility control
    const [gameOver, setGameOver] = useState(false); // Game over status
    const [playerBust, setPlayerBust] = useState(false); // Player's bust status

    // Function to initialize the game
    const initialDraw = () => {
        const initialCards = firstDrawn(propsObj.sixDecks); // Initial cards drawn
        setDealerHand([initialCards.card2]); // Set dealer's hand
        setPlayerHand([initialCards.card1, initialCards.card3]); // Set player's hand
        setDealerNewCard(initialCards.card4); // Set dealer's new card
        setButtons(true); // Show game buttons
        setGameOver(false); // Reset game over status
    };

    // Effect hook to initialize the game when component mounts
    useEffect(() => {
        initialDraw();
    }, []);

    // Function to handle player hitting
    const handleHit = () => {
        // Allow hitting only if game is not over, player has not busted, and deck is not empty
        if (!gameOver && !playerBust && propsObj.sixDecks.cards.length > 0) {
            const newCard = propsObj.sixDecks.cards.shift(); // Draw a new card from the deck
            setPlayerHand(prevHand => [...prevHand, `/imgs/cards/${newCard.value + newCard.suit}.png`]); // Update player's hand
            checkPlayerBust(); // Check if player has busted
        } else {
            console.log("Cannot hit after bust, game over, or if deck is empty."); // Error message if hitting is not allowed
        }
    };
  
    // Function to check if player has busted
    const checkPlayerBust = () => {
        const playerValue = calculateHandValue(playerHand); // Calculate player's hand value
        // If player's hand value exceeds 21, set player bust status and proceed with dealer's turn
        if (playerValue > 21) {
            setButtons(false); // Hide game buttons
            setPlayerBust(true); // Set player bust status
            dealerLogic([...dealerHand]); // Proceed with dealer's turn
        }
    };

    // Function to handle player standing
    const handleStand = () => {
        setButtons(false); // Hide game buttons
        // If player has not busted and dealer's hand value is less than 17, proceed with dealer's turn
        if (!playerBust && calculateHandValue(dealerHand) < 17) {
            dealerLogic([...dealerHand]);
        } else {
            determineWinner(); // Determine the winner if dealer's turn is complete
        }
    };

    // Function to simulate dealer's turn
    const dealerLogic = () => {
        let updatedDealerHand = [...dealerHand]; // Copy of dealer's hand
        // Keep drawing cards for the dealer until their hand value is at least 17
        while (calculateHandValue(updatedDealerHand) < 17) {
            // If the deck is empty, log an error and stop the game
            if (propsObj.sixDecks.cards.length === 0) {
                console.error("Error: Deck is empty.");
                return;
            }
            const newCard = propsObj.sixDecks.cards.shift(); // Draw a new card from the deck
            updatedDealerHand.push(`/imgs/cards/${newCard.value + newCard.suit}.png`); // Update dealer's hand
        }
        setDealerHand(updatedDealerHand); // Update dealer's hand
        if (!gameOver) {
            determineWinner(); // Determine the winner if the game is not over
        }
    };

    // Function to calculate hand value
    const calculateHandValue = (hand) => {
        let value = 0; // Initialize hand value
        let hasAce = false; // Flag to indicate if the hand contains an ace
        for (let card of hand) {
            const cardValue = card.substring(11, card.length - 4); // Extract value from card path
            // If the card value is not a number, update hand value accordingly
            if (isNaN(cardValue)) {
                if (cardValue === 'A') {
                    hasAce = true; // Update flag if ace is found
                    value += 11; // Add 11 to hand value for ace
                } else {
                    value += 10; // Add 10 to hand value for face cards
                }
            } else {
                value += parseInt(cardValue); // Add numeric value to hand value
            }
        }
        // If hand value exceeds 21 and contains an ace, subtract 10 from hand value to prevent busting
        if (value > 21 && hasAce) {
            value -= 10;
        }
        return value; // Return the calculated hand value
    };

    // Function to determine the winner of the game
    const determineWinner = () => {
        const playerValue = calculateHandValue(playerHand); // Calculate player's hand value
        const dealerValue = calculateHandValue(dealerHand); // Calculate dealer's hand value
        // Compare player's and dealer's hand values to determine the winner
        if (playerValue > 21 || (dealerValue <= 21 && dealerValue > playerValue)) {
            console.log("Dealer wins!"); // Dealer wins if player busts or dealer has a higher hand value
        } else if (dealerValue > 21 || playerValue > dealerValue) {
            console.log("Player wins!"); // Player wins if dealer busts or player has a higher hand value
        } else if (playerValue === dealerValue) {
            console.log("It's a tie!"); // Tie if player's and dealer's hand values are equal
        }
    };

    // JSX to render the game UI
    return (
        <>
            <div className='warningMsg'><span>Hello from Game</span></div>
            <div className='dealer'>
                {dealerHand.map((card, index) => (
                    <img key={index} src={card} alt={`card${index}`} className='cards' />
                ))}
                {dealerNewCard && <img src={dealerNewCard} alt="newCard" className='cards' />}
            </div>
            <div className='info'>
                {buttons ? (<h3>Make your decision</h3>) : (<h3>Dealing cards...</h3>)}
            </div>
            <div className='btnBox'>
                {buttons ? (<Buttons propsObj={{ ...propsObj, handleHit, handleStand }} />) : ''}
            </div>
            <div className='player'>
                {playerHand.map((card, index) => (
                    <img key={index} src={card} alt={`card${index}`} className='cards' />
                ))}
            </div>
        </>
    );
}

export default Game; // Exporting the Game component

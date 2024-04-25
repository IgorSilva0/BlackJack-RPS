'use client'
import './page.css'
import React, { useState } from 'react'
import { Deck } from './util/deck.jsx'
import Bets from './components/bets/bets.jsx'

const Blackjack = () => {
    const sixDecks = new Deck(6);
    const [start, setStart] = useState(false)

    // State variables
    const [dealer, setDealer] = useState(0);
    const [dealerA, setDealerA] = useState(0);
    const [hiddenCard, setHiddenCard] = useState(null);
    const [player, setPlayer] = useState(0);
    const [playerA, setPlayerA] = useState(0);
    const [canSplit, setCanSplit] = useState(false);
    const [bets, setBets] = useState(0);
    const [isFirstCall, setIsFirstCall] = useState(true);
    const [decision, setDecision] = useState(false);
    const [handStatus, setHandStatus] = useState(false);
    const [isDoubleInProgress, setIsDoubleInProgress] = useState(false);
    const [isHitInProgress, setIsHitInProgress] = useState(false);
    const [isStandInProgress, setIsStandInProgress] = useState(false);
    const [isSplitInProgress, setIsSplitInProgress] = useState(false);
    const [evalValues, setEvalValues] = useState([]);
    const [evalDealer, setEvalDealer] = useState([]);

    // Props Object
    const propsObj = {
        sixDecks,
        start, setStart,
        dealer, setDealer,
        dealerA, setDealerA,
        hiddenCard, setHiddenCard,
        player, setPlayer,
        playerA, setPlayerA,
        canSplit, setCanSplit,
        bets, setBets,
        isFirstCall, setIsFirstCall,
        decision, setDecision,
        handStatus, setHandStatus,
        isDoubleInProgress, setIsDoubleInProgress,
        isHitInProgress, setIsHitInProgress,
        isStandInProgress, setIsStandInProgress,
        isSplitInProgress, setIsSplitInProgress,
        evalValues, setEvalValues,
        evalDealer, setEvalDealer
    };

    const playSound = () => {
        const audio = new Audio('/sound/button.mp3')
        audio.volume = 0.2;
        audio.play();
        setStart(true)
    };

    return (
        <div className='bjContent'>
            {!start ? ( 
                <>
                <h2>Hello from BlackJack</h2>
                <button className='playBj' onClick={playSound}>PLAY</button>
                </>
            ) : <Bets propsObj={propsObj} /> }
            
        </div>
    )
}

export default Blackjack

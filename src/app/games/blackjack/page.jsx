'use client'
import './page.css'
import React, { useState } from 'react'
import { Deck } from './util/deck.jsx'
import Bets from './components/bets/bets.jsx'

const Blackjack = () => {
    const sixDecks = new Deck(6);
    const [start, setStart] = useState(false)
    const [bets, setBets] = useState(0);


    // Props Object
    const propsObj = {
        sixDecks,
        start, setStart,
        bets, setBets,
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
                <h2 className='introName'>Welcome to our BlackJack</h2>
                <button className='playBj' onClick={playSound}>PLAY</button>
                </>
            ) : <Bets propsObj={propsObj} /> }
            
        </div>
    )
}

export default Blackjack

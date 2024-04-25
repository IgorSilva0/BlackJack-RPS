import './bets.css'
import React, { useState, useEffect } from 'react'
import Game from '../game/game.jsx'

const Bets = ({ propsObj }) => {
    const [timer, setTimer] = useState(13)

    const addBet = (event) => {
        let amount = Number(event.target.id)
        propsObj.setBets(propsObj.bets + amount)
    }
    const removeBets = (event) => {
        event.preventDefault()
        propsObj.setBets(0)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    clearInterval(intervalId);
                    return 0
                }
                return prevTimer - 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return(
        <>  
        {timer ? (
            <>
                <h2 className='placeBets'>Place Your Bets</h2>
                <h3 className='betsPlaced'>Your bet is: {propsObj.bets}</h3>
                <h3 className='betsTimer'>Bets closing in: {timer} seconds</h3>
                <div className='betsContainer'>
                <img src='/imgs/chips/1.png' alt='chips' className='betsImg' id="1" onClick={addBet}/>
                <img src='/imgs/chips/5.png' alt='chips' className='betsImg' id="5" onClick={addBet}/>
                <img src='/imgs/chips/10.png' alt='chips' className='betsImg' id="10" onClick={addBet}/>
                <img src='/imgs/chips/50.png' alt='chips' className='betsImg' id="50" onClick={addBet}/>
                <img src='/imgs/chips/100.png' alt='chips' className='betsImg' id="100" onClick={addBet}/>
                <img src='/imgs/chips/500.png' alt='chips' className='betsImg' id="500" onClick={addBet}/>
                </div>
                <button className='removeBets' onClick={removeBets}>Remove All Bets</button>
            </>
            ) : <Game propsObj={propsObj}/>}
        </>           
    )
}

export default Bets
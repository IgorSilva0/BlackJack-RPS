"use client"
import './page.css'
//import Loading from '../../util/loading/loading.jsx'
import React, {useState} from 'react'
import Choose from './components/choose.jsx';

const Rps = () => {
    const [start, setStart] = useState(false)
    const [rounds, setRounds] = useState(1)

    const playSound = () => {
        const audio = new Audio('/sound/button.mp3')
        audio.volume = 0.2;
        audio.play();
        setStart(true)
      };
    
    return (
            <div className='rpsContent'>
              <h2>Rock, Paper and Scissors</h2>
              {!start ? (
                <>
                    <h3>Welcome to the Game!</h3>
                    <img src='/imgs/rps.png' alt='Game Rules Image' className='rules'/>
                    <br/>
                    <h4>Are you ready to begin?</h4>
                    <button className='playRps' onClick={playSound} >PLAY</button>  
                </>
              ) : (
              <Choose rounds={rounds} setRounds={setRounds} setStart={setStart}/>
              ) }
            </div>
    )
}

export default Rps
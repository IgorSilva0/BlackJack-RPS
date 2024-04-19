import React, {useState} from 'react'
import ThreeTwoOne from './ThreeTwoOne.jsx';

const Choose = ( { rounds , setRounds , setStart } ) =>{
    const [playerChoice,setChoice] = useState(null)

    const propsObj = {
        rounds,
        setRounds,
        setStart,
        playerChoice,
        setChoice,
    }

    const handleHandClick = (event) => {
        setChoice(event.target.id);
    };
    
    return(
        <>
        {!playerChoice ? (
         <>
            <h3>Round {rounds}</h3>
            <h4>Choose:</h4>
            <img src='/imgs/rockHand.png' className='rps' id='rock' onClick={handleHandClick}/>
            <img src='/imgs/paperHand.png' className='rps' id='paper' onClick={handleHandClick}/>
            <img src='/imgs/scissorsHand.png' className='rps' id='scissors' onClick={handleHandClick}/>
         </>
        ) : (
            <ThreeTwoOne propsObj={propsObj}/>
        ) }
        </>
    )
}

export default Choose
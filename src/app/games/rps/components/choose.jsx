import React, {useState} from 'react'
import ThreeTwoOne from './ThreeTwoOne.jsx';

const Choose = ({ rounds }) =>{
    const [choice,setChoice] = useState(null)
    
    const handleHandClick = (event) => {
        setChoice(event.target.id);
    };
    
    return(
        <>
        {!choice ? (
         <>
            <h2>Round {rounds}</h2>
            <h3>Choose:</h3>
            <img src='/imgs/rockHand.png' className='rps' id='rock' onClick={handleHandClick}/>
            <img src='/imgs/paperHand.png' className='rps' id='paper' onClick={handleHandClick}/>
            <img src='/imgs/scissorsHand.png' className='rps' id='scissors' onClick={handleHandClick}/>
         </>
        ) : (
            <ThreeTwoOne/>
        ) }
        </>
    )
}

export default Choose
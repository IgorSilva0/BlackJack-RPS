import React, { useState, useEffect } from 'react';
import Result from './result.jsx';

const ThreeTwoOne = ( { playerChoice, setChoice, setRounds } ) => {
    const rps = ["rock","paper","scissors"];
    const [pcChoice, setPcChoice] = useState(null)
    const [countDown, setCountDown] = useState(3);

    const propsObj = {
        playerChoice,
        setChoice,
        setRounds,
        pcChoice
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountDown(prevCount => prevCount - 1);
        }, 1000);
        if (countDown === 0) {
            clearTimeout(timer);
            setTimeout(() => {
                setPcChoice(rps[Math.floor(Math.random() * 3)])
            }, 1000)
        }
        return () => clearTimeout(timer);
    }, [countDown]);

    return(
        !pcChoice ? (
        <>
            <h3>{countDown === 0 ? 'Gooo!!' : countDown}</h3>
            <img src='/imgs/123.png' className='handOne'/>
            <img src='/imgs/321.png' className='handTwo'/>
        </>
    ) : (
            <Result propsObj={propsObj}/>
        ) 

    )
    
};

export default ThreeTwoOne;

import React, { useState, useEffect } from 'react';
import Result from './result.jsx';

const ThreeTwoOne = () => {
    const rps = ["rock","paper","scissors"];
    const [pcChoice, setPcChoice] = useState(null)
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountDown(prevCount => prevCount - 1);
        }, 1000);
        if (countDown === 0) {
            clearTimeout(timer);
            setTimeout(() => {
                setPcChoice(rps[Math.floor(Math.random() * 3)])
            }, 800)
        }
        return () => clearTimeout(timer);
    }, [countDown]);

    return(
        !pcChoice ? (
        <>
            <h1>{countDown === 0 ? 'Gooo!!' : countDown}</h1>
            <img src='/imgs/123.png' className='handOne'/>
            <img src='/imgs/321.png' className='handTwo'/>
        </>
    ) : (
            <h1>I stopped here!</h1>
        ) 

    )
    
};

export default ThreeTwoOne;

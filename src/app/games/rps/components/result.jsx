import React, { useState, useEffect } from 'react';

const Result = ({ propsObj }) => {
    const [instruction, setInstruction] = useState('');

    useEffect(() => {
        const player = propsObj.playerChoice;
        const pc = propsObj.pcChoice;

        if (player === pc) {
            setInstruction(`It's a Draw, 😲 (${player} vs ${pc})`);
        } else if (
            (player === 'rock' && pc === 'scissors') ||
            (player === 'paper' && pc === 'rock') ||
            (player === 'scissors' && pc === 'paper')
        ) {
            setInstruction(`You win! 🎉 ${player} wins over ${pc}`);
            propsObj.setRounds(prev => prev + 1);
            // Update score ?
        } else {
            setInstruction(`Computer wins! 💩 ${pc} wins over ${player}`);
        }
    }, [propsObj.playerChoice, propsObj.pcChoice, propsObj.setRounds]);

    return (
        <>
            <h3>{instruction}</h3>
            <img src={"/imgs/" + propsObj.pcChoice + "Hand.png"} className='pcChoice' alt="PC Choice" />
            <img src={"/imgs/" + propsObj.playerChoice + "Hand.png"} className='playerChoice' alt="Player Choice" />
            <br/>
            <button className='menuBtn'>Menu</button>
            <button className='playRps'>Again</button>
        </>
    )
}

export default Result;

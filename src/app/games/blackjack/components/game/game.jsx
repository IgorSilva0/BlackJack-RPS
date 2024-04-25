import './game.css'
import React, { useState, useEffect } from 'react'
import firstDrawn from '../../util/firstDrawn.jsx'
import Buttons from '../buttons/buttons.jsx'

const Game = ({ propsObj }) => {
    const firstFour = firstDrawn(propsObj.sixDecks)
    const [card1, setCard1] = useState(null)
    const [card2, setCard2] = useState(null)
    const [card3, setCard3] = useState(null)
    const [card4, setCard4] = useState(null)
    const [buttons, setButtons] = useState(false)

    useEffect(() => {
        const cardValues = Object.values(firstFour);
        const timeoutIds = cardValues.map((value, index) => {
          return setTimeout(() => {
            switch (index) {
              case 0:
                setCard1(value);
                break;
              case 1:
                setCard2(value);
                break;
              case 2:
                setCard3(value);
                break;
              case 3:
                setCard4(value);
                setButtons(true)
                break;
              default:
                break;
            }
          }, (index + 1) * 1000);
        });

        return () => {
          timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        };
    }, []);
      
    return (
        <>
         <div className='warningMsg'><span>Hello from Game</span></div>
         <div className='dealer'>
            {card2 ? <img src={card2} alt="card2" className='cards'/> : ''}
            {card4 ? <img src='/imgs/cards/back.png' alt="card4" className='cards'/> : ''}
         </div>
         <div className='info'>
            <h3>Make your decision</h3>
         </div>
         <div className='btnBox'>
            {buttons ? (<Buttons propsObj={propsObj}/>) : ''}
         </div>
         <div className='player'>
            {card1 ? <img src={card1} alt="card1" className='cards'/> : ''}
            {card3 ? <img src={card3} alt="card3" className='cards'/> : ''}
         </div>
        </>
    )
}

export default Game

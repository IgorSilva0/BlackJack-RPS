import React from 'react';
import './buttons.css'

const Buttons = ({ propsObj }) => {

    const handleDouble = () => {
        console.log('Double cliked')
        //propsObj.handleDouble(); // Call the handleDouble function from props
    };

    const handleHit = () => {
        propsObj.handleHit(); // Call the handleHit function from props
    };

    const handleStand = () => {
        propsObj.handleStand(); // Call the handleStand function from props
    };

    const handleSplit = () => {
        console.log('Split cliked')
        //propsObj.handleSplit(); // Call the handleSplit function from props
    };

    return (
        <>  
            <button className='double' onClick={handleDouble} id='Double'>DOUBLE</button>
            <button className='hit' onClick={handleHit} id='Hit'>HIT</button>
            <button className='stand' onClick={handleStand} id='Stand'>STAND</button>
            <button className='split' onClick={handleSplit} id='Split'>SPLIT</button>
        </>
    );
};

export default Buttons;

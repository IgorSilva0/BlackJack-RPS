import './buttons.css';
import React, { useState } from 'react';
import Double from './func/double.jsx';

const Buttons = ({ propsObj }) => {
    const [doubleClicked, setDoubleClicked] = useState(false);

    const handleDoubleClick = (btn) => {
        setDoubleClicked(true);
    };

    return (
        <>  
            {doubleClicked && <Double propsObj={propsObj} />}
            <button className={propsObj.bets ? 'double' : 'btnOff'} onClick={handleDoubleClick} id='Double'>DOUBLE</button>
            <button className='hit' id='Hit'>HIT</button>
            <button className='stand' id='Stand'>STAND</button>
            <button className={propsObj.canSplit ? 'split' : 'btnOff'} id='Split'>SPLIT</button>
        </>
    );
};

export default Buttons;

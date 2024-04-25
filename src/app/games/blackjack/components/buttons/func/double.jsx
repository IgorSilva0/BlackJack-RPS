import React, { useEffect } from 'react';

const double = ({ propsObj }) => {
    useEffect(() => {
        propsObj.setBets(propsObj.bets * 2);        
    }, []);
    return null;
};

export default double;

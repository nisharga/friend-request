import React from 'react';
const Money = (props) => {
    const value = props.val
    const price = value.reduce((total, prd) => total + prd.money, 0)
    const cham = props.champ
    console.log('value', value.money)
    return (
        <div>
            <h1>Money: {price}</h1>
        </div>
    );
};

export default Money;
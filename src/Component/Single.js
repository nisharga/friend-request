import React from 'react';
import './Profile.css'

const Single = (props) => {
    const {picture, name, money} = props.val;
    // const Age = props.val;
    // const TotalAge = Age.reduce((total, prd) => total + prd.money, 0)
    // const Money = Age.reduce((total, Age) => total + Age.money, 0)
    // console.log(Money);
    return (
        <div>
            <div className="single">
            <img src={picture.large} alt=""/>
            <h3>{name.title + ' ' + name.first + ' ' + name.last}</h3>
            <p>Money: {money}</p>
            <button onClick={() => props.handle(props.val)}>Add friend</button>
            </div>
        </div>
    );
};

export default Single;
import React, { useState } from 'react';
import './Profile.css'
import Data from './Data'
import Single from './Single'
import Money from './Money';

const Profile = () => {
    const first8 = Data.slice(0, 8);
    const [data, setData] = useState(first8)

    const [cart, setCart] = useState([])
    const AddFriend = (person) => {
        console.log('add', person.money)
        const newCart = [...cart, person]
        setCart(newCart)
    }
    return (
        <div className="full">
            <h2>Facebook</h2>
            <h5>Request send: {cart.length}</h5>
            <Money val={cart}></Money>
            {
                data.map(data => 
                <Single val={data} handle={AddFriend}>
                </Single>)
            }
        </div>
    );
};

export default Profile;
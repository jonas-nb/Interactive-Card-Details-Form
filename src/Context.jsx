import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    let [cardName, setCardName] = useState('jame appleseed');
    let [cardNumber, setCardNumber] = useState('0000000000000000');
    let [cardDateFirst, setCardDateFirst] = useState('00');
    let [cardDateSecond, setCardDateSecond] = useState('00');
    let [cardCvc, setCardCvc] = useState();
    return (
        <MyContext.Provider
            value={{
                cardCvc,
                cardName,
                cardNumber,
                cardDateFirst,
                cardDateSecond,
                setCardCvc,
                setCardDateFirst,
                setCardDateSecond,
                setCardName,
                setCardNumber,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

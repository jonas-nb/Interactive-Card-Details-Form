import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [cardName, setCardName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [cardDateFirst, setCardDateFirst] = useState();

    return (
        <MyContext.Provider
            value={{
                cardName,
                cardNumber,
                cardDateFirst,
                setCardDateFirst,
                setCardName,
                setCardNumber,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

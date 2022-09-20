import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MyContext } from '../Context';

const CardForm = () => {
    let {
        setCardCvc,
        setCardDateFirst,
        setCardDateSecond,
        setCardName,
        setCardNumber,
        cardName,
    } = useContext(MyContext);
    console.log(cardName.length);
    cardName.length === 28 ? alert('oi') : '';

    return (
        <div className="">
            <form className="flex flex-col mt-20 max-w-[375px] border">
                <div className="flex flex-col">
                    <label htmlFor="name">cardholder name</label>
                    <input
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                        name="CardName"
                        maxLength={28}
                        onChange={(e) => setCardName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="number">card number</label>
                    <input
                        id="number"
                        type="text"
                        maxLength={16}
                        minLength={16}
                        pattern={'^[0-9]*$'}
                        placeholder="e.g. 1234 5678 9123 0000"
                        name="CardNumber"
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div className="flex items-center border border-yellow-400">
                    <div className="w-36">
                        <label htmlFor="date">exp. date (MM/YY)</label>
                        <div className="flex">
                            <input
                                className="block w-16 p-2"
                                type="text"
                                placeholder="MM"
                                id="date"
                            />
                            <input
                                className="block w-16 p-2 ml-2"
                                type="text"
                                placeholder="YY"
                                id="date"
                                onChange={(e) => set}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col  ">
                        <label htmlFor="cvc" className="">
                            cvc
                        </label>
                        <input
                            className="block w-16"
                            type="text"
                            max={3}
                            maxLength={3}
                            id="cvc"
                            placeholder="e.g. 123"
                            pattern="[0-9]+$"
                            onChange={(e) => setCardCvc(e.target.value)}
                        />
                    </div>
                </div>
                <button>Confirm</button>
            </form>
        </div>
    );
};

export default CardForm;

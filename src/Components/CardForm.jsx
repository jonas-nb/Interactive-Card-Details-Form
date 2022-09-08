import React from 'react';

const CardForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">cardholder name</label>
                    <input
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                        name="CardName"
                        id="name"
                    />
                </div>
                <div>
                    <label htmlFor="number">card number</label>
                    <input
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                        name="CardNumber"
                        id="number"
                    />
                </div>
                <div>
                    <label htmlFor="date">exp. date (MM/YY)</label>
                    <div>
                        <input type="text" placeholder="MM" id="date" />
                        <input type="text" placeholder="YY" id="date" />
                    </div>
                    <label htmlFor="cvc">cvc</label>
                    <input type="text" id="cvc" placeholder="e.g. 123" />
                </div>
                <button>Confirm</button>
            </form>
        </div>
    );
};

export default CardForm;

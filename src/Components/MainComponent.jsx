import React from 'react';
import CardBG from './CardBG';
import CardForm from './CardForm';
const MainComponent = () => {
    return (
        <div className="xl:grid xl:grid-cols-2">
            <CardBG />
            <div className=" xl:place-self-start">
                <CardForm />
            </div>
        </div>
    );
};

export default MainComponent;

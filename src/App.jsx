import React from 'react';
import CardBG from './Components/CardBG';
import CardForm from './Components/CardForm';
import { Route, Routes } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
const App = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<MainComponent />} />
            </Routes>
        </div>
    );
};

export default App;

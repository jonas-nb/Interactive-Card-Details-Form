import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
const App = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<MainComponent />} />
                recebe uma page de erro
                <Route path="*" element={<MainComponent />} />
                Recebe a page sucesso
                <Route path="/sucess" element={<MainComponent />} />
            </Routes>
        </div>
    );
};

export default App;

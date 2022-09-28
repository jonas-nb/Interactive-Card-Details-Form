import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyContext, MyProvider } from './Context';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MyProvider>
                <App />
            </MyProvider>
        </BrowserRouter>
    </React.StrictMode>
);

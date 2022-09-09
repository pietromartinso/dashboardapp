import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider>
        {/* Commit na branch conflituosa */}
        <App />
    </ContextProvider>, 
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider>
        {/* Alteração na master/main branch - gerando conflito */}
        <App />
    </ContextProvider>, 
    document.getElementById('root')
);

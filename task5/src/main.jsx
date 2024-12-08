import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

import './ui/styles/reset.css';
import './ui/styles/main.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

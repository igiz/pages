import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Computer from './components/Computer';
import Monitor from './components/Monitor';
import { AppContextProvider } from './contexts/AppContext';
import { AppLauncher } from './components/AppLauncher';

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <Monitor>
                <Computer dimensions={{ rows: 8, columns: 9 }}>
                    <AppLauncher />
                </Computer >
            </Monitor>
        </AppContextProvider>
    </React.StrictMode >,
    document.getElementById('app'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Computer from './components/Computer';
import Console from './components/Console';
import Monitor from './components/Monitor';
import CvApp from './components/CvApp';

ReactDOM.render(
  <React.StrictMode>
    <Monitor>
      <Computer dimensions={{ rows: 8, columns: 9 }}>
        <Console name='CvApp - Zygimantas Raugas' dimensions={{ height: '450px', width: '750px' }}>
          <CvApp />
        </Console>
      </Computer >
    </Monitor>
  </React.StrictMode >,
  document.getElementById('app')
);

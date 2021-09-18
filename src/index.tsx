import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Computer from './components/Computer';
import Console from './components/Console';
import SleekMonitor from './components/Monitor'

ReactDOM.render(
  <React.StrictMode>
    <SleekMonitor>
      <Computer>
        <Console name='CvApp - Zygimantas Raugas' dimensions={{ height: '350px', width: '650px' }} />
      </Computer >
    </SleekMonitor>
  </React.StrictMode >,
  document.getElementById('app')
);

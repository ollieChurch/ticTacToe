import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import {GameStatusProvider} from './context/GameStatusContext'

ReactDOM.render( 
  <GameStatusProvider>
    <App/>
  </GameStatusProvider>, 
document.getElementById('root') );
import React, {useContext} from 'react';
import './static/style/main.css';

import {GameStatusContext} from './context/GameStatusContext'

import Board from './components/Board'
import ResetBtn from './components/ResetBtn'

function App() {
  const {status} = useContext(GameStatusContext)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='status'>{status}</div>
      <Board />
      <ResetBtn />
    </>
  )
}
export default App
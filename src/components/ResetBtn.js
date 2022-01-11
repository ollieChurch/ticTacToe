import React, {useContext} from 'react'
import {GameStatusContext} from '../context/GameStatusContext'

function ResetBtn() {
  const {setResetGame} = useContext(GameStatusContext)

  function handleClick() {
    setResetGame(true)
  }

  return (
      <button className='reset' onClick={handleClick}>Reset</button>
  )
}

export default ResetBtn
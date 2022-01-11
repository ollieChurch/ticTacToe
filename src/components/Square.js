import React, {useState, useEffect, useContext} from 'react'
import {GameStatusContext} from '../context/GameStatusContext'

function Square({index}) {
  const {currentPlayer, updateGameStatus, resetGame, gameOver} = useContext(GameStatusContext)
  const [display, setDisplay] = useState(null)
  const [canBeClicked, setCanBeClicked] = useState(true)

  useEffect(() => {
    if (resetGame) {
      setDisplay(null)
      setCanBeClicked(true)
    }
  }, [resetGame])

  useEffect(() => {
    gameOver && setCanBeClicked(false)
  }, [gameOver])

  function handleClick() {
    if (canBeClicked) {
      setDisplay(currentPlayer)
      updateGameStatus(index)
      setCanBeClicked(false)
    }
  }

  return (
    <div className='square' onClick={handleClick}>
      {display}
    </div>
  )
}

export default Square
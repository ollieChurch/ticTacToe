 import React, {useState, useEffect, createContext} from 'react'
 import winningCombinationsData from '../data/winningCombinationsData'
 const GameStatusContext = createContext()
 
 function GameStatusProvider({children}) {
  const [startingPlayer] = useState('X')
  const [messages] = useState({
    playing: 'Next player:', 
    won: 'Winner:', 
    tie: 'Tie'
  })
  const [moveCount, setMoveCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(null)
  const [status, setStatus] = useState(null)
  const [resetGame, setResetGame] = useState(true)

  useEffect(() => {
    if (resetGame) {
      setCurrentPlayer(startingPlayer)
      setGameOver(false)
      setStatus(`${messages.playing} ${startingPlayer}`)
      setMoveCount(0)
      setResetGame(false)
    }
  }, [resetGame, messages.playing, startingPlayer])

  function updateGameStatus(squareKey) {
    if (!gameOver) {
      const newMoveCount = moveCount + 1
      setMoveCount(newMoveCount)

      if (newMoveCount >= 9) {
        setGameOver(true)
        setStatus(messages.tie)
      } else {
        const squares = []
        let winnerFound = false

        document.querySelectorAll('.square').forEach(square => squares.push(square.textContent))
        squares[squareKey] = currentPlayer
        
        winningCombinationsData.forEach(combination => {
          const playersArr = []
          combination.forEach(i => playersArr.push(squares[i]))
          const playersSet = new Set(playersArr)
          if (playersSet.size === 1 && playersArr[0]) {
            winnerFound = true
            setGameOver(true)
            setStatus(`${messages.won} ${currentPlayer}`)
          }
        })
        
        if (!winnerFound) {
          const nextPlayer = currentPlayer === 'X' ? 'O' : 'X'
          setCurrentPlayer(nextPlayer)
          setStatus(`${messages.playing} ${nextPlayer}`)
        }
      }
    }
  }

  const context = {
    gameOver,
    status,
    currentPlayer,
    updateGameStatus,
    resetGame,
    setResetGame
  }

  return (
    <GameStatusContext.Provider value={context}>
      {children}
    </GameStatusContext.Provider>
  )
 }

 export {GameStatusProvider, GameStatusContext}
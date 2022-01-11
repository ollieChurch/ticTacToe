import React from 'react'
import Square from './Square'

function Board() {
  const squares = []
  for(let i=0; i < 9; i++) {
    squares.push(<Square key={i} index={i} />)
  }

  return (
    <div className='board'>{squares}</div>
  )
}

export default Board
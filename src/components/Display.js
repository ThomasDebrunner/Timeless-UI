import React from 'react'

import Watch from './Watch'


export default () => {
  const state = Array.from(
    { length: 9 },
    () => Array.from(
      { length: 15 },
      () => Array.from(
        { length: 2 },
        () => Math.floor(Math.random() * 360),
      ),
    ),
  )


  return (
    <div className="display-container">
      {
        state.map((line, rowIdx) => (
          <div className="display-row" key={rowIdx}>
            {
            line.map((w, colIdx) => (<Watch lhand={w[0]} shand={w[1]} size={40} key={colIdx} />))
          }
          </div>))
      }
    </div>
  )
}

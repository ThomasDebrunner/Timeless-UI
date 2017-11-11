import React from 'react'

import Watch from './Watch'

export default ({ size = 50, toggleSelection, selection }) => {
  const state = Array.from(
    { length: 9 },
    () => Array.from(
      { length: 15 },
      () => Array.from(
        { length: 2 },
        () => 0,
      ),
    ),
  )
  return (
    <div className="display-container">
      {
        state.map((line, rowIdx) => (
          <div className="display-row" key={rowIdx}>
            {
            line.map((w, colIdx) => (
              <Watch
                lhand={w[0]}
                shand={w[1]}
                size={size}
                key={colIdx}
                selected={selection && selection[`${colIdx}-${rowIdx}`]}
                onClick={ev => toggleSelection({ coordinates: { x: colIdx, y: rowIdx }, reset: !(ev.shiftKey || ev.ctrlKey || ev.metaKey) })}
              />))
          }
          </div>))
      }
    </div>
  )
}

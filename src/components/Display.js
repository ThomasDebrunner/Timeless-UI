import React from 'react'

import Watch from './Watch'

const grid = Array.from(
  { length: 9 },
  () => Array.from(
    { length: 15 },
    () => 0,
  ),
)

export default ({
  frame,
  size = 50, toggleSingleReset, rangeToSelection,
  rangeSelect,
  toggleSingleNoReset, selection, selectable = false,
}) => {
  const handleClick = (ev, x, y) => {
    if (!selectable) {
      return
    }
    const { shiftKey, ctrlKey, metaKey } = ev
    const expand = ctrlKey || metaKey
    const range = shiftKey
    if (range && expand) {
      rangeToSelection({ x, y })
    } else if (range && !expand) {
      rangeSelect({ x, y })
    } else if (!range && expand) {
      toggleSingleNoReset({ x, y })
    } else if (!range && !expand) {
      toggleSingleReset({ x, y })
    }
  }
  return (
    <div className="display-container">
      {
        grid.map((line, rowIdx) => (
          <div className="display-row" key={rowIdx}>
            {
            line.map((_, colIdx) => {
              const key = `${colIdx}-${rowIdx}`
              return (
                <Watch
                  lhand={frame && frame[key] && frame[key].lhand || 0}
                  shand={frame && frame[key] && frame[key].shand || 0}
                  size={size}
                  key={colIdx}
                  selected={selectable && selection && selection[key]}
                  onClick={e => handleClick(e, colIdx, rowIdx)}
                />)
})
          }
          </div>))
      }
    </div>
  )
}

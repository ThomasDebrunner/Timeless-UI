import React from 'react'

import Watch from './Watch'

export default ({
  size = 50, toggleSingleReset, rangeToSelection,
  rangeSelect,
  toggleSingleNoReset, selection, selectable = false,
}) => {
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
                onClick={e => handleClick(e, colIdx, rowIdx)}
              />))
          }
          </div>))
      }
    </div>
  )
}

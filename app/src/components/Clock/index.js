import React from 'react'

import Watch from './Watch'
import mapIndex from '../../utils/mapIndex'
import s from './style.css'

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lastClick: {x: 0, y:0},
      selection: new Set()
    }
  }

  _rangeSelect = (x, y, reset) => {
    const keys = new Set()
    for (let ix = Math.min(this.state.lastClick.x, x); ix <= Math.max(this.state.lastClick.x, x); ix += 1) {
      for (let iy = Math.min(this.state.lastClick.y, y); iy <= Math.max(this.state.lastClick.y, y); iy += 1) {
        keys.add(`${ix}-${iy}`)
      }
    }
    (reset ? [] : this.state.selection).forEach(keys.add, keys)
    this.setState({
      lastClick: {x, y},
      selection: keys
    })
  }

  _singleSelect = (x, y, reset) => {
    const selection = reset ? new Set([`${x}-${y}`]) : new Set([...this.state.selection, `${x}-${y}`])
    this.setState({
      lastClick: {x, y},
      selection
    })
  }

  _handleClick = (event, x, y) => {
    const { shiftKey, ctrlKey, metaKey } = event
    const expand = ctrlKey || metaKey
    const range = shiftKey
    if (range && expand) {
      this._rangeSelect(x, y, false)
    } else if (range && !expand) {
      this._rangeSelect(x, y, true)
    } else if (!range && expand) {
      this._singleSelect(x, y, false)
    } else if (!range && !expand) {
      this._singleSelect(x, y, true)
    }
  }

  render () {
    const {
      nRows,
      nCols
    } = this.props

    return (
      <div className={s['clock-container']}>
        {mapIndex(nRows, row => (
            <div className={s['clock-container__row']} key={`row-${row}`}>
              {mapIndex(nCols, col => (
                <Watch 
                  key={`watch-${col}-${row}`} 
                  size={50} 
                  lHand={row*col/1.35} 
                  sHand={(row+col)/24*100}
                  onClick={event => this._handleClick(event, col, row)}
                  selected={this.state.selection.has(`${col}-${row}`)}
                />
              ))}
            </div>
          ))}
      </div>)

  }
}

export default Clock
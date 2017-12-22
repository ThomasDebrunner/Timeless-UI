import React from 'react'


export default ({ scale, setPlayPosition, programLength }) => {
  const containerSize = (programLength / scale) + 100

  const clickHandler = (e) => {
    e.persist()
    const offset = e.target.offsetLeft + e.nativeEvent.layerX
    setPlayPosition(offset * scale)
  }

  const ticks = []
  for (let i = 0; i < 1000; i += 1) {
    if (i % 10 === 0) {
      ticks.push(<span className="tindicator-tick tindicator-main-tick" style={{ width: 1000 / scale }} key={i}><p>{i}</p></span>)
    } else {
      ticks.push(<span className="tindicator-tick" style={{ width: 1000 / scale }} key={i} />)
    }
  }
  return (
    <div className="tindicator-container" style={{ width: containerSize }} onClick={clickHandler}>
      {ticks}
    </div>
  )
}

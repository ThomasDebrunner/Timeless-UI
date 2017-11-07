import React from 'react'



export default ({scale, setPlayPosition}) => {

  const clickHandler = (e) => {
    e.persist()
    const offset = e.target.getBoundingClientRect().x + e.nativeEvent.offsetX - 10 // remove global padding in the end
    setPlayPosition(offset*scale)
  }

  let ticks = [];
  for(let i=0; i<1000; i++) {
    if (i%10 == 0) {
      ticks.push(<span className='tindicator-tick tindicator-main-tick' style={{width: 1000/scale}} key={i}>{i}</span>)
    }
    else {
      ticks.push(<span className='tindicator-tick' style={{width: 1000/scale}} key={i}></span>)
    }
  }
  return (
    <div className='tindicator-container' onClick={clickHandler}>
      {ticks}
    </div>
  )
}

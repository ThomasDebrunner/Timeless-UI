import React from 'react'


export default ({scale}) => {

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
    <div className='tindicator-container'>
      {ticks}
    </div>
  )
}

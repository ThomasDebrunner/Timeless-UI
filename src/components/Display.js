import React from 'react'

import Watch from './Watch'


export default (props) => {

  const state = Array.from({length: 9},
    () => Array.from({length: 15},
      () => Array.from({length: 2},
        () => Math.floor(Math.random() * 360))));


  console.log(state)

  return (
    <div className='display-container'>
      {
        state.map((line, idx) =>
          (<div className='display-row' key={idx}>
          {
            line.map((w, idx) => (<Watch lhand={w[0]} shand={w[1]} size={40} key={idx}/>))
          } </div>))
      }
    </div>
  )
}

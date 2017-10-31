import React from 'react'

import Block from './Block'

export default ({blocks}) => {

  return (
    <div className='timeline-container'>
      {
        blocks.map((block, idx) => {
          return (<Block name={block.name} duration={block.duration} key={idx}></Block>)
        })
      }
    </div>
  )

}

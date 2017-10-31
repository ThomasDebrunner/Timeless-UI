import React from 'react';


export default ({name, duration, scale=100}) => {

  const getStyle = (duration) => {
    return {
      width: duration/scale
    }
  }

  return (
    <div className='block' style={getStyle(duration)}>
      {name}
      <div className='block-resize-handle'></div>
    </div>
  )

}

import React from 'react'


export default ({
  lhand, shand, size = 100, selected, onClick,
}) => {
  const boxStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: selected ? '#F5B601' : 'black',
    position: 'relative',
  }

  const getContainerStyle = angle => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    transform: `rotate(${angle}deg)`,
  })

  const getHandStyle = short => ({
    width: short ? size / 2.3 : size / 2.1,
    height: size / 20,
    background: selected ? '#F5B601' : 'black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%)',
  })

  return (
    <div style={boxStyle} className="watch" onClick={onClick}>
      <div style={getContainerStyle(shand)}><div style={getHandStyle(true)} /></div>
      <div style={getContainerStyle(lhand)}><div style={getHandStyle(false)} /></div>
    </div>
  )
}

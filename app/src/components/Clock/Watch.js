import React from 'react'


export default ({
  lHand, sHand, size = 100, selected, onClick,
}) => {
  const boxStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: selected ? '#ADD857' : '#89A3B0',
    background: selected ? '#F1FFD4' : 'transparent',
    position: 'relative',
    margin: 0.5
  }

  const getContainerStyle = angle => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    transform: `rotate(${(angle * 3.6 + 90) % 360}deg)`,
  })

  const getHandStyle = short => ({
    width: short ? size / 2.3 : size / 2.1,
    height: size / 15,
    background: 'black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%)',
  })

  return (
    <div style={boxStyle} className="watch" onClick={onClick}>
      <div style={getContainerStyle(sHand)}><div style={getHandStyle(true)} /></div>
      <div style={getContainerStyle(lHand)}><div style={getHandStyle(false)} /></div>
    </div>
  )
}

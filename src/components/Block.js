import React from 'react';
import {DraggableCore} from 'react-draggable'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

const MIN_DURATION = 100

class Block extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: props.duration,
      resizeStart: {x:0, y:0, duration:0}
    }
  }

  resizeStart(ev) {
    ev.persist()
    this.setState((prevState) => ({resizeStart: {x: ev.screenX, y: ev.screenY, duration: prevState.duration}}))
  }

  resize(ev) {
    const scale = this.props.scale || 100
    this.setState(prevState => {
      const duration = Math.max(prevState.resizeStart.duration + ((ev.screenX - prevState.resizeStart.x) * scale), MIN_DURATION)
      return {
        duration
      }
    })
  }

  resizeStop(ev) {
    this.props.resizeBlock(this.state.duration)
  }

  getStyle(duration, scale) {
    return {
      width: duration/scale
    }
  }


  render() {
    const {name, scale=100} = this.props
    const {duration} = this.state

    return (
      <div className='block' style={this.getStyle(duration, scale)}>
        {name}
        <Glyphicon glyph='trash' className='block-delete-button no-sort' onClick={this.props.removeBlock.bind(this)} />
        <DraggableCore
          onStart={this.resizeStart.bind(this)}
          onDrag={this.resize.bind(this)}
          onStop={this.resizeStop.bind(this)}>
          <div className='block-resize-handle no-sort' onDrag={this.resize.bind(this)}></div>
        </DraggableCore>
      </div>
    )
  }

}


export default Block

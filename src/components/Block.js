import React from 'react'
import { DraggableCore } from 'react-draggable'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

const MIN_DURATION = 100

class Block extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: props.duration,
      resizeStart: { x: 0, duration: 0 },
    }
  }

  resizeStart(ev) {
    ev.persist()
    this.setState(prevState => ({ resizeStart: { x: ev.screenX, duration: prevState.duration } }))
  }

  resize(ev) {
    const scale = this.props.scale || 100
    this.setState(() => {
      const duration = Math.max(this.state.resizeStart.duration + ((ev.screenX - this.state.resizeStart.x) * scale), MIN_DURATION)
      return {
        duration,
      }
    })
  }

  resizeStop() {
    this.props.resizeBlock(this.state.duration)
  }

  static generateStyle(duration, scale) {
    return {
      width: duration / scale,
    }
  }


  render() {
    const { name, scale = 100 } = this.props
    const { duration } = this.state

    return (
      <div className="block" style={Block.generateStyle(duration, scale)} onDoubleClick={this.props.openEditor.bind(this)}>
        {name}
        <Glyphicon
          glyph="trash"
          className="block-delete-button no-sort"
          onClick={this.props.removeBlock.bind(this)}
        />
        <Glyphicon
          glyph="pencil"
          className="block-edit-button no-sort"
          onClick={this.props.openEditor.bind(this)}
        />
        <DraggableCore
          onStart={this.resizeStart.bind(this)}
          onDrag={this.resize.bind(this)}
          onStop={this.resizeStop.bind(this)}
        >
          <div className="block-resize-handle no-sort" onDrag={this.resize.bind(this)} />
        </DraggableCore>
      </div>
    )
  }
}


export default Block

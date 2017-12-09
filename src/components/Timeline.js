import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import TimeIndicator from '../containers/TimeIndicator'
import PlayPositionIndicator from './PlayPositionIndicator'
import Block from '../containers/Block'


const SortableBlock = SortableElement(({ block, idx }) => (<Block name={block.name} duration={block.duration} idx={idx} />))

const BlockList = SortableContainer(({ blocks }) => (
  <div>
    {
        blocks.map((block, idx) => (<SortableBlock block={block} idx={idx} index={idx} key={block.id} />))
      }
  </div>
))


export default ({
  blocks, playPosition, scale, reorderProgram, addBlock, zoomIn, zoomOut, play, pause, reset, isPlaying,
}) => (
  <div>
    <div className="timeline-container">
      <PlayPositionIndicator left={playPosition / scale} />
      <TimeIndicator />
      <BlockList blocks={blocks} axis="x" onSortEnd={reorderProgram} shouldCancelStart={ev => ev.target.className.includes('no-sort')} distance={10} />
    </div>
    <div className="spacer" />
    <ButtonGroup> {
      !isPlaying ?
        (<Button bsStyle="primary" onClick={play}><Glyphicon glyph="play" />Play</Button>) :
        (<Button bsStyle="primary" onClick={pause}><Glyphicon glyph="pause" />Pause</Button>)
    }
      <Button onClick={reset}><Glyphicon glyph="stop" />Reset</Button>
    </ButtonGroup>
    <span style={{ width: '20px', display: 'inline-block' }} />
    <ButtonGroup>
      <Button onClick={addBlock}><Glyphicon glyph="plus" />Add Block</Button>
      <Button><Glyphicon glyph="floppy-disk" />Save</Button>
    </ButtonGroup>
    <span style={{ width: '20px', display: 'inline-block' }} />
    <ButtonGroup>
      <Button onClick={zoomIn}><Glyphicon glyph="zoom-in" /></Button>
      <Button onClick={zoomOut}><Glyphicon glyph="zoom-out" /></Button>
    </ButtonGroup>
  </div>

)

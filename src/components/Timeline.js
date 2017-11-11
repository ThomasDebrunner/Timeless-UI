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


const cancelSorting = ev => ev.target.className.includes('no-sort')

export default ({
  blocks, playPosition, scale, reorderProgram, addBlock, zoomIn, zoomOut,
}) => (
  <div>
    <div className="timeline-container">
      <PlayPositionIndicator left={playPosition / scale} />
      <TimeIndicator />
      <BlockList blocks={blocks} axis="x" onSortEnd={reorderProgram} shouldCancelStart={cancelSorting} />
    </div>
    <div className="spacer" />
    <ButtonGroup>
      <Button bsStyle="primary"><Glyphicon glyph="play" />Play</Button>
      <Button><Glyphicon glyph="stop" />Reset</Button>
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

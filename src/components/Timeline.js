import React from 'react'
import Block from './Block'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableBlock = SortableElement(({block}) => (<Block name={block.name} duration={block.duration}></Block>))

const BlockList = SortableContainer(({blocks}) => {
  return (
    <ul>
      {
        blocks.map((block, idx) => (<SortableBlock block={block} index={idx} key={idx}/>))
      }
    </ul>
  )
})


const cancelSorting = (ev) => {
  return ev.target.className === 'block-resize-handle'
}

export default ({blocks, reorderProgram}) => {

  return (
    <div className='timeline-container'>
      <BlockList blocks={blocks} axis='x' onSortEnd={reorderProgram} shouldCancelStart={cancelSorting}/>
    </div>
  )
}

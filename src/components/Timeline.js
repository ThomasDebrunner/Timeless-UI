import React from 'react'
import Block from '../containers/Block'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableBlock = SortableElement(({block, idx}) => (<Block name={block.name} duration={block.duration} idx={idx}></Block>))

const BlockList = SortableContainer(({blocks}) => {
  return (
    <div>
      {
        blocks.map((block, idx) => (<SortableBlock block={block} idx={idx} index={idx} key={block.id}/>))
      }
    </div>
  )
})


const cancelSorting = (ev) => {
  return ev.target.className.includes('no-sort')
}

export default ({blocks, reorderProgram}) => {

  return (
    <div className='timeline-container'>
      <BlockList blocks={blocks} axis='x' onSortEnd={reorderProgram} shouldCancelStart={cancelSorting}/>
    </div>
  )
}

import {
  REORDER_PROGRAM,
  RESIZE_BLOCK
} from '../../actions/types'

const initialState = {
  blocks: [
    {
      id: 'a',
      name: 'First block',
      duration: 10000
    },
    {
      id: 'b',
      name: 'Second block',
      duration: 12000
    },
    {
      id: 'c',
      name: 'Third block',
      duration: 18000
    },
    {
      id: 'd',
      name: 'Fourth block',
      duration: 30000
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REORDER_PROGRAM: {
      let blocks = [...state.blocks]
      blocks.splice(action.ev.newIndex, 0, blocks.splice(action.ev.oldIndex, 1)[0])
      return {
        ...state,
        blocks
      }
    }
    case RESIZE_BLOCK: {
      const {blockNr, newDuration} = action.payload
      let blocks = [...state.blocks]
      blocks[blockNr].duration = newDuration
      return {
        ...state,
        blocks
      }
    }


    default:
      return state
  }
}

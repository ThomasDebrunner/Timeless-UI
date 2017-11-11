import { guid } from '../../util'

const initialState = {
  blocks: [
    {
      id: 'a',
      name: 'First block',
      duration: 10000,
    },
    {
      id: 'b',
      name: 'Second block',
      duration: 12000,
    },
    {
      id: 'c',
      name: 'Third block',
      duration: 18000,
    },
    {
      id: 'd',
      name: 'Fourth block',
      duration: 30000,
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    // -------------------------------------------------------------------------------
    case 'REORDER_PROGRAM': {
      const blocks = [...state.blocks]
      blocks.splice(action.ev.newIndex, 0, blocks.splice(action.ev.oldIndex, 1)[0])
      return {
        ...state,
        blocks,
      }
    }
    // -------------------------------------------------------------------------------
    case 'RESIZE_BLOCK': {
      const { blockNr, newDuration } = action.payload
      const blocks = [...state.blocks]
      blocks[blockNr].duration = newDuration
      return {
        ...state,
        blocks,
      }
    }
    // -------------------------------------------------------------------------------
    case 'REMOVE_BLOCK': {
      const { blockNr } = action.payload
      const blocks = [...state.blocks]
      blocks.splice(blockNr, 1)
      return {
        ...state,
        blocks,
      }
    }
    // -------------------------------------------------------------------------------
    case 'ADD_BLOCK': {
      return {
        ...state,
        blocks: [...state.blocks, {
          id: guid(),
          name: 'New Block',
          duration: 10000,
        }],
      }
    }


    default:
      return state
  }
}

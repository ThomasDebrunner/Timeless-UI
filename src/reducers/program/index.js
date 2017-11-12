import { guid } from '../../util'
import store from '../../store'

const initialState = {
  blocks: [
    {
      id: 'a',
      name: 'First block',
      duration: 10000,
      frame: { '0-0': { lhand: 180, shand: 120 } },
      transition: [0.1, 0.1, 0.9, 0.9],
    },
    {
      id: 'b',
      name: 'Second block',
      duration: 12000,
      frame: {},
      transition: [0.1, 0.1, 0.9, 0.9],
    },
    {
      id: 'c',
      name: 'Third block',
      duration: 18000,
      frame: {},
      transition: [0.1, 0.1, 0.9, 0.9],
    },
    {
      id: 'd',
      name: 'Fourth block',
      duration: 30000,
      frame: {},
      transition: [0.1, 0.1, 0.9, 0.9],
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
          frame: {},
          transition: [0.1, 0.1, 0.9, 0.9],
        }],
      }
    }
    // -------------------------------------------------------------------------------
    case 'SET_ABSOLUTE': {
      const { selection, openBlockNr } = store.getState().ui
      const frame = { ...state.blocks[openBlockNr].frame }
      Object.keys(selection).forEach((key) => {
        if (!key) {
          return
        }
        if (action.payload.lhand) {
          frame[key] = { ...frame[key], lhand: action.payload.value }
        } else {
          frame[key] = { ...frame[key], shand: action.payload.value }
        }
      })
      const blocks = [...state.blocks]
      blocks[openBlockNr].frame = frame
      return {
        ...state,
        blocks,
      }
    }

    // -------------------------------------------------------------------------------
    case 'SET_TRANSITION': {
      const { openBlockNr } = store.getState().ui
      const blocks = [...state.blocks]
      blocks[openBlockNr].transition = action.payload
      return {
        ...state,
        blocks,
      }
    }


    default:
      return state
  }
}

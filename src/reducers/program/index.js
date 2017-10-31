import {
  REORDER_PROGRAM
} from '../../actions/types'

const initialState = {
  blocks: [
    {
      name: 'First block',
      duration: 10000
    },
    {
      name: 'Second block',
      duration: 12000
    },
    {
      name: 'Third block',
      duration: 18000
    },
    {
      name: 'Fourth block',
      duration: 30000
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REORDER_PROGRAM:
      let blocks = [...state.blocks]
      blocks.splice(action.ev.newIndex, 0, blocks.splice(action.ev.oldIndex, 1)[0])
      return {
        ...state,
        blocks
      }
    default:
      return state
  }
}

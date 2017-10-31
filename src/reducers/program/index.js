import {
  INCREMENT
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
    case INCREMENT:
      return {
        ...state
      }
    default:
      return state
  }
}

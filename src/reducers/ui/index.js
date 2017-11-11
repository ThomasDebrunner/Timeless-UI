const initialState = {
  scale: 100,
  playPosition: 10000,
  editorOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    // -------------------------------------------------------------------------------
    case 'ZOOM_OUT': {
      return {
        ...state,
        scale: Math.min(state.scale + 10, 200),
      }
    }
    // -------------------------------------------------------------------------------
    case 'ZOOM_IN': {
      return {
        ...state,
        scale: Math.max(state.scale - 10, 50),
      }
    }
    // -------------------------------------------------------------------------------
    case 'SET_PLAY_POSITION': {
      return {
        ...state,
        playPosition: action.payload,
      }
    }
    // -------------------------------------------------------------------------------
    case 'OPEN_EDITOR': {
      return {
        ...state,
        editorOpen: true,
      }
    }
    // -------------------------------------------------------------------------------
    case 'CLOSE_EDITOR': {
      return {
        ...state,
        editorOpen: false,
      }
    }

    default:
      return state
  }
}

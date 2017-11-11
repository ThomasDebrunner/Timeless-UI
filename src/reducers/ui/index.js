const initialState = {
  scale: 100,
  playPosition: 10000,
  editorOpen: true,
  selection: {},
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
    // -------------------------------------------------------------------------------
    case 'TOGGLE_SELECTION': {
      const key = `${action.payload.coordinates.x}-${action.payload.coordinates.y}`
      return {
        ...state,
        selection: action.payload.reset ? { [key]: !state.selection[key] } : { ...state.selection, [key]: !state.selection[key] },
      }
    }

    default:
      return state
  }
}

export const reorderProgram = (ev) => ({
  type: 'REORDER_PROGRAM',
  ev
})

export const fetchInfo = (userId) => ({
  type: 'FETCH_INFO',
  userId
})

export const resizeBlock = (payload) => ({
  type: 'RESIZE_BLOCK',
  payload
})

export const removeBlock = (payload) => ({
  type: 'REMOVE_BLOCK',
  payload
})

export const addBlock = () => ({
  type: 'ADD_BLOCK'
})


export const zoomIn = () => ({
  type: 'ZOOM_IN',
})

export const zoomOut = () => ({
  type: 'ZOOM_OUT'
})


export const setPlayPosition = (payload) => ({
  type: 'SET_PLAY_POSITION',
  payload
})

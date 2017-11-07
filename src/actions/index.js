import {
  REORDER_PROGRAM,
  FETCH_INFO,
  RESIZE_BLOCK,
  REMOVE_BLOCK
} from './types'

export const reorderProgram = (ev) => ({
  type: REORDER_PROGRAM,
  ev
})

export const fetchInfo = (userId) => ({
  type: FETCH_INFO,
  userId
})

export const resizeBlock = (payload) => ({
  type: RESIZE_BLOCK,
  payload
})

export const removeBlock = (payload) => ({
  type: REMOVE_BLOCK,
  payload
})

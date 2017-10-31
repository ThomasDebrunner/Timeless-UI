import {
  REORDER_PROGRAM,
  FETCH_INFO
} from './types'

export const reorderProgram = (ev) => ({
  type: REORDER_PROGRAM,
  ev
})

export const fetchInfo = (userId) => ({
  type: FETCH_INFO,
  userId
})

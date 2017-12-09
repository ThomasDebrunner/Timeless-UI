import { setPlayPosition } from '../actions'

let timer = null

export const startTimer = () => (dispatch, getState) => {
  timer = setInterval(() => dispatch(setPlayPosition(getState().ui.playPosition + 40)), 40)
}

export const stopTimer = () => () => {
  clearInterval(timer)
}


export default {
  startTimer,
  stopTimer,
}

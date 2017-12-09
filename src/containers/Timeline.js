import { connect } from 'react-redux'
import { reorderProgram, addBlock, zoomIn, zoomOut, play, pause, reset } from '../actions'
import { startTimer, stopTimer } from '../thunk/timing'
import Timeline from '../components/Timeline'

const mapStateToProps = state => ({
  blocks: state.program.blocks,
  playPosition: state.ui.playPosition,
  scale: state.ui.scale,
  isPlaying: state.ui.isPlaying,
})

const mapDispatchToProps = dispatch => ({
  reorderProgram: ev => dispatch(reorderProgram(ev)),
  addBlock: () => dispatch(addBlock()),
  zoomIn: () => dispatch(zoomIn()),
  zoomOut: () => dispatch(zoomOut()),
  play: () => { dispatch(startTimer()); dispatch(play()) },
  pause: () => { dispatch(stopTimer()); dispatch(pause()) },
  reset: () => { dispatch(stopTimer()); dispatch(reset()) },

})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timeline)

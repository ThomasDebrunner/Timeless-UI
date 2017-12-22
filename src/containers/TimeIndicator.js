import { connect } from 'react-redux'
import { setPlayPosition } from '../actions'
import TimeIndicator from '../components/TimeIndicator'

const mapStateToProps = state => ({
  scale: state.ui.scale,
  playPosition: state.ui.playPosition,
  programLength: state.program.blocks.reduce((sum, curr) => sum + curr.duration, 0),
})

const mapDispatchToProps = dispatch => ({
  setPlayPosition: pos => dispatch(setPlayPosition(pos)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeIndicator)

import { connect } from 'react-redux'
import {setPlayPosition} from '../actions'
import TimeIndicator from '../components/TimeIndicator'

const mapStateToProps = state => ({
  scale: state.ui.scale,
  playPosition: state.ui.playPosition
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setPlayPosition: (pos) => dispatch(setPlayPosition(pos))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeIndicator)

import { connect } from 'react-redux'
import Editor from '../components/Editor'
import { setAbsolute, setTransition } from '../actions'

const mapStateToProps = state => ({
  blockNr: state.ui.openBlockNr,
  frame: state.program.blocks[state.ui.openBlockNr].frame,
  transition: state.program.blocks[state.ui.openBlockNr].transition,
  lhandSliderPosition: state.ui.lhandSliderPosition,
  shandSliderPosition: state.ui.shandSliderPosition,
})

const mapDispatchToProps = dispatch => ({
  setAbsolute: (value, lhand) => dispatch(setAbsolute({ value, lhand })),
  setTransition: values => dispatch(setTransition(values)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor)

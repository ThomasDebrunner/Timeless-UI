import { connect } from 'react-redux'
import { reorderProgram } from '../actions'
import Timeline from '../components/Timeline'

const mapStateToProps = state => ({
  blocks: state.program.blocks
})

const mapDispatchToProps = dispatch => ({
  reorderProgram: (ev) => dispatch(reorderProgram(ev))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)

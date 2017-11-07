import { connect } from 'react-redux'
import { reorderProgram, addBlock, zoomIn, zoomOut } from '../actions'
import Timeline from '../components/Timeline'

const mapStateToProps = state => ({
  blocks: state.program.blocks
})

const mapDispatchToProps = dispatch => ({
  reorderProgram: (ev) => dispatch(reorderProgram(ev)),
  addBlock: () => dispatch(addBlock()),
  zoomIn: () => dispatch(zoomIn()),
  zoomOut: () => dispatch(zoomOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timeline)

import { connect } from 'react-redux'
import { resizeBlock, removeBlock, openEditor } from '../actions'
import Block from '../components/Block'

const mapStateToProps = state => ({
  scale: state.ui.scale,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  resizeBlock: newDuration => dispatch(resizeBlock({ blockNr: ownProps.idx, newDuration })),
  removeBlock: () => dispatch(removeBlock({ blockNr: ownProps.idx })),
  openEditor: () => dispatch(openEditor()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Block)

import { connect } from 'react-redux'
import { resizeBlock, removeBlock } from '../actions'
import Block from '../components/Block'

const mapStateToProps = state => ({
  scale: state.ui.scale,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  resizeBlock: newDuration => dispatch(resizeBlock({ blockNr: ownProps.idx, newDuration })),
  removeBlock: () => dispatch(removeBlock({ blockNr: ownProps.idx })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Block)

import { connect } from 'react-redux'
import { resizeBlock } from '../actions'
import Block from '../components/Block'

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  resizeBlock: (newDuration) => dispatch(resizeBlock({blockNr: ownProps.idx, newDuration}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block)

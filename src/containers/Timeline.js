import { connect } from 'react-redux'
import { increment, fetchInfo } from '../actions'
import Timeline from '../components/Timeline'

const mapStateToProps = state => ({
  blocks: state.program.blocks
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment(10)),
  fetchInfo: () => dispatch(fetchInfo('123'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)

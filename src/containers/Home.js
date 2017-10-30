import { connect } from 'react-redux'
import { increment, fetchInfo } from '../actions'
import Home from '../components/Home'

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment(10)),
  fetchInfo: () => dispatch(fetchInfo('123'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

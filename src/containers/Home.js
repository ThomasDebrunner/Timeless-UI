import { connect } from 'react-redux'
import { fetchInfo } from '../actions'
import Home from '../components/Home'

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  fetchInfo: () => dispatch(fetchInfo('123')),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

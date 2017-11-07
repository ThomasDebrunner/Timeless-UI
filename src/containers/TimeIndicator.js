import { connect } from 'react-redux'
import {} from '../actions'
import TimeIndicator from '../components/TimeIndicator'

const mapStateToProps = state => ({
  scale: state.ui.scale
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeIndicator)

import { connect } from 'react-redux'
import { toggleSelection } from '../actions'
import Display from '../components/Display'

const mapStateToProps = state => ({
  selection: state.ui.selection,
})

const mapDispatchToProps = dispatch => ({
  toggleSelection: payload => dispatch(toggleSelection(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display)

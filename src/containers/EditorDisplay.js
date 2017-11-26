import { connect } from 'react-redux'
import { rangeToSelection, rangeSelect, toggleSingleNoReset, toggleSingleReset } from '../actions'
import Display from '../components/Display'

const mapStateToProps = state => ({
  selection: state.ui.selection,
})

const mapDispatchToProps = dispatch => ({
  rangeToSelection: coordinates => dispatch(rangeToSelection(coordinates)),
  rangeSelect: coordinates => dispatch(rangeSelect(coordinates)),
  toggleSingleNoReset: coordinates => dispatch(toggleSingleNoReset(coordinates)),
  toggleSingleReset: coordinates => dispatch(toggleSingleReset(coordinates)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display)

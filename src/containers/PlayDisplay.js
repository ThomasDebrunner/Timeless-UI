import { connect } from 'react-redux'
import Display from '../components/Display'
import { getFrame } from '../util'

const mapStateToProps = state => ({
  frame: getFrame(state.program.blocks, state.ui.playPosition),
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display)

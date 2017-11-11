import { connect } from 'react-redux'
import { fetchInfo, closeEditor } from '../actions'
import Home from '../components/Home'

const mapStateToProps = state => ({
  editorOpen: state.ui.editorOpen,
})

const mapDispatchToProps = dispatch => ({
  fetchInfo: () => dispatch(fetchInfo('123')),
  closeEditor: () => dispatch(closeEditor()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

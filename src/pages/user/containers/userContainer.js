import userPage from '../components/userPage'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions  from '../../../store/actions/home';

const mapStateToProps = state => ({
  count: state.HomeReducer.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add: actions.add
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(userPage);
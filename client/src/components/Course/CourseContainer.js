import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Course from './Course';
import { authActions as appAuth} from '@app/store/appAuth';

/**
 * mapStateToProps is word for promise
 * this function will connect state in redux to component props
 * @param {*} state state variable in reudx
 */
const mapStateToProps = (state) => ({
    basket: state.appAuth.userInfo.codilist
});
/**
 * mapStateToProps is word for promise
 * this function will connect state in redux to component props
 * @param {*} state state variable in reudx
 */
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateUsercodilist:appAuth.updateUserData.updateUsercodilist
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Course);

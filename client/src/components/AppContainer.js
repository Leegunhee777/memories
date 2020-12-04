import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { authActions } from '@app/store/appAuth';
import App from './App';

const mapStateToProps = (state) => ({
    currentRoute: state.router.location.pathname,
    isSignedIn: !!state.appAuth.authInfo.token,
    userToken: state.appAuth.authInfo.token,
    isShow: state.appAuth.configInfo.isShowDialForMap
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateIsShowDial: authActions.updateConfigData.updateIsShowDialForMap
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

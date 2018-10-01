import { connect } from "react-redux";
import Login from "../components/Login";
import { setLogin } from "../actions/login";

const mapStatToProps = store => {
    return {
        user: store.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (login, pass) => dispatch(setLogin(login, pass))
    };
};

export default connect(
    mapStatToProps,
    mapDispatchToProps
)(Login);

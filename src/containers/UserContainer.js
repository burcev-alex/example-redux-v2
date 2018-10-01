import { connect } from "react-redux";
import { UserInfo } from "../components/UserInfo";

const mapStatToProps = store => {
    return {
        user: store.user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStatToProps,
    mapDispatchToProps
)(UserInfo);

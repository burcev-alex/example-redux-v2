import { connect } from "react-redux";
import { Profile } from "../components/Profile";

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
)(Profile);

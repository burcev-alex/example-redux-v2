import React, { Component } from "react";

export class UserInfo extends Component {
    renderProfile = () => {
        const { user } = this.props;
        if (typeof user !== "undefined") {
            if (user.login.length === 0) {
                return <div className="noname">Noname</div>;
            } else {
                return <div className="noname">{user.login}</div>;
            }
        } else {
            return <div className="noname">Noname</div>;
        }
    };
    render() {
        return this.renderProfile();
    }
}

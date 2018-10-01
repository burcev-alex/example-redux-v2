import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Profile extends Component {
    render() {
        const { user } = this.props;
        if (user.login.length > 0) {
            return <div>{this.props.user.login} успешно авторизованы!</div>;
        } else {
            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {}
                    }}
                />
            );
        }
    }
}

import React, { Component } from "react";

export default class Login extends Component {
    constructor(state) {
        super(state);

        this.state = {
            login: "",
            pass: ""
        };
    }
    onChangeInput = event => {
        const { id, value } = event.currentTarget;
        this.setState({
            [id]: value
        });
    };
    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.login, this.state.pass);
    };
    render() {
        if (this.props.user.login.length === 0) {
            return (
                <form onSubmit={this.onSubmit}>
                    Login:{" "}
                    <input
                        type="text"
                        id="login"
                        value={this.state.name}
                        onChange={this.onChangeInput}
                    />{" "}
                    <br />
                    Pass:{" "}
                    <input
                        type="password"
                        id="pass"
                        value={this.state.pass}
                        onChange={this.onChangeInput}
                    />{" "}
                    <br />
                    <input type="submit" />
                </form>
            );
        } else {
            return <div>Вы успешно авторизованы!</div>;
        }
    }
}

import React, { Component } from "react";
import { NavigatorBar } from "./NavigatorBar";
import UserContainer from "../containers/UserContainer";

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavigatorBar />
                <UserContainer />
            </div>
        );
    }
}

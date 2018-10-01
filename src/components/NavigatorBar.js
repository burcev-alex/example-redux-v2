import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavigatorBar extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

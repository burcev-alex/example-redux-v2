import React, { Component } from "react";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import About from "../components/About";
import Home from "../components/Home";
import ProfileContainer from "../containers/ProfileContainer";
import LoginContainer from "../containers/LoginContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact component={Home} path="/" />
                            <Route component={Content} path="/news" />
                            <Route component={About} path="/about" />
                            <Route component={LoginContainer} path="/login" />
                            <Route
                                component={ProfileContainer}
                                path="/profile"
                            />
                        </Switch>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

import React, { Component } from "react";
import "./App.css";
import { routes } from "../routes.js";
import { NavigationBar } from "../components/NavigationBar";
import ProductItems from "../components/ProductItems";
import { connect } from "react-redux";
import { setName } from "../actions/page";

class App extends Component {
    render() {
        const { id, name } = this.props.user;
        const products = [
            {
                id: 1,
                title: "111"
            },
            {
                id: 2,
                title: "222"
            }
        ];
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <NavigationBar routes={routes} />
                <p className="App-intro">
                    {name} = {id}
                </p>
                <ProductItems items={products} />
            </div>
        );
    }
}

const mapStateToProp = store => {
    console.log(store);
    return {
        user: store.user
    };
};

const mapDispatchToProp = dispatch => {
    return {
        setNameAction: name => dispatch(setName(name))
    };
};

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(App);

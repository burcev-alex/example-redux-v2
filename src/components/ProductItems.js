import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Product from "./Product";

export default class ProductItems extends Component {
    getProducts = lists => {
        return lists.map(item => {
            return <Product key={item.id} info={item} />;
        });
    };
    render() {
        const { items } = this.props;
        console.log(items);
        return <div className="items">{this.getProducts(items)}</div>;
    }
}

ProductItems.PropTypes = {
    items: PropTypes.array.isRequired
};

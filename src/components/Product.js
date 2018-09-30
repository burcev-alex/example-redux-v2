import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Product extends Component {
    render() {
        return <div>PRODUCT INFO</div>;
    }
}

Product.propTypes = {
    info: PropTypes.array.isRequired
};

export default Product;

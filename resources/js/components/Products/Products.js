import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AddProduct from "../Products/AddProduct";
import ViewProducts from "./ViewProducts";

export class Products extends Component {
    render() {
        return (
            <Router>
                <div className="products-area">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/addProduct">
                                Add Products{" "}
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to="/viewProducts"
                            >
                                Lists of Products
                            </Link>
                        </li>
                    </ul>
                    <Route exact path="/addProduct" component={AddProduct} />
                    <Route
                        exact
                        path="/viewProducts"
                        component={ViewProducts}
                    />
                </div>
            </Router>
        );
    }
}

export default Products;

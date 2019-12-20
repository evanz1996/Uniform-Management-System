import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AddProduct from "../Products/AddProduct";
import ListsofProducts from "./ListsofProducts";

export class Products extends Component {
    render() {
        return (
            <Router>
                <div className="products-area">
                    <ul className="nav nav-tabs">
                        <li className="nav-item active">
                            <Link className="nav-link active " to="/addProduct">
                                Add Products
                                
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to="/listsOfProducts"
                            >
                                Lists of Products
                            </Link>
                        </li>
                    </ul>
                    <Route exact path="/addProduct" component={AddProduct} />
                    <Route
                        exact
                        path="/listsOfProducts"
                        component={ListsofProducts}
                    />
                </div>
            </Router>
        );
    }
}

export default Products;

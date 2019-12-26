import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Products from "../components/Products/Products";
import EditProduct from "../components/Products/EditProduct";
import ListsofProducts from "./Products/ListsofProducts";
import AddProduct from "./Products/AddProduct";

class Header extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-sm  fixed-top">
                    <div className="container">
                        <Link className="navbar-brand " to="/">
                            Unifo
                        </Link>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="collapsibleNavId"
                        >
                            <ul className="nav justify-content">
                                <li className="nav-item active">
                                    <Link className="navlink" to="/">
                                        About Us &nbsp; &nbsp;
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="navlink" to="/services">
                                        Services &nbsp; &nbsp;
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navlink" to="/portfolio">
                                        Portfolio &nbsp; &nbsp;
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="navlink" to="/products">
                                        Products &nbsp; &nbsp;
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Route exact path="/" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/products/add" component={AddProduct} />
                <Route exact path="/products/edit:id" component={EditProduct} />
            </Router>
        );
    }
}

export default Header;

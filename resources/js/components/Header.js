import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Career from "../components/Career/Career";
import Products from "../components/Products/Products";

class Header extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand ">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-white">
                            <li className="nav-item active">
                                <Link className="navlink" to="/">
                                    About Us
                                </Link>
                            </li>
                            &nbsp;
                            <li className="nav-item">
                                <Link className="navlink" to="/services">
                                    Services
                                </Link>
                            </li>{" "}
                            &nbsp;
                            <li className="nav-item">
                                <Link className="navlink" to="/careers">
                                    Career
                                </Link>
                            </li>{" "}
                            &nbsp;
                            <li className="nav-item">
                                <Link className="navlink" to="/products">
                                    Products
                                </Link>
                            </li>{" "}
                            &nbsp;
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            ></input>
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>

                <Route exact path="/" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/careers" component={Career} />
                <Route exact path="/products" component={Products} />
            </Router>
        );
    }
}

export default Header;

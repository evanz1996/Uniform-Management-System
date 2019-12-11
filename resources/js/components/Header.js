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
                <nav className="navbar navbar-expand-sm  fixed-top">
                    <div class="container">
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
                                    <Link className="navlink" to="/careers">
                                        Career &nbsp; &nbsp;
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
                <Route exact path="/careers" component={Career} />
                <Route exact path="/products" component={Products} />
            </Router>
        );
    }
}

export default Header;

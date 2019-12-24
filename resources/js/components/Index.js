import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Footer /> */}
            </div>
        );
    }
}

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}

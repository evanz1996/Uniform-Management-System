import React, { Component } from "react";

class ViewProducts extends Component {
    render() {
        return (
            <div>
                <div className="viewProduct">
                    <div className="product-title">
                        <h1 className="product-main-title">
                            {" "}
                            Sets of Uniforms
                        </h1>
                    </div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src="..."
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <p className="card-text">.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">
                                        Check Details
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src="..."
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <p className="card-text">.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">
                                        Check Details
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src="..."
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <p className="card-text">.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">
                                        Check Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProducts;

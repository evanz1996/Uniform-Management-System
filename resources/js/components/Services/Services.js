import React, { Component } from "react";

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <div className="container text-center w40">
                    <h2 className="service-title">We Offer</h2>
                    <p>
                        We make it easy for you to order content from thousands
                        of professional writers. See how our website content
                        creation services can help you.
                    </p>
                    <div className="mx-auto heading-line"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 text-center ">
                                <img
                                    className="service-web-design"
                                    src="/images/laptop2.png"
                                    alt="web-laptop"
                                ></img>
                                <h4 className="py-3"> Web Design</h4>
                                <p className="pb-9">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>

                            <div className="col-lg-4 text-center">
                                <img
                                    className="service-mobile"
                                    src="/images/phone2.png"
                                    alt="mobile"
                                ></img>
                                <h4 className="py-3"> Mobile Design</h4>
                                <p className="pb-5">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>

                            <div className="col-lg-4 text-center">
                                <img
                                    className="service-bootstrap"
                                    src="/images/bootstrap.png"
                                    alt="bootstrap"
                                ></img>
                                <h4 className="py-3"> Bootsrap</h4>
                                <p className="pb-5">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>

                            <div className="col-lg-4 text-center">
                                <img
                                    className="service-css"
                                    src="/images/Css.png"
                                    alt="Css"
                                ></img>
                                <h4 className="py-3"> Web Design</h4>
                                <p className="pb-5">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>

                            <div className="col-lg-4 text-center">
                                <img
                                    className="service-html"
                                    src="/images/html5.png"
                                    alt="html"
                                ></img>
                                <h4 className="py-3"> Web Design</h4>
                                <p className="pb-5">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <img
                                    className="service-bug-fixing"
                                    src="/images/bug-fixing.png"
                                    alt="bug-fixing"
                                ></img>
                                <h4 className="py-3"> Web Design</h4>
                                <p className="pb-5">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;

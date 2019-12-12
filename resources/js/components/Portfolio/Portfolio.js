import React, { Component } from "react";

export class Portfolio extends Component {
    render() {
        return (
            <div className="career container-fluid">
                <div className=" text-center">
                    <h1 className="career-title"> Portfolio</h1>
                    <div className="mx-auto heading-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 p-0 career-image ">
                        <div className="filter"></div>
                        <img
                            className="school-uniform-girls "
                            src="/images/school-uniform1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-3 p-0 image-content">
                        <div className="text-center">
                            <h4 className="py-5 girls-uniform">
                                Girls uniform
                            </h4>

                            <img
                                src="/images/fb3.png "
                                className="facebook-logo"
                                alt="fb"
                            />
                            <img
                                src="/images/instagram.png"
                                className="instagram-logo"
                                alt="instagram"
                            />
                            <img
                                src="/images/twitter.png"
                                className="twitter-logo"
                                alt="twitter"
                            />
                        </div>
                    </div>

                    <div className="col-lg-3 p-0 career-image ">
                        <div className="filter"></div>
                        <img
                            className="Pe-uniform-boys"
                            src="/images/PE-uniform-boys.jpg"
                            alt="PEboys"
                        />
                    </div>
                    <div className="col-lg-3 p-0 image-content">
                        <div className=" text-center">
                            <h4 className=" py-5 PE-boys">PE uniform</h4>
                            <img
                                src="/images/fb3.png "
                                className="facebook-logo"
                                alt="fb"
                            />
                            <img
                                src="/images/instagram.png"
                                className="instagram-logo"
                                alt="instagram"
                            />
                            <img
                                src="/images/twitter.png"
                                className="twitter-logo"
                                alt="twitter"
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 p-0 image-content">
                        <div className="text-center">
                            <h4 className=" py-5  rotc">Rotc Uniform</h4>
                            <img
                                src="/images/fb3.png "
                                className="facebook-logo"
                                alt="fb"
                            />
                            <img
                                src="/images/instagram.png"
                                className="instagram-logo"
                                alt="instagram"
                            />
                            <img
                                src="/images/twitter.png"
                                className="twitter-logo"
                                alt="twitter"
                            />
                        </div>
                    </div>

                    <div className="col-lg-3 p-0 career-image ">
                        <div className="filter"></div>
                        <img
                            className="Rotc"
                            src="/images/ROTC.jpg"
                            alt="Rotc"
                        />
                    </div>
                    <div className="col-lg-3 p-0 image-content">
                        <div className="text-center">
                            <h4 className=" py-5 cheerdance-uniform">
                                Cheerdance uniform
                            </h4>
                            <img
                                src="/images/fb3.png "
                                className="facebook-logo"
                                alt="fb"
                            />
                            <img
                                src="/images/instagram.png"
                                className="instagram-logo"
                                alt="instagram"
                            />
                            <img
                                src="/images/twitter.png"
                                className="twitter-logo"
                                alt="twitter"
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 p-0 career-image ">
                        <div className="filt    er"></div>
                        <img
                            className="cheerdance"
                            src="/images/Cheerdancegirls.jpg"
                            alt="cheerdance"
                        />
                    </div>
                </div>
                <div className="bottom-padding"></div>
            </div>
        );
    }
}

export default Portfolio;

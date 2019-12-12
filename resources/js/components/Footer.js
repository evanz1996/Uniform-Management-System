import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-class py-5">
                    <div className="footer-title text-center py-2 ">Unifo</div>
                    <div className=" mx-auto"></div>
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-9 text-center offset-lg-2">
                                <p>
                                    Lorem ipsum, or lipsum as it is sometimes
                                    known, is dummy text used in laying out
                                    print, graphic or web designs. The passage
                                    is attributed to an unknown typesetter in
                                    the 15th century who is thought to have
                                    scrambled parts of Cicero's De Finibus
                                    Bonorum et Malorum for use in a type
                                    specimen book.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="column ">
                                <div className="column"> Support</div>
                                <div className="column"> Events</div>
                                <div className="column"> Portfolio</div>
                                <div className="column"> Our Team</div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright text-center ">
                        <div className="footer-border-line border-top"></div>
                        Copyright 2019 <br />
                        Powered by: Vanessa Valenzuela
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

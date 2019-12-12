import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div className="about-us container">
                <div class="row">
                    <div className="col-lg-6 ">
                        <img
                            src="/images/student-in-uniform.png"
                            className="about-image2"
                        />
                    </div>

                    <div className="col-lg-6 ">
                        <img
                            src="/images/PE-uniform.png"
                            className="about-image "
                        />
                    </div>

                    <div className="about-content ">
                        <h1 className="about-title text-center py-5">
                            Welcome to Unifo!
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 py-5">
                        <h1>We are:</h1>
                        <p>
                            Unifo <br />a professional tailoring shop, offering
                            the best affordable prices uniforms to our students
                            here in the Philippine Academy. Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-lg-6 py-5">
                        <div>
                            <img
                                src="/images/measuring.jpg"
                                className="about-who-are-we"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

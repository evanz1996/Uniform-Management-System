import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_information: {
                name: "",
                price: "",
                quantity: "",
                images: ""
            }
        };
        this.onChangeCategoryHandler = this.onChangeCategoryHandler.bind(this);
        this.onSubmitCategoryHandler = this.onSubmitCategoryHandler.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                "http://127.0.0.1:8000/products/edit/" +
                    this.props.match.params.id
            )

            .then(response => console.log(response));
    }

    onChangeCategoryHandler(e) {
        const { value } = e.target;
        let newCategoryInformation = {
            ...this.state.category_information,
            [e.target.name]: value
        };
        this.setState({
            category_information: newCategoryInformation
        });
        console.log(this.state);
    }

    onSubmitCategoryHandler(e) {
        e.preventDefault();
        console.log(this.state.category_information);

        let categoryInformation = this.state.category_information;

        axios
            .post(`http://127.0.0.1:8000/products/store`, categoryInformation)
            .then(response => console.log(response));
    }

    render() {
        return (
            <Router>
                <div className="editProduct">
                    <Link className="back-buttons" to="/products">
                        Back
                    </Link>
                    <h2> Update product</h2>
                    <form onSubmit={this.onSubmitCategoryHandler}>
                        <div className="form-group">
                            <label> Category Name</label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                id="category_name"
                                onChange={this.onChangeCategoryHandler}
                                onSubmit={this.onSubmitCategoryHandler}
                            ></input>
                        </div>

                        <div className="form-group on">
                            <label> Price</label>
                            <input
                                name="price"
                                type="text"
                                className="form-control"
                                id="category_price"
                                onChange={this.onChangeCategoryHandler}
                                onSubmit={this.onSubmitCategoryHandler}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label> Quantity</label>
                            <input
                                name="quantity"
                                type="text"
                                className="form-control"
                                id="category_quantity"
                                onChange={this.onChangeCategoryHandler}
                                onSubmit={this.onSubmitCategoryHandler}
                            ></input>
                        </div>

                        <div className="form-group">
                            <label> Upload Image</label>
                            <input
                                name="images"
                                type="text"
                                className="form-control"
                                id="category_images"
                                onChange={this.onChangeCategoryHandler}
                                onSubmit={this.onSubmitCategoryHandler}
                            ></input>
                        </div>

                        <button type="submit" className="btn btn-primary ">
                            submit
                        </button>
                    </form>
                </div>
            </Router>
        );
    }
}

export default EditProduct;

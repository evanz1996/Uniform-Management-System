import React, { Component } from "react";

import axios from "axios";

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            category_information: {
                category_name: "",
                category_price: "",
                category_quantity: "",
                category_images: ""
            }
        };
        this.onChangeCategoryHandler = this.onChangeCategoryHandler.bind(this);
        this.onSubmitCategoryHandler = this.onSubmitCategoryHandler.bind(this);
    }

    onChangeCategoryHandler(e) {
        const { name, value } = e.target;

        let newCategoryInformation = {
            ...this.state.category_information,
            [name]: value
        };

        this.setState({ category_information: newCategoryInformation });
        console.log(name);
    }

    onSubmitCategoryHandler(e) {
        e.preventDefault();
        console.log(this.state.category_information);

        axios
            .post("http://127.0.0.1:8000/api/products/store", {
                newCategoryInformation: this.state.category_information
            })
            .then(response => console.log(response));
    }

    render() {
        return (
            <div className="AddProduct">
                <form onSubmit={this.onSubmitCategoryHandler}>
                    <div className="form-group">
                        <label> Category Name</label>
                        <input
                            name="category_name"
                            // value={this.state.category_name}
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
                            name="category_price"
                            value={this.state.category_price}
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
                            name="category_quantity"
                            value={this.state.category_quantity}
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
                            name="category_images"
                            value={this.state.category_images}
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
        );
    }
}

export default AddProduct;

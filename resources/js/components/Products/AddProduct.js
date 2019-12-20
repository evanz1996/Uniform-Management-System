import React, { Component } from "react";

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            category_name: "",
            category_price: "",
            category_quantity: "",
            category_images: ""
        };
    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        const {
            category_name,
            category_price,
            category_quantity,
            category_images
        } = this.state;

        return (
            <div className="AddProduct">
                <div className="form-group">
                    <label> Category Name</label>
                    <input
                        name="category_name"
                        type="text"
                        className="form-control"
                        id="category_name"
                        onChange={this.changeHandler}
                    ></input>
                </div>

                <form>
                    <div className="form-group on">
                        <label> Price</label>
                        <input
                            name="category_price"
                            type="text"
                            className="form-control"
                            id="category_price"
                            onChange={this.changeHandler}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label> Quantity</label>
                        <input
                            name="category_quantity"
                            type="text"
                            className="form-control"
                            id="category_quantity"
                            onChange={this.changeHandler}
                        ></input>
                    </div>

                    <div className="form-group">
                        <label> Image</label>
                        <input
                            name="category_images"
                            type="text"
                            className="form-control"
                            id="category_images"
                            onChange={this.changeHandler}
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

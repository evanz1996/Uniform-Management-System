import React, { Component } from "react";
class AddProduct extends Component {
    render() {
        return (
            <div className="AddProduct">
                <div className="form-group">
                    <label htmlFor="category_name"> Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category_name"
                    ></input>
                    <label htmlFor="category_name"> Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category_price"
                    ></input>
                    <label htmlFor="category_name"> Quantity</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category_quantity"
                    ></input>
                    <label htmlFor="category_name"> Image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category_price"
                    ></input>
                </div>
                <button type="submit" className="btn btn-primary ">
                    submit
                </button>
            </div>
        );
    }
}

export default AddProduct;

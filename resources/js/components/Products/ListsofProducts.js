import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class ListsofProducts extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/products").then(response => {
            this.setState({ categories: response.data });
        });
    }

    onDelete(category_id) {
        axios
            .delete("http://127.0.0.1:8000/products/delete/" + category_id)
            .then(response => {
                console.log("deleted");
            });
    }
    render() {
        return (
            <div>
                <div className="lists-of-products">
                    <div className="product-title">
                        <h1 className="product-main-title">Sets of Uniforms</h1>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Images</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map(category => {
                                return (
                                    <tr key={category.id}>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>{category.quantity}</td>
                                        <td>{category.price}</td>
                                        <td>{category.images}</td>
                                        <td>{category.created_at}</td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={this.onDelete.bind(
                                                    this,
                                                    category.id
                                                )}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListsofProducts;

import React, { Component, useState } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCity, setProductCity] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const addProductName = (event) => {
        setProductName(event.target.value)
    }
    const addProductPrice = (event) => {
        setProductPrice(event.target.value)
    }
    const addProductCity = (event) => {
        setProductCity(event.target.value)
    }
    const addProductDescription = (event) => {
        setProductDescription(event.target.value)
    }
    return (
        <BrowserRouter>

            <form className="container">
                <h1>Add Product</h1>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input class="form-control" onChange={addProductName} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <input class="form-control" onChange={addProductPrice} />
                </div>
                <div class="mb-3">
                    <label class="form-label">City</label>
                    <input class="form-control" onChange={addProductCity} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <input class="form-control" onChange={addProductDescription} />
                </div>
                <div className="d-flex justify-content-around">
                <button type="button" class="btn btn-success">Product image 1</button>
                <button type="button" class="btn btn-success">Product image 2</button>
                <button type="button" class="btn btn-success">Product image 3</button>
                </div>
                <button class="btn  btn-dark">Envoyer
                </button>
            </form>

        </BrowserRouter>
    )
}
export default AddProduct;

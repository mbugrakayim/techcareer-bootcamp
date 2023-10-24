import React, { useState } from "react";
import ProductService from "../Services/ProductService";
import { Link, useNavigate } from "react-router-dom";

function AddProductPage() {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [unitsInStock, setUnitsInStock] = useState(0);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const saveProduct = (e) => {
    e.preventDefault();
    const product = { name, unitPrice, unitsInStock };

    if (!validateForm()) {
      setError(true);
      return;
    }

    ProductService.createProducts(product)
      .then((res) => {
        console.log(res.data);
        alert("Succes");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateForm = () => {
    if (name === "" || unitPrice === 0 || unitsInStock === 0) {
      setMessage("Boş Alan Bırakmayın..");
      return false;
    } else if (isNaN(unitPrice)) {
      setMessage("Unit Price Sayı Girin");
      return false;
    } else if (isNaN(unitsInStock)) {
      setMessage("Stock Sayı Girin");
      return false;
    }
    return true;
  };

  return (
    <div style={{marginTop:'10%'}}>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Product</h3>
            <div className="card-body">
              {error ? <div className="alert alert-danger">{message}</div> : null}
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">unitPrice:</label>
                  <input
                    type="text"
                    placeholder="unitPrice"
                    name="unitPrice"
                    className="form-control"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Stock:</label>
                  <input
                    type="text"
                    placeholder="Stock"
                    name="Stock"
                    className="form-control"
                    value={unitsInStock}
                    onChange={(e) => setUnitsInStock(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2" style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
                  <button
                    className="btn btn-success"
                    onClick={(e) => saveProduct(e)}
                  >
                    Save
                  </button>
                  <Link to="/" className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;

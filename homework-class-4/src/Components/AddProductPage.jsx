import React, { useState } from "react";
import ProductService from "../Services/ProductService";
import { Link, useNavigate } from "react-router-dom";

function AddProductPage() {
  const [Name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [Stock, setStock] = useState(0);
  const navigate = useNavigate();

  const saveProduct = (e) => {
    e.preventDefault();
    const product = { Name, unitPrice, Stock };
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


  return (
    <div>
      <div>
        <div>
          <div>
            <h3>Add Product</h3>
            <div>
              <form>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    className="form-control"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div >
                  <label>unitPrice:</label>
                  <input
                    type="number"
                    placeholder="unitPrice"
                    name="unitPrice"
                    className="form-control"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label>Stock:</label>
                  <input
                    type="number"
                    placeholder="Stock"
                    name="Stock"
                    className="form-control"
                    value={Stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <button
                  onClick={(e) => saveProduct(e)}
                >
                  Save
                </button>
                <Link to="/">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;

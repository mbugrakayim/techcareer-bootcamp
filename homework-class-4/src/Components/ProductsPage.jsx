import React, { useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import "../App.css"

function ProductsPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    ProductService.getProducts()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = (id) => {
    let result = window.confirm("Are You Sure ?");

    if (result) {
      ProductService.deleteProducts(id)
        .then((res) => {
          getAllProduct();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container" style={{marginTop : "15px"}} >
      <h2 className="text-center">Product List</h2>
      <div  className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr key={product.id} className={`${product.unitsInStock === 0 ? "red" :"white"}`}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    style={{ marginLeft: "10px" }}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsPage;

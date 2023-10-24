import React, { useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import "../App.css";

function ProductsPage() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // geçerli sayfa.. başlangıc
  const [perPage, setPerPage] = useState(10); // her sayfada kaç veri olacak 
  const indexOfLast = currentPage * perPage;  // page de listelenecek dataların indexlerini hesaplama
  const indexOfFirst = indexOfLast - perPage;
  const currentPost = product.slice(indexOfFirst, indexOfLast); // slice metotu ile data index e göre parcalayıp yeni bir data oluşturur
  const npage = Math.ceil(product.length / perPage); // kaç sayfa olacak onun hesabı
  const numbers = [...Array(npage + 1).keys()].slice(1);  // boş bir array uzunlu sayfasayısı +1 (index 0 dan başladığı içi). keys() methodu boş arayı gezinmemizi sağlıyor. slice() 1. indexden başlaması için

  const changePage = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    await ProductService.getProducts()
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
    <div className="container" style={{ marginTop: "15px" }}>
      <h2 className="text-center">Product List</h2>
      <div className="row">
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
            {currentPost.map((product) => (
              <tr
                key={product.id}
                className={`${product.unitsInStock === 0 ? "red" : "white"}`}
              >
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
        <div>
          <ul
            className="pagination"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {numbers.map((num) => (
              <li
                key={num}
                className={`page-item ${currentPage === num ? "active" : ""}`}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changePage(num)}
                >
                  {num}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;

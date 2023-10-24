import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link to="/" className="navbar-brand">
              Home
            </Link>

            <Link to="/products" className="navbar-brand">
              Product Page
            </Link>
            <Link to="/AddProducts" className="navbar-brand">
              Add Product
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;

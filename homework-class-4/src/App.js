import ProductsPage from "./Components/ProductsPage";
import HeaderComponent from "./Components/HeaderComponent";
import AddProductPage from "./Components/AddProductPage";
import { Route, Router, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/AddProducts" element={<AddProductPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

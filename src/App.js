import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsPage from "./pages/products/ProductsPage";
import CartPage from "./pages/cart/CartPage";
import Wrapper from "./components/HOC/Wrapper";
import Nav from "./components/nav/Nav";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ProductDetail from "./pages/productdetail/ProductDetail";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="products" />} />
        {/* products page */}
        <Route path="/products" element={<ProductsPage />} />
        {/* cart page */}
        <Route path="/cart" element={<CartPage />} />
        {/* product detail page */}
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* checkout page */}
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* search page */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

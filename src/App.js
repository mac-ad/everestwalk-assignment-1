import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsPage from "./pages/products/ProductsPage";
import CartPage from "./pages/cart/CartPage";
import Wrapper from "./components/HOC/Wrapper";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Nav />
      </Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="products" />} />
        {/* products page */}
        <Route path="/products" element={<ProductsPage />} />
        {/* cart page */}
        <Route path="/cart" element={<CartPage />} />
        {/* product detail page */}
      </Routes>
    </div>
  );
}

export default App;

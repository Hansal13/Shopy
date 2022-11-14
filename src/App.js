import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

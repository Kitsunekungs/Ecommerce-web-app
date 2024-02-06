import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ViewPage from "./pages/ViewPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "./App.css";
import UnauthenticatedApp from "./pre-draft/UnauthenticatedApp.jsx";
import AuthenticatedApp from "./pre-draft/AuthenticatedApp.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/details" element={<ViewPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="Register" element={<RegisterPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import AuthHomePage from "./AuthHomePage";
import CartPage from "./CartPage";
import ViewPage from "./ViewPage";
import ProductPage from "./ProductPage";
import "../App.css";
import NotFoundPage from "./NotFoundPage";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/AuthHomePage" element={<AuthHomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;

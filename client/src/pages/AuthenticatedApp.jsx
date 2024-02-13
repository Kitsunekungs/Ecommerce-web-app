import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import CartPage from "./CartPage";
import ViewPage from "./ViewPage";
import ProductPage from "./ProductPage";
import "../App.css";
import NotFoundPage from "./NotFoundPage";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/post/view/:postId" element={<ViewPage />} />
        <Route path="/prduct/:postId" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;

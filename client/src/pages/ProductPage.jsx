import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

function ProductPage() {
  const [] = useState([]);
  return (
    <div>
      <div className="app-wrapper">
        <Navbar />
        <h1 class="flex-wrap justify-start content-start">products</h1>
      </div>
    </div>
  );
}

export default ProductPage;

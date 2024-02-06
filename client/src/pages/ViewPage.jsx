import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

function ViewPage() {
  const [] = useState([]);
  return (
    <div>
      <div className="app-wrapper">
        <Navbar />
        <h1 class="flex-wrap justify-start content-start">view</h1>
      </div>
    </div>
  );
}

export default ViewPage;

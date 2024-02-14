import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.jsx";

function AuthHomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [greeting, setGreeting] = useState();

  return (
    <div>
      <div className="app-wrapper">
        <Navbar />
        <h1 class="flex-wrap justify-start content-start">Pok-Pok</h1>
      </div>
    </div>
  );
}

export default AuthHomePage;

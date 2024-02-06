import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import NavbarWithoutAuth from "./NavbarWithoutAuth";

function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [greeting, setGreeting] = useState();

  return (
    <div>
      <div className="app-wrapper">
        <NavbarWithoutAuth />
        <h1 className="app-title">Pok-Pok</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default HomePage;

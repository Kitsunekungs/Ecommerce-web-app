import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NavWithoutAuth() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  return (
    <nav className="p-6 max-w-sm mxtext-3xl font-bold underline-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="text-xl font-medium text-black">POK-POK</div>
        <ul className="menu">
          <a>Home</a>-<a>Products</a>-
          <div className="bg-gray-800">
            <div className="border-black">
              <label>
                <input
                  type="text"
                  placeholder="let's go!"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
              </label>
            </div>
          </div>
          -<a>carts</a> -
          <div className="login-button" onClick={() => Navigate(`/login`)}>
            <span>login</span>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavWithoutAuth;

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import hammer from "../assets/hammer.png";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  // const [searchResult, setSearchResult] = useState([]);
  // useEffect(() => {
  //   getInfo();
  // }, [setSearch]);

  // const getInfo = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4000/products?keywords=${search}`
  //     );
  //     setSearchResult(response.data.data);
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.log("Error fetching data");
  //   }
  // };

  return (
    <nav className="bg-gray-800 box-border">
      <div className="flex flex-row max-w max-h justify-between items-center mx-auto p-5">
        <div
          to="/AuthHomePage"
          href="#"
          onClick={() => navigate(`/AuthHomePage`)}
          className="flex border-box rounded-full border-solid border-1 p-3 bg-black hover:bg-violet-600 text-white active:bg-violet-700"
        >
          <img src={hammer} className="w-5 h-5" />
          <span> POK!</span>
        </div>

        <div class="absolute flex box-border right-0 ">
          <div className="flex box-border pr-4 text-white relative">
            <InputGroup>
              <Input
                className=""
                variant="filled"
                placeholder="let's go!"
                size="sm"
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <InputRightElement>
                <Search2Icon className="" varient="solid" />
              </InputRightElement>
            </InputGroup>
          </div>
          <a
            href="#"
            class="px-4 py-2 text-sm text-gray-400   hover:text-violet-600 "
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            onClick={() => navigate(`/products`)}
          >
            Products
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm text-gray-400  hover:text-violet-600 "
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
            onClick={() => navigate(`/cart`)}
          >
            Cart
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm text-gray-400  hover:text-violet-600 "
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

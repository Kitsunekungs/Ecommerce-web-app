import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import hammer from "../assets/hammer.png";

function UnauthNavbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  return (
    <nav className="bg-gray-800 box-border">
      <div className="relative box-border max-w flex flex-row justify-between flex-wrap items-center mx-auto p-5">
        <Link
          to="/"
          href="#"
          onClick={() => navigate(`/`)}
          className="flex border-box rounded-full border-solid border-1 p-3 bg-black hover:bg-violet-600 text-white active:bg-violet-700"
        >
          <img src={hammer} className="w-5 h-5" />
          <span> POK!</span>
        </Link>

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
            onClick={() => navigate(`/login`)}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default UnauthNavbar;

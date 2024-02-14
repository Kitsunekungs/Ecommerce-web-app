import { useState } from "react";
import { useAuth } from "../contexts/authentication";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import UnauthNavbar from "../components/UnauthNavbar.jsx";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      username,
      password,
    });
  };
  return (
    <div className="bg-gray-300 min-h-screen">
      <div>
        <UnauthNavbar />
      </div>
      <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center">
        <div>
          <h1 className="flex box-border pb-5">Login Page</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="flex box-border pb-3">
            <label>
              Username
              <InputGroup>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username here"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  value={username}
                />
              </InputGroup>
            </label>
          </div>
          <div className="box">
            <label>
              Password
              <InputGroup>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password here"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />
              </InputGroup>
            </label>
          </div>
          <br />
          <div className="flex justify-between box-border pt-3">
            <button
              type="submit"
              href="#"
              class="flex box-border rounded bg-slate-700 px-4 py-2 text-sm text-gray-400  hover:text-violet-600 "
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2"
            >
              Login
            </button>
            <button
              class="flex box-border 
              rounded bg-slate-700  px-4 py-2 text-sm text-gray-400  hover:text-violet-600 "
              onClick={() => navigate(`/register`)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

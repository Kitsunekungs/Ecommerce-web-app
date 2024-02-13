import { useState } from "react";
import { useAuth } from "../contexts/authentication";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar.jsx";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

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
        <Navbar />
      </div>
      <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center">
        <div>
          <h1>Login Page</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="box-border">
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
          <div className="input-container">
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
          <div className="form-actions">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

import { useState } from "react";
import { useAuth } from "../contexts/authentication";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import UnauthNavbar from "../components/UnauthNavbar";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      firstName,
      lastName,
    };
    register(data);
  };
  return (
    <div className="bg-gray-300 min-h-screen">
      <div>
        <UnauthNavbar />
      </div>
      <div className="mx-auto flex box-border pt- min-h-screen w-full flex-col items-center justify-center">
        <h1 className="flex box-border pb-5">Sign Up</h1>
        <hr />
        <form className="register-form" onSubmit={handleSubmit}>
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
          <div className="flex box-border pb-3">
            <label>
              Password
              <InputGroup>
                <Input
                  id="password"
                  name="password"
                  type="text"
                  placeholder="Enter password here"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />
              </InputGroup>
            </label>
          </div>
          <div className="flex box-border pb-3">
            <label>
              First Name
              <InputGroup>
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Enter first name here"
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                  value={firstName}
                />
              </InputGroup>
            </label>
          </div>
          <div className="flex box-border pb-3">
            <label>
              Last Name
              <InputGroup>
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Enter last name here"
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                  value={lastName}
                />
              </InputGroup>
            </label>
          </div>
          <div className="flex box-border justify-center pt-5">
            <button
              type="submit"
              className="flex
              box-border
              rounded
              bg-slate-700
              px-4
              py-2
              text-sm
              text-gray-400
              hover:text-violet-600
            "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

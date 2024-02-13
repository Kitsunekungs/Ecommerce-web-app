import { useState } from "react";
import { useAuth } from "../contexts/authentication";

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
    <div className="register-form-container">
      <form className="register-form" onSubmit={handlesubmit}>
        <h1>Sign Up</h1>
        <div className="input-comtainer">
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              placeholder=""
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Password
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Enter password here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            First Name
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Enter first name here"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
              value={firstName}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Last Name
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Enter last name here"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              value={lastName}
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;

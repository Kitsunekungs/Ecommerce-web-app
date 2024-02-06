import { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div classNAme="register-form-container">
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
              value="usename"
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
              value={firstname}
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
              value={lastname}
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

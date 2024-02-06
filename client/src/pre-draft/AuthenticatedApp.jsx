import { Routes, Route } from "react-router-dom";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;

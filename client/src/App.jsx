import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ViewPage from "./pages/ViewPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "./App.css";
import { useAuth } from "./contexts/authentication";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;

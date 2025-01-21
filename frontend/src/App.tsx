import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { LinksProvider } from "./components/LinksContext";
import Login from "./pages/users/auth/Login";
import Signup from "./pages/users/auth/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Templates from "./pages/Template/Template";
import TemplateDetail from "./pages/Template/TemplateDetail";
import LinksDisplay from "./components/LinkDisplay";
import LinkForm from "./components/Forms/Form";

const App: React.FC = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/templates/") &&
    location.pathname !== "/templates";

  return (
    <>
      <div>
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:id" element={<TemplateDetail />} />
          <Route
            path="/links"
            element={
              <div>
                <LinksDisplay />
                <LinkForm />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <LinksProvider>
      <Router>
        <App />
      </Router>
    </LinksProvider>
  );
};

export default AppWrapper;

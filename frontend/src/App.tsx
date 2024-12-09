import { BrowserRouter as Router, Routes, Route,useLocation  } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Templates from "./components/Template/Template";
import TemplateDetail from "./components/Template/TemplateDetail";

const App: React.FC =() =>  {
  const location = useLocation();

  // Condition to check if the current path is a template detail page
  const hideNavbar = location.pathname.startsWith('/templates/') && location.pathname !== '/templates';
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
        </Routes>
      </div>
    </>
  );
}
const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;



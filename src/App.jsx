import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home  from "./pages/Home";
import Signup from "./pages/Signup";
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        {/* Other routes */}
      </Routes>

    </Router>
  );
};

export default App;

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

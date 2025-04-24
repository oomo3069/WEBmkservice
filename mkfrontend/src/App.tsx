
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import About from './pages/about';
import Service from './pages/service';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Footer from "./components/footer";
import ResetPassword from "./pages/ResetPassword";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;

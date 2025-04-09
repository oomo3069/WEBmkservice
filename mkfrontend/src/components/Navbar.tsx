import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Users } from "./iconuser";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <h2>MKSERVICE<i>Thepharuk</i></h2>
        </Link>
      </div>

      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-center">
          <Link to="/">หน้าแรก</Link>
          <Link to="/service">บริการ</Link>
          <Link to="/about">เกี่ยวกับ</Link>
          <Link to="/shop">ร้านค้า</Link>
          <Link to="/contact">ติดต่อ</Link>
        </div>
        <div className="nav-right">
          <Link to="/profile"><Users /></Link>
          <Link to="/login">เข้าสู่ระบบ</Link>
          <Link to="/register">สมัครสมาชิก</Link>
        </div>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={isMenuOpen ? "bar cross1" : "bar"}></div>
        <div className={isMenuOpen ? "bar cross2" : "bar"}></div>
        <div className={isMenuOpen ? "bar cross3" : "bar"}></div>
      </div>
    </nav>
  );
};

export default Navbar;

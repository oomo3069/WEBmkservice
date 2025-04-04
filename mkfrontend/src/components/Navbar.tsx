import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
      <Link to="/"> <h2>MKSERVICE<i>Teparuk</i></h2></Link>
      </div>
      <div className="nav-center">
        <Link to="/">หน้าแรก</Link>
        <Link to="/service">บริการ</Link>
        <Link to="/about">เกี่ยวกับเรา</Link>
        <Link to="/shop">ร้านค้า</Link>
        <Link to="/">ติดต่อ</Link>
      </div>
      <div className="nav-right">
        <Link to="/profile">โปรไฟล์</Link>
        <Link to="/login">เข้าสู่ระบบ</Link>
        <Link to="/register">สมัครสมาชิก</Link>
      </div>
    </nav>
  );
};

export default Navbar;

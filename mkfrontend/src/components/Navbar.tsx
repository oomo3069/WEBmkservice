import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
            <Link to="/" style={{ margin: "0 10px" }}>🏠 หน้าแรก</Link>
            <Link to="/profile" style={{ margin: "0 10px" }}>👤 โปรไฟล์</Link>
            <Link to="/login" style={{ margin: "0 10px" }}>🔑 เข้าสู่ระบบ</Link>
            <Link to="/register" style={{ margin: "0 10px" }}>📝 สมัครสมาชิก</Link>
    </nav>
  );
};

export default Navbar;

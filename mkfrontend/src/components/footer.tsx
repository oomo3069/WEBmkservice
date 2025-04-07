import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/pponb2003/" target="_blank" rel="noopener noreferrer">
          <img src="./icon/icons8-facebook-50.png" width={35} height={35}></img>
        </a>
        <a href="https://github.com/oomo3069" target="_blank" rel="noopener noreferrer">
          <img src="./icon/icons8-github-48.png" width={35} height={35}></img>
        </a>
      </div>
      <p>© 2025 MK SERVICE. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


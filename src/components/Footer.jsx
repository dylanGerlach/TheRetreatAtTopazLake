import "./Footer.css";
import logo from "../assets/R.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2025 Topaz Lake Property. All rights reserved.
        </p>
        <img src={logo} alt="Topaz Lake" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;

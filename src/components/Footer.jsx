import { NavLink } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 data-testid="footer-logo" className="footer__logo">
              Tasty treats.
            </h3>
            <p className="footer__tagline">
              Delicious food delivered to your doorstep.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <nav className="footer__nav">
              <NavLink to="/" className="footer__link">
                Home
              </NavLink>
              <NavLink to="/about" className="footer__link">
                About
              </NavLink>
              <NavLink to="/contact" className="footer__link">
                Contact
              </NavLink>
            </nav>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Connect With Us</h4>
            <div className="footer__social">
              <a
                href="https://github.com/999-sachin"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <FiGithub />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <FiTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Tasty treats. All rights reserved.
          </p>
          <p className="footer__credits">
            Developed with ❤️ by{" "}
            <a
              href="https://github.com/999-sachin"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Team Sachin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

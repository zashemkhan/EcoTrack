import { FaFacebook, FaYoutube } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#138661] text-white rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-4">
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <PiXLogoBold size={25} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={25} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={25} />
          </a>
        </div>
      </nav>
      <div>
        <p>Your data is secure and accessible to everyone</p>
        <p>© {new Date().getFullYear()} EcoTrack</p>
      </div>
    </footer>
  );
};

export default Footer;

import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-inner">

        <div>
          <span className="eyebrow">
            Ready when you are
          </span>

          <h2>
            Build the future
            <br />
            with confidence.
          </h2>
        </div>

        <a
          className="footer-link"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aigonicinnovpvtltd@gmail.com&su=Inquiry%20from%20AiGONIC%20Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          aigonicinnovpvtltd@gmail.com
          <ArrowUpRight size={19} />
        </a>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 AiGONIC Innovations Pvt Ltd
        </span>

        <span>
          Artificial Intelligence, Thoughtfully Applied.
        </span>

      </div>

    </footer>
  );
}

export default Footer;
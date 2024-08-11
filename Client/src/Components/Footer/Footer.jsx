import { useRef } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faProductHunt,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const ref = useRef();
  () =>
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  return (
    <>
      <hr />
      <div id="bot3">
        <div className="follow">
          <h5>Get connected with us on social networks:</h5>
          <div className="connect">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#ffffff" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ffffff" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#ffffff" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ color: "#ffffff" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faProductHunt}
              style={{ color: "#ffffff" }}
              size="xl"
            />
          </div>
        </div>
        <div id="b3first">
          <div id="feat">
            <div>
              <h4>Company</h4>
              <p>Careers</p>
              <p>Blogs</p>
              <p>Partner with Pharmacy</p>
              <h4>Our Services</h4>
              <p>Order Medicine</p>
              <p>Healthcare Products</p>
            </div>
            <div>
              <h4>Featured Categories</h4>
              <p>Covid Essentials</p>
              <p>Nutrition and Fitness Supplements</p>
              <p>Personal Care</p>
              <p>Ayurvedic Care</p>
              <p>Baby and Mom care</p>
              <p>Skin Care</p>
              <p>Diabetic Care</p>
              <p>Women Care</p>
              <p>Ortho Care</p>
            </div>
            <div>
              <h4>Need Help</h4>
              <p>Browse All Medicines</p>
              <p>FAQs</p>
              <h4>Policy Info</h4>
              <p>Privacy Policy</p>
              <p>Vulnerability Disclosure Policy</p>
              <p>Terms and condition</p>
              <p>Customer Support Policy</p>
              <p>Return Policy</p>
            </div>
          </div>
        </div>

        <div id="b3sec">
          <div id="pay">
            <h3>Our Payment Partners</h3>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg"
                alt="Payment Partner"
              />
            </span>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg"
                alt="Payment Partner"
              />
            </span>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg"
                alt="Payment Partner"
              />
            </span>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg"
                alt="Payment Partner"
              />
            </span>
          </div>
          <div id="copy">&copy; 2024 Pharmacy. All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

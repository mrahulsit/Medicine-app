import { Mobile } from "../assets/index.js";
import { useRef } from "react";
import { GooglePlayButton, AppGalleryButton } from "react-mobile-app-button";
import "../index.css";
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
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  () =>
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  return (
    <>
      <hr />
      <div id="bot1">
        <div>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/9ac2da37.svg?dim=0x72&dpr=1.25&q=100"
            alt="1 Lakh+ Products"
          />
          <h4 className="texth4">1 Lakh+ Products</h4>
          <p>
            We maintain strict quality controls on all our partner retailers, so
            that you always get standard quality products.
          </p>
        </div>
        <div>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/2f258fe0.svg?dim=0x72&dpr=1.25&q=100"
            alt="Secure Payment"
          />
          <h4 className="texth4">Secure Payment</h4>
          <p>100% secure and trusted payment protection</p>
        </div>
        <div>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/256fe591.svg?dim=0x72&dpr=1.25&q=100"
            alt="Easy Return"
          />
          <h4 className="texth4">Easy Return</h4>
          <p>
            We have a new and dynamic return window policy for medicines and
            healthcare items. Refer FAQs section for more details.
          </p>
        </div>
      </div>

      <div id="mob" ref={ref}>
        <div className="mobimg">
          <img src={Mobile} alt="mobile App" />
        </div>
        <div className="app">
          <div id="txt">Download the App for Free</div>
          <div className="log">
            <GooglePlayButton
              url={APKUrl}
              theme={"dark"}
              width={"23rem"}
              title="Install Mobile App"
              className={"custom-style"}
            />

            <AppGalleryButton
              url={IOSUrl}
              theme={"dark"}
              width={"23rem"}
              title="Install Mobile App"
              className={"custom-style"}
            />
          </div>
        </div>
      </div>

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
              <p>Partner with PharmEasy</p>
              <h4>Our Services</h4>
              <p>Order Medicine</p>
              <p>Healthcare Products</p>
              <p>Diagnostic Tests</p>
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
              <p>Browse All Molecules</p>
              <p>FAQs</p>
              <h4>Policy Info</h4>
              <p>Editorial Policy</p>
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
                src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg"
                alt="Payment Partner"
              />
            </span>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg"
                alt="Payment Partner"
              />
            </span>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg"
                alt="Payment Partner"
              />
            </span>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg"
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
                src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg"
                alt="Payment Partner"
              />
            </span>
            <span>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg"
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
          <div id="copy">© 2024 PharmEasy. All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

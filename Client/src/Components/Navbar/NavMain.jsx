import PharmacyLogo from "../../assets/PHARMACY.png";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCartShopping,
  faGift,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Login from "../../Pages/Login";
import { Navbar, Nav } from "react-bootstrap";

function NavMain() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="border-0 w-100"
        fixed="top"
      >
        <div className="container-fluid">
          <Link to="/">
            <div className="navbar-brand d-flex align-items-center">
              <img src={PharmacyLogo} alt="Pharmacy Logo" className="logo" />
              <div className="flex-slogan mt-1">
                <div>Pharmacy</div>
                <div>at every step</div>
              </div>
            </div>
          </Link>
          <div className="divider"></div>
          <Sidebar />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <div className="d-none d-lg-flex text-center align-items-center margin-navbar gap-5">
              <Nav.Item className="link-tag">
                <Link
                  to="#login"
                  className="text-decoration-none d-flex flex-row"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="item-text-color me-2"
                  />
                  <Login />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/footer"
                  className="text-decoration-none item-text-color"
                >
                  <FontAwesomeIcon
                    icon={faGift}
                    size="lg"
                    className="item-text-color me-2"
                  />
                  Gift cards
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/cart" className="text-decoration-none text-dark">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    className="item-text-color me-2"
                  />
                  Cart
                </Link>
              </Nav.Item>
            </div>

            <div className="d-lg-none mx-auto text-center">
              <Nav className="flex-column align-items-center">
                <Nav.Item className="">
                  <FontAwesomeIcon
                    icon={faMobile}
                    size="lg"
                    className="text-dark"
                  />
                  &nbsp;&nbsp;
                  <Link
                    to="/footer"
                    className="text-decoration-none text-light"
                  >
                    Download App
                  </Link>
                </Nav.Item>
                <Nav.Item className="px-3 mb-3 d-flex text-light align-items-center link-tag">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="text-white"
                  />
                  &nbsp;&nbsp;
                  <Link
                    to="#login"
                    className="text-decoration-none text-light ms-2"
                  >
                    <Login />
                  </Link>
                </Nav.Item>

                <Nav.Item className="d-flex flex-row">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    className="text-dark"
                  />
                  <Link to="/cart" className="text-decoration-none text-dark">
                    Cart
                  </Link>
                </Nav.Item>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="small-nav">
        <Link to="/medicine" className="link-item">
          Medicine
        </Link>
        <Link to="/healthcare" className="link-item">
          HealthCare
        </Link>
        <Link to="/plus" className="link-item">
          PLUS
        </Link>
        <Link to="/offers" className="link-item">
          Offers
        </Link>
        <Link to="/valuestore" className="link-item">
          Value Store
        </Link>
      </div>
    </div>
  );
}

export default NavMain;

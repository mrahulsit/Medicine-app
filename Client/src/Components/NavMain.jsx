import PharmacyLogo from "../assets/PHARMACY.png";
import "../index.css";
import Sidebar from "./Sidebar";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCartShopping,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import { Navbar, Nav } from "react-bootstrap";

function NavMain() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="border-0 navbar w-100"
        style={{ backgroundColor: "#00755E" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={PharmacyLogo} alt="Pharmacy Logo" className="logo" />
          </Link>
          <Sidebar />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <div className="d-none d-lg-flex text-center align-items-center text-white margin-navbar">
              <Nav.Item className="px-3">
                <FontAwesomeIcon
                  icon={faMobile}
                  size="lg"
                  className="text-white"
                />
                &nbsp;&nbsp;
                <Link
                  to="/footer"
                  className="text-decoration-none text-light ms-2"
                >
                  Download App
                </Link>
              </Nav.Item>
              <Nav.Item className="px-3 d-flex text-light align-items-center link-tag">
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
              <Nav.Item className="px-3">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="lg"
                  className="text-white"
                />
                &nbsp;&nbsp;
                <Link
                  to="/cart"
                  className="text-decoration-none text-light ms-2"
                >
                  Cart
                </Link>
              </Nav.Item>
            </div>
            <div className="d-lg-none mx-auto text-center text-white">
              <Nav className="flex-column align-items-center">
                <Nav.Item className="px-3 mb-3">
                  <FontAwesomeIcon
                    icon={faMobile}
                    size="lg"
                    className="text-white"
                  />
                  &nbsp;&nbsp;
                  <Link
                    to="/footer"
                    className="text-decoration-none text-light ms-2"
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
                <Nav.Item className="px-3 mb-3">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    className="text-white"
                  />
                  &nbsp;&nbsp;
                  <Link
                    to="/cart"
                    className="text-decoration-none text-light ms-2"
                  >
                    Cart
                  </Link>
                </Nav.Item>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="linktag py-3 flex-wrap justify-content-center">
        <Link to="/medicine" className="px-2 text-white link-item">
          Medicine
        </Link>
        <Link to="/healthcare" className="px-2 text-white link-item">
          HealthCare
        </Link>
        <Link to="/plus" className="px-2 text-white link-item">
          PLUS
        </Link>
        <Link to="/offers" className="px-2 text-white link-item">
          Offers
        </Link>
        <Link to="/valuestore" className="px-2 text-white link-item">
          Value Store
        </Link>
      </div>
    </>
  );
}

export default NavMain;

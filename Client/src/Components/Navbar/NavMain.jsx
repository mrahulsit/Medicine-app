import PharmacyLogo from "../../assets/PHARMACY.png";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCartShopping,
  faGift,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Dropdown, IconButton } from "rsuite";
import "rsuite/Dropdown/styles/index.css";
import MenuIcon from "@rsuite/icons/Menu";

function NavMain() {
  const renderIconButton = (props, ref) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={<MenuIcon />}
        circle
        color="green"
        appearance="primary"
      />
    );
  };
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
          <Navbar
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <div className="d-none d-lg-flex text-center align-items-center margin-navbar gap-5">
              <Nav.Item className="link-tag">
                <Link
                  to="/login"
                  className="text-decoration-none item-text-color"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="item-text-color me-2"
                  />
                  Hello,Log in
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
              <Dropdown title="Menu" placement="bottomEnd">
                <Dropdown.Item>
                  <Link to="/medicine" className="link-item">
                    Medicine
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/healthcare" className="link-item">
                    HealthCare
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/plus" className="link-item">
                    PLUS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/offers" className="link-item">
                    Offers
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/valuestore" className="link-item">
                    Value Store
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <div className="d-lg-none mx-auto text-center">
              <Nav className="flex-row align-items-center gap-3">
                <Nav.Item className="link-tag">
                  <Link
                    to="/login"
                    className="text-decoration-none item-text-color"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      size="lg"
                      className="item-text-color"
                    />
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-row">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    className="text-dark"
                  />
                  <Link
                    to="/cart"
                    className="text-decoration-none text-dark"
                  ></Link>
                </Nav.Item>
                <Dropdown renderToggle={renderIconButton} placement="bottomEnd">
                  <Dropdown.Item>
                    <Link to="/medicine" className="link-item">
                      Medicine
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/healthcare" className="link-item">
                      HealthCare
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/plus" className="link-item">
                      PLUS
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/offers" className="link-item">
                      Offers
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/valuestore" className="link-item">
                      Value Store
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </Nav>
            </div>
          </Navbar>
        </div>
      </Navbar>
    </div>
  );
}

export default NavMain;

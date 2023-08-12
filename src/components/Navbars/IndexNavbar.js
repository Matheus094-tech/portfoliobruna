import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span style={{ fontFamily: "Parisienne" }}>Cia Bruna Ferraz</span>
          </NavbarBrand>
          <Nav
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=5511991502640&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20sua%20escola!/"
                rel="noopener noreferrer"
                target="_blank"
                title="WhatsApp">
                <i class="lab la-whatsapp"></i>
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
                title="Github">
                <i class="lab la-instagram"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=5511991502640&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20sua%20escola!/"
                rel="noopener noreferrer"
                target="_blank"
                title="WhatsApp">
                <i class="lab la-whatsapp"></i>
                <p className="">WhatsApp</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
                title="Github">
                <i class="lab la-instagram"></i>
                <p className="">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

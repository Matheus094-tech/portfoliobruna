import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer-bruna">
      <Container>
        <Row style={{ placeContent: "center" }}>
          <Col md="3 text-center">
            <div class="d-flex justify-content-center">
              <a
                href="https://api.whatsapp.com/send?phone=5511964230207&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20sua%20escola!"
                target="_blank"
                class="iconeFooter">
                <i class="lab la-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/profbruferraz/"
                target="_blank"
                class="iconeFooter">
                <i class="lab la-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
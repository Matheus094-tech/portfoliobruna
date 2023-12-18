import React from "react";
import "./PageHeader.css";
// reactstrap components
import { Container } from "reactstrap";
import { TypeAnimation } from "react-type-animation";
export default function PageHeader() {
  return (
    <div className="page-header ">
      <Container>
        <div className="header fundo-um">
          <img
            alt="Studio de Dança Bruna Ferraz"
            className="img-fluid"
            src={require("assets/img/logo_gold.png")}
            style={{  }}
          />
        </div>
      </Container>
    </div>
  );
}

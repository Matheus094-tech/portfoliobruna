import React from "react";
import "./PageHeader.css";
// reactstrap components
import { Container } from "reactstrap";
import { TypeAnimation } from "react-type-animation";

export default function PageHeader() {
  return (
    <div className="page-header ">
      <img
        alt="..."
        style={{ position: "absolute", opacity: "0.4", left: "95px" }}
        src={require("assets/img/square1.png")}
      />
      <Container>
        <div className="header">
          <h1 className="titulo">Bruna Ferraz</h1>
          <p className="profissao">Professora de dança</p>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "Gerando experiências e criando conexões",
              1500,
              "",
              500,
              "Gerando",
              500,
              "Gerando experiências",
              500,
              "Gerando experiências e criando",
              500,
              "Gerando experiências e criando conexões",
              500,
              "",
              500,
            ]}
            wrapper="h2"
            className="subtitulo"
            repeat={Infinity}
          />
        </div>
        <img
          alt="..."
          style={{ position: "absolute", opacity: "0.4", top: "500px", left: "-5px" }}
          src={require("assets/img/square6.png")}
        />
      </Container>
    </div>
  );
}

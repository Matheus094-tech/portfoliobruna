import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// reactstrap components
import { Progress, Container, Row, Col } from "reactstrap";

export default function Habilidades() {
  useEffect(() => {
    AOS.init();
  }, []);

  const verBadge = (event) => {
    window.open(
      "https://www.credly.com/badges/91e81db6-d3ff-4bcd-a931-9eacbfb6874e"
    );
  };

  return (
    <div className="section" id="habilidades">
      <Container>
      <img
          alt="..."
          style={{ position: "absolute", opacity: "0.4", top: "500px", left: "-5px" }}
          src={require("assets/img/square6.png")}
        />
        <h2 data-aos="fade-up" className="title text-center text-white">
          Equipe
        </h2>
        <Row>
          <Col md="12">
            <div className="text-center mb-2" data-aos="fade-up-right">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/bruna.jpg")}
                style={{ width: "300px", height: "350px" , objectFit: 'cover'}}
              />

              </div>
              <div className="text-center" data-aos="fade-up-right">
                
              <span className="nomeEquipe mt-5">
                Bruna Ferraz
              </span>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

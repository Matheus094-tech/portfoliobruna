import React, { useEffect, Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./carrosel.css";

// reactstrap components
import { Container, UncontrolledCarousel, Row, Col } from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Curriculo() {
  useEffect(() => {
    AOS.init();
  }, []);

  const pathCurriculo = {
    position: "absolute",
    opacity: "0.02",
    left: "-5px",
  };

  const carouselItems = [
    {
      src: require("./../../assets/img/aula_1.jpg"),
      altText: "Slide 1",
      caption: "",
    },
    {
      src: require("./../../assets/img/aula_2.jpg"),
      altText: "Slide 2",
      caption: "",
    },
    {
      src: require("./../../assets/img/aula_3.jpg"),
      altText: "Slide 3",
      caption: "",
    },
    {
      src: require("./../../assets/img/aula_4.webp"),
      altText: "Slide 4",
      caption: "",
    },
  ];

  return (
    <div className="section cv" id="curriculo">
      <Container>
        <h2 data-aos="fade-up" className="text-center title text-white">
          Aulas
        </h2>
        <Row>
          <Col md="12">
            <UncontrolledCarousel
              items={carouselItems}
              indicators={true}
              autoPlay={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
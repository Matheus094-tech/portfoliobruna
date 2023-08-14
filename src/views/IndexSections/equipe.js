import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Habilidades() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="section" id="habilidades">
      <Container>
        <img
          alt="..."
          style={{
            position: "absolute",
            opacity: "0.4",
            top: "500px",
            left: "-5px",
          }}
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
                style={{ width: "300px", height: "350px", objectFit: "cover" }}
              />
            </div>
            <div className="text-center" data-aos="fade-up-right">
              <span className="nomeEquipe mt-5">Bruna Ferraz</span>
              <p className="mt-2 textoSobre">
                Licenciada em Educação Física e pedagogia, formada em ballet e
                jazz. Em processo para a Certificação de Professores do Método
                Vaganova pela Escola Bolshoi, em 2016 selecionada como solista
                pelo Festival Internacional Tanzolymp Berlim onde realizou
                cursos de ballet e jazz com grandes nomes da dança, premiada em
                diversos Festivais Nacionais, Regionais e Estaduais como
                bailarina. Bem avaliada e premiada também em festivais
                competitivos como professora e coreografa. Professora há 10 anos
                com grande experiencia na área infantil e infanto juvenil.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="cv">
          <Col md="6 mt-5">
            <h3 class="text-white" data-aos="fade-up">
              Educação
            </h3>
            <div class="cv-item" data-aos="fade-up">
              <h4>Educação Física</h4>
              <h5>2018-2022</h5>
              <p>
                <em>Universidade Cruzerio do Sul</em>
              </p>
            </div>
            <div class="cv-item" data-aos="fade-up">
              <h4>Pedagogia</h4>
              <h5>2023-2024</h5>
              <p>
                <em>Universidade Cruzerio do Sul</em>
              </p>
            </div>
          </Col>
          <Col md="6 mt-5">
            <h3 class="text-white" data-aos="fade-up">
              Profissional
            </h3>
            <div class="cv-item" data-aos="fade-up">
              <h4>Professora de Ballet e Coordenadora pedagógica</h4>
              <h5>2016 - Atualmente</h5>
              <p>
                <em>Associação Barbara Cristina</em>
              </p>
              <p>
                A Associação Barbaria Cristina é um projeto social onde atende
                mais de 400 crianças de 4 a 6 anos de baixa renda, incentivando
                a arte e o lazer na periferia de Guarulhos
              </p>
            </div>
            <div class="cv-item" data-aos="fade-up">
              <h4>Professora de Educação Física e Professora de ballet</h4>
              <h5>2021 - Atualmente</h5>
              <p>
                <em>Colégio Florescer </em>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

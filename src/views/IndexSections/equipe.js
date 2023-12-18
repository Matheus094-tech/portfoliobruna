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
    <div className="section fundo-um" id="equipe">
      <Container>
        <Row style={{ color: "#fffda8" }} className="cv">
          <h2 style={{ color: "#fffda8" }} data-aos="fade-up" className="title text-center">
            Modalidades
          </h2>
          <p style={{ fontSize: 22 }}>Conheça nossas modalidades:</p>
          <Col md="12 mt-3 text-center">
            <div class="cv-item " style={{ color: "#fffda8" }} data-aos="fade-up">
              <h4 className="" style={{ color: "#fffda8" }}>Ballet de formação</h4>
              <img
                alt="Ballet clássico"
                height={400}
                width={400}
                className="img-fluid"
                src={require("assets/img/formacao.jpeg")}
              />
            <p className="mt-3">
                Nossas aulas de Ballet de Formação são projetadas para construir uma base sólida nas técnicas clássicas.
                Ideal para crianças e adolescentes que desejam explorar a elegância e a disciplina do ballet.
              </p>
            </div>
            <div class="cv-item mt-5" style={{ color: "#fffda8" }} data-aos="fade-up">
              <h4 className="" style={{ color: "#fffda8" }}>Jazz Dance</h4>
              <img
                alt="Jazz Dance"
                height={400}
                width={400}
                className="img-fluid"
                src={require("assets/img/jazz.jpeg")}
              />
           <p className="mt-3">
                A energia e a vibração do Jazz Dance são exploradas em nossas aulas dinâmicas. Indicado para adolescentes
                e adultos que buscam liberdade de movimento e autoexpressão.
              </p>
            </div>
            <div class="cv-item mt-5" style={{ color: "#fffda8" }} data-aos="fade-up">
              <h4 className="" style={{ color: "#fffda8" }}>Ballet adulto</h4>
              <img
                alt="Jazz Dance"
                height={400}
                width={400}
                className="img-fluid"
                src={require("assets/img/adulto.jpeg")}
              />
       <p className="mt-3">
                Nunca é tarde para começar a dançar! O Ballet Adulto oferece uma experiência enriquecedora,
                promovendo flexibilidade, postura e bem-estar físico e menta.
              </p>
            </div>
            <div class="cv-item mt-5" style={{ color: "#fffda8" }} data-aos="fade-up">
              <h4 className="" style={{ color: "#fffda8" }}>Baby Class</h4>
              <img
                alt="Baby Class"
                height={400}
                width={400}
                className="img-fluid"
                src={require("assets/img/infantil.jpeg")}
              />
              <p className="mt-3">
                Para os nossos bailarinos(as) mais jovens, o Baby Class é uma introdução
                lúdica ao mundo da dança. Focada no desenvolvimento motor e na expressão criativa.
              </p>
            </div>
            <div class="cv-item mt-5" style={{ color: "#fffda8" }} data-aos="fade-up">
              <h4 className="" style={{ color: "#fffda8" }}>Psicomotricidade (Baby-Fraldinha)</h4>
              <img
                alt="Baby Class"
                height={400}
                width={400}
                className="img-fluid"
                src={require("assets/img/fraldinha.jpeg")}
              />
           <p className="mt-3">
                A Psicomotricidade é integrada às nossas aulas para promover o desenvolvimento físico, cognitivo e emocional. Adequada para desenvolver e preparar crianças apartir de 1 ano e 6 meses.
              </p>
            </div>
          </Col>
        </Row>
        <h2 style={{ color: "#fffda8" }} data-aos="fade-up" className="title text-center">
          Equipe
        </h2>
        <Row>
          <Col md="6">
            <div style={{ color: "#fffda8" }} className="text-center" data-aos="fade-up-right">
              <span className="nomeEquipe mt-5">Equipe de professores:</span>
              <p className="mt-2 textoSobre">
                Contamos com uma equipe de professores dedicados,
                comprometidos em nutrir o talento e o potencial de cada aluno. Com experiência e paixão, eles guiam nossos dançarinos em cada jornada de aprendizado.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div style={{ color: "#fffda8" }} className="text-center" data-aos="fade-up-right">
              <span className="nomeEquipe mt-5">Eventos e Espetáculos:</span>
              <p className="mt-2 textoSobre">
                Ao longo do ano, preparamos apresentações encantadoras, oportunidades para nossos alunos brilharem no palco e compartilharem sua paixão com amigos e familiares.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

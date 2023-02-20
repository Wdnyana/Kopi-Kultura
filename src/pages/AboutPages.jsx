import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Layouting from "../layouts/Layouting";

import { HomeBanner } from "../assets/img";

import Tim from "../data/tim.json";

import "../assets/css/About.css";

const AboutPages = () => {
  return (
    <Layouting>
      <section className="about mb-5">
        <Container>
          <div className="about__text">
            <h1 className="text-center about__title mb-4">
              <span className="sub-title">Tentang</span> Kopi{" "}
              <span className="sub-title">Kultura</span>
            </h1>
            <Row className="d-flex align-items-center">
              <Col className="about__item" xs="12" md="7">
                <div className="about__parent__img">
                  <Image
                    className="d-block w-100 about__img"
                    src={HomeBanner}
                  />
                </div>
              </Col>
              <Col className="about__item" xs="12" md="5">
                <p className="text-start about__desc ps-5">
                  Indoor coffee shop dilengkapi dengan AC, meja, sofa, dan kursi
                  yang nyaman. Konsep interior yang modern dan cozy membuat anda
                  merasa betah dan santai saat anda menikmati kopi dan makanan.
                  Desain interior yang menarik dan atmosfer yang nyaman membuat
                  indoor fasilitas yang ada menjadi tempat yang ideal.
                </p>
              </Col>
            </Row>
            <Row className="d-flex align-items-center mt-5">
              <Col className="about__item" xs="12" md="5">
                <p className="text-start about__desc ps-5">
                  Indoor coffee shop dilengkapi dengan AC, meja, sofa, dan kursi
                  yang nyaman. Konsep interior yang modern dan cozy membuat anda
                  merasa betah dan santai saat anda menikmati kopi dan makanan.
                  Desain interior yang menarik dan atmosfer yang nyaman membuat
                  indoor fasilitas yang ada menjadi tempat yang ideal.
                </p>
              </Col>
              <Col className="about__item" xs="12" md="7">
                <div className="about__parent__img">
                  <Image
                    className="d-block w-100 about__img"
                    src={HomeBanner}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div className="our__team">
            <h1 className="text-center about__title mb-4">
              Tim
              <span className="sub-title"> Kami</span>
            </h1>
            <Carousel>
              {Tim.tim.map((image, index) => (
                <Carousel.Item key={index}>
                  <div className="tim__carousel">
                    <Image
                      className="d-block w-100 tim__carousel__img"
                      src={image.img}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>
    </Layouting>
  );
};

export default AboutPages;

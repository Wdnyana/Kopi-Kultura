import React from "react";
import Layouting from "../layouts/Layouting";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

import Facility from "../data/facility.json";

import "../assets/css/Fasilitas.css";

const FasilitasPages = () => {
  return (
    <Layouting>
      <section className="facility mb-5">
        <Container>
          <div className="facility__text">
            <h1 className="text-center facility__title mb-4">Fasilitas</h1>
            <p className="text-center facility__desc">
              Kopi Kultura menawarkan berbagai fasilitas, termasuk ruangan
              indoor dan outdoor yang didesain dengan menarik dan nyaman
              sehingga Anda dapat menikmati kopi dan makanan Anda dengan betah.
              Anda dapat memilih untuk menikmati kopi di dalam ruangan dengan AC
              atau di luar ruangan yang menyajikan suasana segar. Kami
              memperhatikan desain ruangan dengan cermat untuk menciptakan
              suasana yang nyaman dan menyenangkan bagi tamu. Ruangan indoor
              dirancang dengan pencahayaan yang nyaman dan interior yang modern,
              sedangkan ruangan outdoor menyajikan pemandangan yang dihiasi
              dengan berbagai macam tanaman.
            </p>
          </div>

          <div className="facility__indoor">
            <h1 className="text-why-us__title mb-4">
              Fasilitas <span className="sub-title">Indoor</span>
            </h1>
            <Row className="d-flex align-items-center">
              <Col className="facility__item" xs="12" md="7">
                <Carousel>
                  {Facility.indoor.map((image, index) => (
                    <Carousel.Item key={index}>
                      <div className="facility__carousel">
                        <Image
                          className="d-block w-100 facility__carousel__img"
                          src={image.img}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col className="facility__item" xs="12" md="5">
                <p className="text-start facility__desc ps-5">
                  Indoor coffee shop dilengkapi dengan AC, meja, sofa, dan kursi
                  yang nyaman. Konsep interior yang modern dan cozy membuat anda
                  merasa betah dan santai saat anda menikmati kopi dan makanan.
                  Desain interior yang menarik dan atmosfer yang nyaman membuat
                  indoor fasilitas yang ada menjadi tempat yang ideal.
                </p>
              </Col>
            </Row>
          </div>

          <div className="facility__outdoor">
            <h1 className="text-why-us__title mb-4 text-end">
              Fasilitas <span className="sub-title">Outdoor</span>
            </h1>
            <Row className="d-flex align-items-center">
              <Col className="facility__item" xs="12" md="5">
                <p className="text-start facility__desc ps-5">
                  Indoor coffee shop dilengkapi dengan AC, meja, sofa, dan kursi
                  yang nyaman. Konsep interior yang modern dan cozy membuat anda
                  merasa betah dan santai saat anda menikmati kopi dan makanan.
                  Desain interior yang menarik dan atmosfer yang nyaman membuat
                  indoor fasilitas yang ada menjadi tempat yang ideal.
                </p>
              </Col>
              <Col className="facility__item" xs="12" md="7">
                <Carousel>
                  {Facility.outdoor.map((image, index) => (
                    <Carousel.Item key={index}>
                      <div className="facility__carousel">
                        <Image
                          className="d-block w-100 facility__carousel__img"
                          src={image.img}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Layouting>
  );
};

export default FasilitasPages;

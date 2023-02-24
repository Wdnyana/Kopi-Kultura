import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Layouting from "../layouts/Layouting";

import {
  FilosofLogo,
  ImageAbout_1,
  ImageAbout_2,
  ImageAbout_3,
} from "../assets/img";

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
            <Row className="my-5 align-items-center">
              <Col className="about__item" xs="12" md="12">
                <p className="text-center about__desc ps-5">
                  Terbentuknya Kopi Kultura berawal dari dua orang sahabat yang
                  saling bersepakat untuk menciptakan tempat yang nyaman untuk
                  semua orang yang ingin menikmati kopi. Kopi Kultura menjadi
                  wadah bagi setiap orang yang berbeda, dan menjadi tempat
                  berkumpul yang nyaman untuk saling bertukar pikiran, membangun
                  relasi serta koneksi, bercerita, bercanda, dan tertawa bersama
                  orang - orang terdekat. Karena hidup adalah proses, hidup
                  adalah perjuangan, Kopi Kultura tumbuh dan berkembang diiringi
                  dengan Budaya Pertanian yang mereka angkat dan menekankan
                  Hortikultura pada budidaya kopi sebagai apresiasi mereka untuk
                  menjadi lebih baik bersama menuju hal yang lebih positif.
                </p>
              </Col>
            </Row>

            <Row className="d-flex align-items-center my-5">
              <Col className="about__item" xs="12" md="5">
                <p className="text-start about__desc ps-5 mb-3">
                  - Gelas / Cangkir. <br />
                  &ensp; &ensp; Gelas / Cangkir merupakan tempat atau wadah
                  untuk menampung cairan dan juga merupakan benda mendasar untuk
                  menikmati kopi.
                  <br />
                  <br />
                  - Culture. <br />
                  &ensp; &ensp; Sesuai dengan namanya Kultura yang juga
                  merupakan serapan dari kata "Culture", Kopi Kultura menanamkan
                  aspek kebudayaan alam didalam nama mereka. Kopi Kultura
                  sendiri memiliki kiblat ke arah budaya pertanian -
                  Hortikultura.
                  <br />
                  &ensp; &ensp; Dengan menekankan Hortikultura pada budaya kopi,
                  dan menarik garis besar pada kebudayaan alam, Kopi Kultura
                  memiliki harapan yang besar untuk mengedepankan petani kopi
                  lokal sehingga dapat tumbuh dan berkembang kearah yang lebih
                  positif dan juga menjadi lebih baik bersama.
                </p>
              </Col>
              <Col className="about__item" xs="12" md="7">
                <div className="about__parent__img">
                  <Image
                    className="d-block w-100 about__img"
                    src={ImageAbout_1}
                  />
                </div>
              </Col>
            </Row>

            <Row className="d-flex align-items-center my-5">
              <Col className="about__item" xs="12" md="7">
                <div className="about__parent__img">
                  <Image
                    className="d-block w-100 about__img"
                    src={ImageAbout_2}
                  />
                </div>
              </Col>
              <Col className="about__item" xs="12" md="5">
                <p className="text-start about__desc ps-5 mb-3">
                  - Hortikultura. <br />
                  &ensp; &ensp; Hortikultura (horticulture) berasal dari bahasa
                  Latih hortus (tanaman kebun) dan culture/colere (budidaya)
                  tanaman kebun. Kemudian hortikultura digunakan secara lebih
                  luas bukan haya untuk budidaya di kebun.
                  <br />
                  <br />
                  - Coffee. <br />
                  &ensp; &ensp; Kopi merupakan hal mendasar namun sangat penting
                  dalam sebuah bisnis kopi. Pemilihan serta penyajian biji kopi
                  terbaik merupakan sebuah kunci sukses dari proses bagaimana
                  Kopi Kultura dapat menjadi coffee shop yang lebih baik.
                  <br />
                  &ensp; &ensp; Dengan semangat belajar, dan juga apresiasi
                  terhadap petani local, guna menciptakan hasil kopi terbaik,
                  dengan mengolah rasa pahit menjadi sesuatu yang dapat
                  dinikmati oleh semua kalangan masyarakat.
                </p>
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-5">
              <Col className="about__item" xs="12" md="5">
                <p className="text-start about__desc ps-5 mb-3">
                  - People. <br />
                  &ensp; &ensp; Manusia memiliki ambisi, pikiran, serta
                  tujuannya masing - masing. Seperti pada umumnya, manusia
                  merupakan makhluk sosial yang saling membutuhkan satu sama
                  lain.
                  <br />
                  &ensp; &ensp; Dalam hal ini Kopi Kultura memiliki harapan
                  ingin menjadi tempat bercakap yang nyaman untuk semua kalangan
                  masyarakat. Culture. <br />
                  <br />
                  - Comfortable. <br />
                  &ensp; &ensp; Tempat bernaung yang nyaman dan juga aman untuk
                  mereka yang sekedar ingin bersantai setelah lelah dengan hiruk
                  pikuk kota atau untuk mereka yang ingin bertegursapa dan juga
                  bercengkrama. <br />
                  &ensp; &ensp; Kopi Kultura memberi tempat bagi mereka yang
                  ingin memulai cerita baru atau bagi mereka yang ingin menambah
                  lembaran cerita cerita baru kedalam buku kehidupan mereka
                  dengan menanamkan budaya serta semangat yang baru.
                </p>
              </Col>
              <Col className="about__item" xs="12" md="7">
                <div className="about__parent__img">
                  <Image
                    className="d-block w-100 about__img"
                    src={ImageAbout_3}
                  />
                </div>
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-5">
              <h1 className="text-center about__title mb-4">
                Implementasi <span className="sub-title">Logo</span>
              </h1>
              <Col className="about__item" xs="12" md="12">
                <div className="about__parent__filosof">
                  <Image
                    className="d-block w-100 filosof__img"
                    fluid
                    src={FilosofLogo}
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

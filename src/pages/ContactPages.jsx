import React from "react";
import Layouting from "../layouts/Layouting";

import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Contact.css";

const ContactPages = () => {
  return (
    <Layouting>
      <section className="contact">
        <Container>
          <div className="contact__item">
            <h1 className="text-center about__title mb-4">
              Contact
              <span className="sub-title"> Information</span>
            </h1>
            <Row className="d-flex justify-content-between align-items-center">
              <Col className="item" xs="12" md="6">
                <div className="item__card mb-3 mb-md-0">
                  <h5 className="text__item">
                    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                    +62 878-6058-8617
                  </h5>
                </div>
              </Col>

              <Col className="item" xs="12" md="6">
                <div className="item__card mb-3 mb-md-0">
                  <h5 className="text__item">
                    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                    +62 822-3779-9529
                  </h5>
                </div>
              </Col>
            </Row>

            <Row className="d-flex justify-content-between align-items-center mt-2 mt-md-4">
              <Col className="item" xs="12" md="6">
                <div className="item__card mb-3 mb-md-0 ">
                  <h5 className="text__item ">
                    <FontAwesomeIcon icon={faClock} className="icon" /> 09am -
                    10pm
                  </h5>
                </div>
              </Col>

              <Col className="item" xs="12" md="6">
                <div className="item__card mb-3 mb-md-0 ">
                  <h5 className="text__item">
                    <FontAwesomeIcon icon={faUtensils} className="icon" />
                    Grab Food - KOPI KULTURA tabanan
                  </h5>
                </div>
              </Col>
            </Row>

            <Row className="d-flex justify-content-between align-items-center mt-2 mt-md-4">
              <Col className="item" xs="12" md="12">
                <div className="item__card mb-3 mb-md-0">
                  <h5 className="text__item">
                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    Jl. Ngurah Rai No.119, Banjar Anyar, Kec. Kediri, Kabupaten
                    Tabanan, Bali 82121
                  </h5>
                </div>
              </Col>
            </Row>

            <Row className="d-flex justify-content-between align-items-center mt-2 mt-md-4">
              <Col className="my-3" xs={12} md={12}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="Alamat Kopi Kultura"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4349307181033!2d115.14052950000001!3d-8.5541079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23b59b5ba20a1%3A0xea16783a52d5e15e!2sKopi%20kultura!5e0!3m2!1sen!2sid!4v1676856955845!5m2!1sen!2sid"
                    height="350"
                    frameBorder={0}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="embed-responsive-item"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Layouting>
  );
};

export default ContactPages;

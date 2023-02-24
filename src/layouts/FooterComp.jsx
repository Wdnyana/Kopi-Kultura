import "../assets/css/FooterComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col className="text-center mb-2 text-white">
            <h4 className="text-footer">Our Media Social</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a
              href="https://www.facebook.com/kopikultura/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6287860588617"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
            <a
              href="https://www.instagram.com/kopi.kultura/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className=" text-white">
              © 2023 All Rights Reserved. www.kopikultura.com
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterComp;

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
            <a href="###">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a href="###">
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
            <a href="###">
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Menu from "../data/allmenu.json";

// import Component
import Layouting from "../layouts/Layouting";
import CardMenu from "../components/CardMenu";

// import css
import "../assets/css/Index.css";
import "../assets/css/Home.css";

const MenuPages = () => {
  return (
    <Layouting>
      <section className="all__menu">
        <Container>
          <div className="menu__item text-center">
            <h1 className="menu__title mb-4">
              <span className="sub-title">Semua</span> Menu{" "}
              <span className="sub-title">Kami</span>
            </h1>

            {/* Coffee */}
            <div className="menu__content mt-3">
              <h2 className="text-start menu__title mb-4">Coffee</h2>
              <Row className="">
                {Menu.coffee.map((item) => (
                  <Col key={item.id} xs="12" md="6" xl="4">
                    <CardMenu item={item} />
                  </Col>
                ))}
              </Row>
            </div>

            {/* Non Coffee */}
            <div className="menu__content mt-5">
              <h2 className="text-start menu__title mb-4">
                Non <span className="sub-title">Coffee</span>
              </h2>
              <Row className="">
                {Menu.noncoffee.map((item) => (
                  <Col key={item.id} xs="12" md="6" xl="4">
                    <CardMenu item={item} />
                  </Col>
                ))}
              </Row>
            </div>

            {/* Makanan */}
            <div className="menu__content my-5">
              <h2 className="text-start menu__title mb-4">Makanan</h2>
              <Row className="">
                {Menu.makanan.map((item) => (
                  <Col key={item.id} xs="12" md="6" xl="4">
                    <CardMenu item={item} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </Layouting>
  );
};

export default MenuPages;

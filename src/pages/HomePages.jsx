import React, { useState } from "react";
import Layouting from "../layouts/Layouting";
import {
  Image,
  Button,
  Container,
  Row,
  Col,
  Carousel,
  Form,
} from "react-bootstrap";
import { HomeBanner } from "../assets/img";

import "../assets/css/Index.css";
import "../assets/css/Home.css";

// import json
import Data from "../data/menu.json";
// import card menu
import CardMenu from "../components/CardMenu";

const HomePages = () => {
  // button lihat lainnya
  const handleScroll = () => {
    const element = document.getElementById("target-section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  // Testimonial
  // array testimonial awal
  const initialTestimonials = [
    {
      id: 1,
      name: "Purwa Wiadnyana",
      message:
        "Saya senang hangout di kopi kultura karena suasana indoornya nyaman.",
    },
  ];

  // state untuk menyimpan testimonial
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  // state untuk menyimpan data input form
  const [formData, setFormData] = useState({ name: "", message: "" });

  // handle input form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = testimonials.length + 1;
    const newTestimonial = { id: newId, ...formData };
    setTestimonials([...testimonials, newTestimonial]);
    setFormData({ name: "", message: "" });
  };

  return (
    <Layouting>
      {/* banner */}
      <section className="section-banner">
        <Image
          src={HomeBanner}
          className="img-section-banner"
          alt="Hero Banner"
          fluid
        />
        <div className="text-banner">
          <h1 className="fw-bold text-center">
            Kumpul Tuang Rasa <br />
            <span className="fw-normal text-white">di</span> <br /> Kopi Kultura
          </h1>
          <Button
            className="btn-scroll-down mx-auto d-block mt-4"
            onClick={handleScroll}
          >
            Lihat Lainnya
          </Button>
        </div>
      </section>

      {/* why us */}
      <section className="text-why-us mt-5">
        <Container>
          <div className="text-why-us__item text-center">
            <h1 className="text-why-us__title mb-4">
              Why <span className="sub-title">Us</span>
            </h1>
            <p id="target-section" className="text-why-us__desc">
              Kami mengutamakan pelayanan yang ramah dan profesional. Tim kami
              dilatih untuk memberikan pelayanan yang baik dan memuaskan,
              sehingga Anda akan merasa nyaman dan senang selama berkunjung.
              Ruangan indoor kami didesain dengan AC yang nyaman dan cozy,
              sehingga Anda dapat menikmati secangkir kopi hangat atau makanan
              yang enak tanpa harus khawatir dengan suhu udara yang terlalu
              panas atau dingin. Sementara itu, ruangan outdoor menyajikan udara
              segar yang berisikan tanaman hias. Anda dapat menikmati secangkir
              kopi sambil menikmati suasana outdoor yang menyenangkan dan
              menenangkan. Kualitas dan rasa dari kopi menjadi prioritas utama
              kami dan disajikan oleh barista yang berpengalaman untuk
              memastikan rasa kopi yang lezat dan memuaskan. Selain kopi, kami
              juga menyajikan berbagai pilihan menu makanan dan minuman yang
              pastina enak.
            </p>
          </div>
        </Container>
      </section>

      {/* menu */}
      <section className="menu">
        <Container>
          <div className="menu__item text-center">
            <h1 className="menu__title mb-4">
              Our <span className="sub-title">Menu</span>
            </h1>

            {/* Coffee */}
            <div className="menu__content mt-3">
              <h2 className="text-start menu__title mb-4">Coffee</h2>
              <Row className="">
                {Data.coffee.map((item) => (
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
                {Data.noncoffee.map((item) => (
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
                {Data.makanan.map((item) => (
                  <Col key={item.id} xs="12" md="6" xl="4">
                    <CardMenu item={item} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>

      {/* gallery */}
      <section className="gallery">
        <Container>
          <h1 className="text-center gallery__title mb-4">Gallery</h1>
          <Row>
            <Col lg={4} md={12} className="mb-4 mb-lg-0">
              <img
                src={HomeBanner}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src={HomeBanner}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </Col>

            <Col lg={4} className="mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </Col>

            <Col lg={4} className="mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial */}
      <section className="testimonial">
        <Container>
          <div className="testimonial__item text-center">
            <h1 className="testimonial__title mb-4">
              Cerita <span className="sub-title">Mereka</span>
            </h1>
            <div className="testimonial__content">
              <div className="testimonial__content__carousel">
                <Carousel className="py-5">
                  {testimonials.map((testimonial) => (
                    <Carousel.Item key={testimonial.id}>
                      <p className="desc__testimonial fw-normal">
                        {testimonial.message}
                      </p>
                      <p className="desc__testimonial fw-bolder">
                        ~ {testimonial.name} ~
                      </p>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="testimonial__content__form mt-5 p-4 p-md-5">
                <h1 className="testimonial__title">
                  <span className="sub-title">Bagikan </span>
                  Cerita <span className="sub-title">Anda</span>
                </h1>
                <Form className="testimonial__form" onSubmit={handleSubmit}>
                  <Form.Group className="my-4" controlId="name">
                    <Form.Control
                      className="shadow-none field-form py-3 px-4"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukan Nama Anda..."
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="message">
                    <Form.Control
                      className="shadow-none field-form py-3 px-4"
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis Cerita Anda..."
                      required
                    />
                  </Form.Group>
                  <Button
                    className="button__submit__testimonial py-2 px-4"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layouting>
  );
};

export default HomePages;

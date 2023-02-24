import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../assets/css/Index.css";
import "../assets/css/Home.css";

const NotFound = () => {
  return (
    <>
      <Container className="mt-5">
        <div className="text-center text-white p-5">
          <h1 className="testimonial__title mb-4">
            404. <span className="sub-title">Page Not Found</span>
          </h1>
          <p className="text-why-us__desc">
            The requested page could not be found.
          </p>
          <Button href="/home" className="button__notfound py-2 px-5 mt-2">
            Back
          </Button>
        </div>
      </Container>
    </>
  );
};

export default NotFound;

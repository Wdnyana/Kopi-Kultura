import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  InputGroup,
} from "react-bootstrap";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../assets/css/NavbarComp.css";
import { Logo } from "../assets/img";

// search bar
const SearchBar = () => {
  return (
    <Form className="d-flex">
      <InputGroup>
        <Form.Control
          className="search-input shadow-none bg-transparent"
          variant="secondary"
          type="text"
          placeholder="Search Menu..."
          aria-label="Search"
        />
        <Button
          className="shadow-none btn-search"
          variant="outline-secondary"
          bg=""
          id="button-addon1"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup>
    </Form>
  );
};

// navbar content
const NavbarComp = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        ref={navRef}
        id="navbar-content"
        expand="xxxl"
        className="py-2 "
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={Logo}
              width="70"
              height="70"
              className="d-inline-block align-center"
              alt="Kultura logo"
            />
          </Navbar.Brand>
          <div className="search-form w-50 p-0">
            <SearchBar />
          </div>
          <Navbar.Toggle
            className="shadow-none border-0 p-0 text-white"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            className="shadow-none border-0"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              closeVariant="white"
              className="justify-content-end shadow-none border-0 text-white"
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center ps-4 h-50 flex-grow-1 pe-3">
                <Nav.Link
                  activeclassname="active"
                  className=" mb-3"
                  href="/home"
                  active
                >
                  HOME
                </Nav.Link>
                <Nav.Link className=" mb-3" href="/semua-menu" active>
                  MENU
                </Nav.Link>
                <Nav.Link className=" mb-3" href="/fasilitas" active>
                  FASILITAS
                </Nav.Link>
                <Nav.Link className=" mb-3" href="/tentang-kami" active>
                  TENTANG KAMI
                </Nav.Link>
                <Nav.Link className=" mb-3" href="/kontak-kami" active>
                  KONTAK
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;

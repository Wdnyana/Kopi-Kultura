import NavbarComp from "./NavbarComp";
import FooterComp from "./FooterComp";
import "../assets/css/Layouting.css";

const Layouting = (props) => {
  return (
    <div className="layouting">
      <header>
        <NavbarComp />
      </header>
      <main>{props.children}</main>
      <footer className="container-fluid footer-content">
        <FooterComp />
      </footer>
    </div>
  );
};

export default Layouting;

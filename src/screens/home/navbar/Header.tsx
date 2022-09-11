import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import sun from "../../../assets/images/Sun.svg";
import moon from "../../../assets/images/Moon.svg";
const Header = () => {
  const [navSize, setnavSize] = useState("94px");
  const [navColor, setnavColor] = useState("transparent");
  const [navPosition, setNavPosition] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColor("#2B2263") : setnavColor("transparent");
    window.scrollY > 80 ? setnavSize("68px") : setnavSize("94px");
    window.scrollY > 80 ? setNavPosition(false) : setNavPosition(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <div
        className={
          navPosition === true
            ? styles.header
            : `${styles.headerFixed} ${styles.header}`
        }
      >
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            style={{
              backgroundColor: navColor,
              height: navSize,
              transition: "all 1s",
            }}
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <div className={styles.logoWrapper}>
                  <div className={styles.circle}></div>
                  <span>ProjectROI</span>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <button className={styles.createAccBtn}>
                      Create an Account
                    </button>
                    <div className={styles.iconsWrapper}>
                      <img src={sun} alt="" />
                      <img src={moon} alt="" />
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default Header;

import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { socialNetworks } from "../../assets/data/socials"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex align-items-baseline">
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">Dendro</h1>
              </div>
            </div>
            <p className="footer__text mt-1">
              Llevamos 10 años implementando soluciones ambientales en terrenos afectados por las actividades de grandes proyectos mineros, petroleros y de construcción de infraestructura.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Hidrosembradoras</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">FINN</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">VERDETEC</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Insumos</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/tienda">Enmienda biótica</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/tienda">Control de polvo</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/tienda">Floculantes</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/tienda">Insumos para hidrosiembra</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contacto</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+(51) 997 577703</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>sales@dendro.us</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <div className="d-flex justify-content-evenly socials-container">

              {socialNetworks.map((social) => (
                <span
                key={social.name}
                aria-label={social.name}
                className="social-icon d-flex align-items-center justify-content-center"
                >
                    <a href={social.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {social.icon}
                    </a>
                </span>
              ))}
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by
              <a href="https://github.com/santizabe"> Santiago Zapata</a>
              . All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

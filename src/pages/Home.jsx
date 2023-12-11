import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Services from "../services/Services";
import dendroLogo from "../assets/dendro_logo_hd.jpg"

const Home = () => {

  return (
    <Helmet title={"Inicio"}>
      <section className="hero__section">
        <Container>
          <Row className="bg-light p-2 rounded-1">
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Bienvenidos a Dendro SAC</p>
                <h2>Expertos en Hidrosiembra</h2>
                <p>
                  Somos líderes en soluciones ambientales y paisajísticas, especialistas en hidrosiembra, revegetación, reforestación y control de erosión.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/tienda">Explorar productos</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6" className="d-flex justify-content-center align-items-center">
              <div className="hero__img">
                <img src={dendroLogo} alt="Logo de Dendro SAC" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </Helmet>
  );
};

export default Home;

import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Información de pago</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Ingresa tu nombre" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Ingresa tu email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Número de teléfono" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Dirección de envío" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Ciudad" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Código postal" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="País" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Cantidad total: <span>{totalQty} item(s)</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Envío: <br />
                    envío gratis
                  </span>
                  <span>$0</span>
                </h6>

                <h4>
                  Total: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Siguiente
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

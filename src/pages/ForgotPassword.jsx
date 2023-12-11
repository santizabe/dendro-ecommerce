import React, { useState } from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../custom-hooks/useAuth";
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../firebase.config";

const ForgotPassword = () => {
    const userInfo = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    if (userInfo)
        return navigate('/dashboard');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Te hemos enviado un correo. Revisalo y sigue las instrucciones")
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    return (
        <Helmet title="Restablecer contraseña">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" className="m-auto text-center">
                            <h3 className="fw-bold mb-4">Restablece tu contraseña</h3>

                            <Form className="auth__form">
                                <FormGroup className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Ingresa tu email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </FormGroup>
                                <button onClick={handleForgotPassword} className="buy__btn auth__btn">
                                    Enviar
                                </button>
                                <p>
                                    Aun no tienes una cuenta?{" "}
                                    <Link to="/signup">Crear Una Cuenta</Link>
                                </p>
                                <p>
                                    <Link to="/login">iniciar sesión</Link>
                                </p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ForgotPassword;
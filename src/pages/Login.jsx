import  { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import LoadingPortal from '../components/Modals/LoadingPortal'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import "../styles/login.css";
import useAuth from "../custom-hooks/useAuth";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import { setAdmin } from "../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userInfo = useAuth();
  const dispatch = useDispatch();
  const adminState = useSelector(state => state.admin.isAdmin);
  const [isAdmin, setIsAdmin] = useState(adminState);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const checkAdmin = async (userId) => {
      console.log("checking admin..");
      const docRef = doc(db, 'administradores', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(setAdmin(true));
        setIsAdmin(true);
        setLoading(false);
        navigate("/dashboard");
      }
      else {
        setLoading(false);
        navigate("/tienda")
      }
    }
    if (isAdmin)
    {
      setLoading(false);
      navigate("/dashboard");
    }
    if (userInfo !== null) {
      checkAdmin(userInfo.uid);
    }
    else
      setLoading(false);
  }, [userInfo]);

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Successfully logged in");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    loading ? <LoadingPortal /> :
      <Helmet title="Login">
        <section>
          <Container>
            <Row>
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Inicio De Sesión</h3>

                <Form className="auth__form" onSubmit={signIn}>
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Ingresa tu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <button type="submit" className="buy__btn auth__btn">
                    Iniciar Sesion
                  </button>
                  <p>
                    Aun no tienes una cuenta?{" "}
                    <Link to="/signup">Crear Una Cuenta</Link>
                  </p>
                  <p>
                    <Link to="/password-reset">Olvidaste tu contraseña?</Link>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default Login;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const Users = () => {
  const { data: usersData, loading } = useGetData("users");

  const deleteUser = async id => {
    await deleteDoc(doc(db, "users", id));
    toast.success("user deleted!");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Usuarios</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table ">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Accion</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <div className="pt-5 fw-bold">Cargando.....</div>
                ) : (
                  usersData?.map(user => (
                    <tr key={user.uid}>
                      <td>
                        <img src={user.photoURL} alt="" />
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteUser(user.uid);
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;

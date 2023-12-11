import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";

import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async e => {
    e.preventDefault();
    setLoading(true);

    // ====== add product to the firebase database =========
    try {
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload progress: ${progress}%`);
        },
        (error) => {
          toast.error(`Error al subir imagen: ${error}`);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const docRef = collection(db, "products");
          await addDoc(docRef, {
            productName: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: downloadURL,
          });
        });
      setLoading(false);
      toast.success("Producto añadido exitosamente!");
      navigate("/dashboard/all-products");
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("producto no añadido!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5 ">Cargando...</h4>
            ) : (
              <>
                <h4 className="mb-5">Añadir Producto</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className="form__group">
                    <span>Título del producto</span>
                    <input
                      type="text"
                      placeholder="E.g. Sofa cama"
                      value={enterTitle}
                      onChange={e => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Breve Descripción</span>
                    <input
                      type="text"
                      placeholder="Breve descripción del producto"
                      value={enterShortDesc}
                      onChange={e => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <span>Descripción</span>
                    <input
                      type="text"
                      placeholder="Description detallada del producto"
                      value={enterDescription}
                      onChange={e => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span>Precio</span>
                      <input
                        type="number"
                        placeholder="$100"
                        value={enterPrice}
                        onChange={e => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group w-50">
                      <span>Categoría</span>
                      <select
                        className="w-100 p-2"
                        onChange={e => setEnterCategory(e.target.value)}
                      >
                        <option>Selecciona una categoría</option>
                        <option value="Hidrosembradoras">Hidrosembradoras</option>
                        <option value="Insumos">Insumos para Hidrosiembra</option>
                        <option value="Enmienda biotica">Enmienda Biótica</option>
                        <option value="Control de polvo">Control de polvo</option>
                        <option value="Floculantes">Floculantes</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form__group ">
                      <span>Imagen del producto</span>
                      <input
                        type="file"
                        onChange={e => setEnterProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>

                  <button className="buy__btn " type="submit">
                    Añadir producto
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
